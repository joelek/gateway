// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.

import * as autoguard from "@joelek/ts-autoguard/dist/lib-shared";
import { AlgorithmIdentifier } from "../../pkcs5";
import { BitString } from "../../asn1";
import { Integer } from "../../asn1";
import { OctetString } from "../../asn1";
import { Sequence } from "../../asn1";

export const ASN1BitString: autoguard.serialization.MessageGuard<ASN1BitString> = autoguard.guards.Reference.of(() => BitString);

export type ASN1BitString = autoguard.guards.Reference<BitString>;

export const ASN1Integer: autoguard.serialization.MessageGuard<ASN1Integer> = autoguard.guards.Reference.of(() => Integer);

export type ASN1Integer = autoguard.guards.Reference<Integer>;

export const ASN1OctetString: autoguard.serialization.MessageGuard<ASN1OctetString> = autoguard.guards.Reference.of(() => OctetString);

export type ASN1OctetString = autoguard.guards.Reference<OctetString>;

export const ASN1Sequence: autoguard.serialization.MessageGuard<ASN1Sequence> = autoguard.guards.Reference.of(() => Sequence);

export type ASN1Sequence = autoguard.guards.Reference<Sequence>;

export const PKCS5AlgorithmIdentifier: autoguard.serialization.MessageGuard<PKCS5AlgorithmIdentifier> = autoguard.guards.Reference.of(() => AlgorithmIdentifier);

export type PKCS5AlgorithmIdentifier = autoguard.guards.Reference<AlgorithmIdentifier>;

export const PublicKeyInfo: autoguard.serialization.MessageGuard<PublicKeyInfo> = autoguard.guards.Intersection.of(
	autoguard.guards.Reference.of(() => ASN1Sequence),
	autoguard.guards.Object.of({
		"data": autoguard.guards.Tuple.of(
			autoguard.guards.Reference.of(() => PKCS5AlgorithmIdentifier),
			autoguard.guards.Reference.of(() => ASN1BitString)
		)
	}, {})
);

export type PublicKeyInfo = autoguard.guards.Intersection<[
	autoguard.guards.Reference<ASN1Sequence>,
	autoguard.guards.Object<{
		"data": autoguard.guards.Tuple<[
			autoguard.guards.Reference<PKCS5AlgorithmIdentifier>,
			autoguard.guards.Reference<ASN1BitString>
		]>
	}, {}>
]>;

export const PrivateKeyInfo: autoguard.serialization.MessageGuard<PrivateKeyInfo> = autoguard.guards.Intersection.of(
	autoguard.guards.Reference.of(() => ASN1Sequence),
	autoguard.guards.Object.of({
		"data": autoguard.guards.Tuple.of(
			autoguard.guards.Reference.of(() => ASN1Integer),
			autoguard.guards.Reference.of(() => PKCS5AlgorithmIdentifier),
			autoguard.guards.Reference.of(() => ASN1OctetString)
		)
	}, {})
);

export type PrivateKeyInfo = autoguard.guards.Intersection<[
	autoguard.guards.Reference<ASN1Sequence>,
	autoguard.guards.Object<{
		"data": autoguard.guards.Tuple<[
			autoguard.guards.Reference<ASN1Integer>,
			autoguard.guards.Reference<PKCS5AlgorithmIdentifier>,
			autoguard.guards.Reference<ASN1OctetString>
		]>
	}, {}>
]>;

export const EncryptedPrivateKeyInfo: autoguard.serialization.MessageGuard<EncryptedPrivateKeyInfo> = autoguard.guards.Intersection.of(
	autoguard.guards.Reference.of(() => ASN1Sequence),
	autoguard.guards.Object.of({
		"data": autoguard.guards.Tuple.of(
			autoguard.guards.Reference.of(() => PKCS5AlgorithmIdentifier),
			autoguard.guards.Reference.of(() => ASN1OctetString)
		)
	}, {})
);

export type EncryptedPrivateKeyInfo = autoguard.guards.Intersection<[
	autoguard.guards.Reference<ASN1Sequence>,
	autoguard.guards.Object<{
		"data": autoguard.guards.Tuple<[
			autoguard.guards.Reference<PKCS5AlgorithmIdentifier>,
			autoguard.guards.Reference<ASN1OctetString>
		]>
	}, {}>
]>;

export namespace Autoguard {
	export const Guards = {
		"ASN1BitString": autoguard.guards.Reference.of(() => ASN1BitString),
		"ASN1Integer": autoguard.guards.Reference.of(() => ASN1Integer),
		"ASN1OctetString": autoguard.guards.Reference.of(() => ASN1OctetString),
		"ASN1Sequence": autoguard.guards.Reference.of(() => ASN1Sequence),
		"PKCS5AlgorithmIdentifier": autoguard.guards.Reference.of(() => PKCS5AlgorithmIdentifier),
		"PublicKeyInfo": autoguard.guards.Reference.of(() => PublicKeyInfo),
		"PrivateKeyInfo": autoguard.guards.Reference.of(() => PrivateKeyInfo),
		"EncryptedPrivateKeyInfo": autoguard.guards.Reference.of(() => EncryptedPrivateKeyInfo)
	};

	export type Guards = { [A in keyof typeof Guards]: ReturnType<typeof Guards[A]["as"]>; };

	export const Requests = {};

	export type Requests = { [A in keyof typeof Requests]: ReturnType<typeof Requests[A]["as"]>; };

	export const Responses = {};

	export type Responses = { [A in keyof typeof Responses]: ReturnType<typeof Responses[A]["as"]>; };
};