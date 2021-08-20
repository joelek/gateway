import * as libcrypto from "crypto";
import * as encoding from "../encoding";
import * as json from "../json";

// TODO: Add support for other signature algorithms.

async function encode(json: json.Any): Promise<string> {
	return Promise.resolve(json)
		.then(encoding.convertJSONToString)
		.then(encoding.convertStringToUTF8Buffer)
		.then(encoding.convertBufferToBase64URLString);
};

export type Blob = {
	protected: string;
	payload: string;
	signature: string;
};

export async function sign(private_key: libcrypto.KeyLike, protected_json?: json.Object, payload_json?: json.Any): Promise<Blob> {
	let protected_base64url = await encode({
		...protected_json,
		alg: `RS256`
	});
	let payload_base64url = (payload_json != null ? await encode(payload_json) : ``);
	let signer = libcrypto.createSign(`SHA256`);
	signer.update(`${protected_base64url}.${payload_base64url}`);
	let signature = signer.sign(private_key);
	let signature_base64url = await encoding.convertBufferToBase64URLString(signature);
	return {
		protected: protected_base64url,
		payload: payload_base64url,
		signature: signature_base64url
	};
};

export async function verify(blob: Blob, public_key: libcrypto.KeyLike): Promise<boolean> {
	let verifier = libcrypto.createVerify(`SHA256`);
	verifier.update(`${blob.protected}.${blob.payload}`);
	let signature = await encoding.convertBase64URLStringToBuffer(blob.signature);
	return verifier.verify(public_key, signature);
};