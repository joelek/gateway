import * as libcrypto from "crypto";
import * as asn1 from "../asn1";
import * as der from "../der";
import * as jwk from "../jwk";
import * as jws from "../jws";
import * as pkcs5 from "../pkcs5";
import * as pkcs8 from "../pkcs8";
import * as schema from "./schema";
import * as parsing from "../parsing";

export * as schema from "./schema";

export function createExtension(hostnames: Array<string>): Buffer {
	if (hostnames.length === 0) {
		throw `Expected at least one hostname!`;
	}
	let node: asn1.Node = {
		...asn1.SEQUENCE,
		data: hostnames.map((hostname) => {
			let buffer = Buffer.from(hostname);
			return {
				kind: "CONTEXT",
				form: "PRIMITIVE",
				type: "INTEGER", // Context-specific type.
				data: buffer.toString("base64url")
			};
		})
	};
	return der.node.serialize(node);
};

export function createCertificateRequest(hostnames: Array<string>, key: libcrypto.KeyObject, options?: Partial<{
	signatureAlgorithm: pkcs5.signature.SignatureAlgorithm
}>): Buffer {
	if (hostnames.length === 0) {
		throw `Expected at least one hostname!`;
	}
	let signatureAlgorithm = options?.signatureAlgorithm ?? jws.getDefaultAlgorithm(key);
	let subject: asn1.Node = {
		...asn1.SEQUENCE,
		data: [
			{
				...asn1.SET,
				data: [
					{
						...asn1.SEQUENCE,
						data: [
							{
								...asn1.OBJECT_IDENTIFER,
								data: "2.5.4.3"
							},
							{
								...asn1.UTF8_STRING,
								data: Buffer.from(hostnames[0]).toString("base64url")
							}
						]
					}
				]
			}
		]
	};
	let spki = pkcs8.PublicKeyInfo.as(der.node.parse(new parsing.Parser(libcrypto.createPublicKey(key).export({ format: "der", type: "spki" }))));
	let extensions = new Array<asn1.Node>({
		...asn1.SEQUENCE,
		data: [
			{
				...asn1.OBJECT_IDENTIFER,
				data: "1.2.840.113549.1.9.14"
			},
			{
				...asn1.SET,
				data: [
					{
						...asn1.SEQUENCE,
						data: [
							{
								...asn1.SEQUENCE,
								data: [
									{
										...asn1.OBJECT_IDENTIFER,
										data: "2.5.29.17"
									},
									{
										...asn1.OCTET_STRING,
										data: createExtension(hostnames).toString("base64url")
									}
								]
							}
						]
					}
				]
			}
		]
	});
	let cri: schema.CertificationRequestInfo = {
		...asn1.SEQUENCE,
		data: [
			{
				...asn1.INTEGER,
				data: asn1.encodeInteger(BigInt(0)).toString("base64url")
			},
			{
				...subject
			},
			{
				...spki
			},
			{
				kind: "CONTEXT",
				form: "CONSTRUCTED",
				type: "END_OF_CONTENT", // Context-specific type.
				data: extensions
			}
		]
	};
	let signature = Buffer.concat([Buffer.alloc(1), signatureAlgorithm.sign(der.node.serialize(cri), key)]);
	let cr: schema.CertificationRequest = {
		...asn1.SEQUENCE,
		data: [
			{
				...cri
			},
			{
				...signatureAlgorithm.getIdentifier()
			},
			{
				...asn1.BIT_STRING,
				data: signature.toString("base64url")
			}

		]
	};
	return der.node.serialize(cr);
};
