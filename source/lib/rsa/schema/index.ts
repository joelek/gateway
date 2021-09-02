// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.

import * as autoguard from "@joelek/ts-autoguard/dist/lib-shared";
import { BitString } from "../../asno/schema";
import { Integer } from "../../asno/schema";
import { Node } from "../../asno/schema";
import { Null } from "../../asno/schema";
import { ObjectIdentifier } from "../../asno/schema";
import { OctetString } from "../../asno/schema";
import { Sequence } from "../../asno/schema";

export const ASNOBitString: autoguard.serialization.MessageGuard<ASNOBitString> = autoguard.guards.Reference.of(() => BitString);

export type ASNOBitString = autoguard.guards.Reference<BitString>;

export const ASNOInteger: autoguard.serialization.MessageGuard<ASNOInteger> = autoguard.guards.Reference.of(() => Integer);

export type ASNOInteger = autoguard.guards.Reference<Integer>;

export const ASNONode: autoguard.serialization.MessageGuard<ASNONode> = autoguard.guards.Reference.of(() => Node);

export type ASNONode = autoguard.guards.Reference<Node>;

export const ASNONull: autoguard.serialization.MessageGuard<ASNONull> = autoguard.guards.Reference.of(() => Null);

export type ASNONull = autoguard.guards.Reference<Null>;

export const ASNOObjectIdentifier: autoguard.serialization.MessageGuard<ASNOObjectIdentifier> = autoguard.guards.Reference.of(() => ObjectIdentifier);

export type ASNOObjectIdentifier = autoguard.guards.Reference<ObjectIdentifier>;

export const ASNOOctetString: autoguard.serialization.MessageGuard<ASNOOctetString> = autoguard.guards.Reference.of(() => OctetString);

export type ASNOOctetString = autoguard.guards.Reference<OctetString>;

export const ASNOSequence: autoguard.serialization.MessageGuard<ASNOSequence> = autoguard.guards.Reference.of(() => Sequence);

export type ASNOSequence = autoguard.guards.Reference<Sequence>;

export const AlgorithmIdentifier: autoguard.serialization.MessageGuard<AlgorithmIdentifier> = autoguard.guards.Intersection.of(
	autoguard.guards.Reference.of(() => ASNOSequence),
	autoguard.guards.Object.of({
		"data": autoguard.guards.Tuple.of(
			autoguard.guards.Reference.of(() => ASNOObjectIdentifier),
			autoguard.guards.Reference.of(() => ASNONode)
		)
	}, {})
);

export type AlgorithmIdentifier = autoguard.guards.Intersection<[
	autoguard.guards.Reference<ASNOSequence>,
	autoguard.guards.Object<{
		"data": autoguard.guards.Tuple<[
			autoguard.guards.Reference<ASNOObjectIdentifier>,
			autoguard.guards.Reference<ASNONode>
		]>
	}, {}>
]>;

export const PublicKeyInfo: autoguard.serialization.MessageGuard<PublicKeyInfo> = autoguard.guards.Intersection.of(
	autoguard.guards.Reference.of(() => ASNOSequence),
	autoguard.guards.Object.of({
		"data": autoguard.guards.Tuple.of(
			autoguard.guards.Reference.of(() => AlgorithmIdentifier),
			autoguard.guards.Reference.of(() => ASNOBitString)
		)
	}, {})
);

export type PublicKeyInfo = autoguard.guards.Intersection<[
	autoguard.guards.Reference<ASNOSequence>,
	autoguard.guards.Object<{
		"data": autoguard.guards.Tuple<[
			autoguard.guards.Reference<AlgorithmIdentifier>,
			autoguard.guards.Reference<ASNOBitString>
		]>
	}, {}>
]>;

export const PrivateKeyInfo: autoguard.serialization.MessageGuard<PrivateKeyInfo> = autoguard.guards.Intersection.of(
	autoguard.guards.Reference.of(() => ASNOSequence),
	autoguard.guards.Object.of({
		"data": autoguard.guards.Tuple.of(
			autoguard.guards.Reference.of(() => ASNOInteger),
			autoguard.guards.Reference.of(() => AlgorithmIdentifier),
			autoguard.guards.Reference.of(() => ASNOOctetString)
		)
	}, {})
);

export type PrivateKeyInfo = autoguard.guards.Intersection<[
	autoguard.guards.Reference<ASNOSequence>,
	autoguard.guards.Object<{
		"data": autoguard.guards.Tuple<[
			autoguard.guards.Reference<ASNOInteger>,
			autoguard.guards.Reference<AlgorithmIdentifier>,
			autoguard.guards.Reference<ASNOOctetString>
		]>
	}, {}>
]>;

export const EncryptedPrivateKeyInfo: autoguard.serialization.MessageGuard<EncryptedPrivateKeyInfo> = autoguard.guards.Intersection.of(
	autoguard.guards.Reference.of(() => ASNOSequence),
	autoguard.guards.Object.of({
		"data": autoguard.guards.Tuple.of(
			autoguard.guards.Reference.of(() => AlgorithmIdentifier),
			autoguard.guards.Reference.of(() => ASNOOctetString)
		)
	}, {})
);

export type EncryptedPrivateKeyInfo = autoguard.guards.Intersection<[
	autoguard.guards.Reference<ASNOSequence>,
	autoguard.guards.Object<{
		"data": autoguard.guards.Tuple<[
			autoguard.guards.Reference<AlgorithmIdentifier>,
			autoguard.guards.Reference<ASNOOctetString>
		]>
	}, {}>
]>;

export const AES256CBCAlgorithmIdentifier: autoguard.serialization.MessageGuard<AES256CBCAlgorithmIdentifier> = autoguard.guards.Intersection.of(
	autoguard.guards.Reference.of(() => AlgorithmIdentifier),
	autoguard.guards.Object.of({
		"data": autoguard.guards.Tuple.of(
			autoguard.guards.Intersection.of(
				autoguard.guards.Reference.of(() => ASNOObjectIdentifier),
				autoguard.guards.Object.of({
					"data": autoguard.guards.Union.of(
						autoguard.guards.StringLiteral.of("2.16.840.1.101.3.4.1.42"),
						autoguard.guards.StringLiteral.of("Mi4xNi44NDAuMS4xMDEuMy40LjEuNDI=")
					)
				}, {})
			),
			autoguard.guards.Reference.of(() => ASNOOctetString)
		)
	}, {})
);

export type AES256CBCAlgorithmIdentifier = autoguard.guards.Intersection<[
	autoguard.guards.Reference<AlgorithmIdentifier>,
	autoguard.guards.Object<{
		"data": autoguard.guards.Tuple<[
			autoguard.guards.Intersection<[
				autoguard.guards.Reference<ASNOObjectIdentifier>,
				autoguard.guards.Object<{
					"data": autoguard.guards.Union<[
						autoguard.guards.StringLiteral<"2.16.840.1.101.3.4.1.42">,
						autoguard.guards.StringLiteral<"Mi4xNi44NDAuMS4xMDEuMy40LjEuNDI=">
					]>
				}, {}>
			]>,
			autoguard.guards.Reference<ASNOOctetString>
		]>
	}, {}>
]>;

export const HMACSHA256AlgorithmIdentifier: autoguard.serialization.MessageGuard<HMACSHA256AlgorithmIdentifier> = autoguard.guards.Intersection.of(
	autoguard.guards.Reference.of(() => AlgorithmIdentifier),
	autoguard.guards.Object.of({
		"data": autoguard.guards.Tuple.of(
			autoguard.guards.Intersection.of(
				autoguard.guards.Reference.of(() => ASNOObjectIdentifier),
				autoguard.guards.Object.of({
					"data": autoguard.guards.Union.of(
						autoguard.guards.StringLiteral.of("1.2.840.113549.2.9"),
						autoguard.guards.StringLiteral.of("MS4yLjg0MC4xMTM1NDkuMi45")
					)
				}, {})
			),
			autoguard.guards.Reference.of(() => ASNONull)
		)
	}, {})
);

export type HMACSHA256AlgorithmIdentifier = autoguard.guards.Intersection<[
	autoguard.guards.Reference<AlgorithmIdentifier>,
	autoguard.guards.Object<{
		"data": autoguard.guards.Tuple<[
			autoguard.guards.Intersection<[
				autoguard.guards.Reference<ASNOObjectIdentifier>,
				autoguard.guards.Object<{
					"data": autoguard.guards.Union<[
						autoguard.guards.StringLiteral<"1.2.840.113549.2.9">,
						autoguard.guards.StringLiteral<"MS4yLjg0MC4xMTM1NDkuMi45">
					]>
				}, {}>
			]>,
			autoguard.guards.Reference<ASNONull>
		]>
	}, {}>
]>;

export const PBKDF2AlgorithmIdentifier: autoguard.serialization.MessageGuard<PBKDF2AlgorithmIdentifier> = autoguard.guards.Intersection.of(
	autoguard.guards.Reference.of(() => AlgorithmIdentifier),
	autoguard.guards.Object.of({
		"data": autoguard.guards.Tuple.of(
			autoguard.guards.Intersection.of(
				autoguard.guards.Reference.of(() => ASNOObjectIdentifier),
				autoguard.guards.Object.of({
					"data": autoguard.guards.Union.of(
						autoguard.guards.StringLiteral.of("1.2.840.113549.1.5.12"),
						autoguard.guards.StringLiteral.of("MS4yLjg0MC4xMTM1NDkuMS41LjEy")
					)
				}, {})
			),
			autoguard.guards.Intersection.of(
				autoguard.guards.Reference.of(() => ASNOSequence),
				autoguard.guards.Object.of({
					"data": autoguard.guards.Union.of(
						autoguard.guards.Tuple.of(
							autoguard.guards.Union.of(
								autoguard.guards.Reference.of(() => ASNOOctetString),
								autoguard.guards.Reference.of(() => AlgorithmIdentifier)
							),
							autoguard.guards.Reference.of(() => ASNOInteger),
							autoguard.guards.Reference.of(() => ASNOInteger),
							autoguard.guards.Reference.of(() => AlgorithmIdentifier)
						),
						autoguard.guards.Tuple.of(
							autoguard.guards.Union.of(
								autoguard.guards.Reference.of(() => ASNOOctetString),
								autoguard.guards.Reference.of(() => AlgorithmIdentifier)
							),
							autoguard.guards.Reference.of(() => ASNOInteger),
							autoguard.guards.Reference.of(() => AlgorithmIdentifier)
						)
					)
				}, {})
			)
		)
	}, {})
);

export type PBKDF2AlgorithmIdentifier = autoguard.guards.Intersection<[
	autoguard.guards.Reference<AlgorithmIdentifier>,
	autoguard.guards.Object<{
		"data": autoguard.guards.Tuple<[
			autoguard.guards.Intersection<[
				autoguard.guards.Reference<ASNOObjectIdentifier>,
				autoguard.guards.Object<{
					"data": autoguard.guards.Union<[
						autoguard.guards.StringLiteral<"1.2.840.113549.1.5.12">,
						autoguard.guards.StringLiteral<"MS4yLjg0MC4xMTM1NDkuMS41LjEy">
					]>
				}, {}>
			]>,
			autoguard.guards.Intersection<[
				autoguard.guards.Reference<ASNOSequence>,
				autoguard.guards.Object<{
					"data": autoguard.guards.Union<[
						autoguard.guards.Tuple<[
							autoguard.guards.Union<[
								autoguard.guards.Reference<ASNOOctetString>,
								autoguard.guards.Reference<AlgorithmIdentifier>
							]>,
							autoguard.guards.Reference<ASNOInteger>,
							autoguard.guards.Reference<ASNOInteger>,
							autoguard.guards.Reference<AlgorithmIdentifier>
						]>,
						autoguard.guards.Tuple<[
							autoguard.guards.Union<[
								autoguard.guards.Reference<ASNOOctetString>,
								autoguard.guards.Reference<AlgorithmIdentifier>
							]>,
							autoguard.guards.Reference<ASNOInteger>,
							autoguard.guards.Reference<AlgorithmIdentifier>
						]>
					]>
				}, {}>
			]>
		]>
	}, {}>
]>;

export const PBES2AlgorithmIdentifier: autoguard.serialization.MessageGuard<PBES2AlgorithmIdentifier> = autoguard.guards.Intersection.of(
	autoguard.guards.Reference.of(() => AlgorithmIdentifier),
	autoguard.guards.Object.of({
		"data": autoguard.guards.Tuple.of(
			autoguard.guards.Intersection.of(
				autoguard.guards.Reference.of(() => ASNOObjectIdentifier),
				autoguard.guards.Object.of({
					"data": autoguard.guards.Union.of(
						autoguard.guards.StringLiteral.of("1.2.840.113549.1.5.13"),
						autoguard.guards.StringLiteral.of("MS4yLjg0MC4xMTM1NDkuMS41LjEz")
					)
				}, {})
			),
			autoguard.guards.Intersection.of(
				autoguard.guards.Reference.of(() => ASNOSequence),
				autoguard.guards.Object.of({
					"data": autoguard.guards.Tuple.of(
						autoguard.guards.Reference.of(() => AlgorithmIdentifier),
						autoguard.guards.Reference.of(() => AlgorithmIdentifier)
					)
				}, {})
			)
		)
	}, {})
);

export type PBES2AlgorithmIdentifier = autoguard.guards.Intersection<[
	autoguard.guards.Reference<AlgorithmIdentifier>,
	autoguard.guards.Object<{
		"data": autoguard.guards.Tuple<[
			autoguard.guards.Intersection<[
				autoguard.guards.Reference<ASNOObjectIdentifier>,
				autoguard.guards.Object<{
					"data": autoguard.guards.Union<[
						autoguard.guards.StringLiteral<"1.2.840.113549.1.5.13">,
						autoguard.guards.StringLiteral<"MS4yLjg0MC4xMTM1NDkuMS41LjEz">
					]>
				}, {}>
			]>,
			autoguard.guards.Intersection<[
				autoguard.guards.Reference<ASNOSequence>,
				autoguard.guards.Object<{
					"data": autoguard.guards.Tuple<[
						autoguard.guards.Reference<AlgorithmIdentifier>,
						autoguard.guards.Reference<AlgorithmIdentifier>
					]>
				}, {}>
			]>
		]>
	}, {}>
]>;

export const OtherPrimeInfo: autoguard.serialization.MessageGuard<OtherPrimeInfo> = autoguard.guards.Intersection.of(
	autoguard.guards.Reference.of(() => ASNOSequence),
	autoguard.guards.Object.of({
		"data": autoguard.guards.Tuple.of(
			autoguard.guards.Reference.of(() => ASNOInteger),
			autoguard.guards.Reference.of(() => ASNOInteger),
			autoguard.guards.Reference.of(() => ASNOInteger)
		)
	}, {})
);

export type OtherPrimeInfo = autoguard.guards.Intersection<[
	autoguard.guards.Reference<ASNOSequence>,
	autoguard.guards.Object<{
		"data": autoguard.guards.Tuple<[
			autoguard.guards.Reference<ASNOInteger>,
			autoguard.guards.Reference<ASNOInteger>,
			autoguard.guards.Reference<ASNOInteger>
		]>
	}, {}>
]>;

export const OtherPrimeInfos: autoguard.serialization.MessageGuard<OtherPrimeInfos> = autoguard.guards.Intersection.of(
	autoguard.guards.Reference.of(() => ASNOSequence),
	autoguard.guards.Object.of({
		"data": autoguard.guards.Array.of(autoguard.guards.Reference.of(() => OtherPrimeInfo))
	}, {})
);

export type OtherPrimeInfos = autoguard.guards.Intersection<[
	autoguard.guards.Reference<ASNOSequence>,
	autoguard.guards.Object<{
		"data": autoguard.guards.Array<autoguard.guards.Reference<OtherPrimeInfo>>
	}, {}>
]>;

export const RSAPublicKey: autoguard.serialization.MessageGuard<RSAPublicKey> = autoguard.guards.Intersection.of(
	autoguard.guards.Reference.of(() => ASNOSequence),
	autoguard.guards.Object.of({
		"data": autoguard.guards.Tuple.of(
			autoguard.guards.Reference.of(() => ASNOInteger),
			autoguard.guards.Reference.of(() => ASNOInteger)
		)
	}, {})
);

export type RSAPublicKey = autoguard.guards.Intersection<[
	autoguard.guards.Reference<ASNOSequence>,
	autoguard.guards.Object<{
		"data": autoguard.guards.Tuple<[
			autoguard.guards.Reference<ASNOInteger>,
			autoguard.guards.Reference<ASNOInteger>
		]>
	}, {}>
]>;

export const RSAPrivateKey: autoguard.serialization.MessageGuard<RSAPrivateKey> = autoguard.guards.Intersection.of(
	autoguard.guards.Reference.of(() => ASNOSequence),
	autoguard.guards.Object.of({
		"data": autoguard.guards.Tuple.of(
			autoguard.guards.Reference.of(() => ASNOInteger),
			autoguard.guards.Reference.of(() => ASNOInteger),
			autoguard.guards.Reference.of(() => ASNOInteger),
			autoguard.guards.Reference.of(() => ASNOInteger),
			autoguard.guards.Reference.of(() => ASNOInteger),
			autoguard.guards.Reference.of(() => ASNOInteger),
			autoguard.guards.Reference.of(() => ASNOInteger),
			autoguard.guards.Reference.of(() => ASNOInteger),
			autoguard.guards.Reference.of(() => ASNOInteger),
			autoguard.guards.Union.of(
				autoguard.guards.Reference.of(() => OtherPrimeInfos),
				autoguard.guards.Undefined
			)
		)
	}, {})
);

export type RSAPrivateKey = autoguard.guards.Intersection<[
	autoguard.guards.Reference<ASNOSequence>,
	autoguard.guards.Object<{
		"data": autoguard.guards.Tuple<[
			autoguard.guards.Reference<ASNOInteger>,
			autoguard.guards.Reference<ASNOInteger>,
			autoguard.guards.Reference<ASNOInteger>,
			autoguard.guards.Reference<ASNOInteger>,
			autoguard.guards.Reference<ASNOInteger>,
			autoguard.guards.Reference<ASNOInteger>,
			autoguard.guards.Reference<ASNOInteger>,
			autoguard.guards.Reference<ASNOInteger>,
			autoguard.guards.Reference<ASNOInteger>,
			autoguard.guards.Union<[
				autoguard.guards.Reference<OtherPrimeInfos>,
				autoguard.guards.Undefined
			]>
		]>
	}, {}>
]>;

export namespace Autoguard {
	export const Guards = {
		"ASNOBitString": autoguard.guards.Reference.of(() => ASNOBitString),
		"ASNOInteger": autoguard.guards.Reference.of(() => ASNOInteger),
		"ASNONode": autoguard.guards.Reference.of(() => ASNONode),
		"ASNONull": autoguard.guards.Reference.of(() => ASNONull),
		"ASNOObjectIdentifier": autoguard.guards.Reference.of(() => ASNOObjectIdentifier),
		"ASNOOctetString": autoguard.guards.Reference.of(() => ASNOOctetString),
		"ASNOSequence": autoguard.guards.Reference.of(() => ASNOSequence),
		"AlgorithmIdentifier": autoguard.guards.Reference.of(() => AlgorithmIdentifier),
		"PublicKeyInfo": autoguard.guards.Reference.of(() => PublicKeyInfo),
		"PrivateKeyInfo": autoguard.guards.Reference.of(() => PrivateKeyInfo),
		"EncryptedPrivateKeyInfo": autoguard.guards.Reference.of(() => EncryptedPrivateKeyInfo),
		"AES256CBCAlgorithmIdentifier": autoguard.guards.Reference.of(() => AES256CBCAlgorithmIdentifier),
		"HMACSHA256AlgorithmIdentifier": autoguard.guards.Reference.of(() => HMACSHA256AlgorithmIdentifier),
		"PBKDF2AlgorithmIdentifier": autoguard.guards.Reference.of(() => PBKDF2AlgorithmIdentifier),
		"PBES2AlgorithmIdentifier": autoguard.guards.Reference.of(() => PBES2AlgorithmIdentifier),
		"OtherPrimeInfo": autoguard.guards.Reference.of(() => OtherPrimeInfo),
		"OtherPrimeInfos": autoguard.guards.Reference.of(() => OtherPrimeInfos),
		"RSAPublicKey": autoguard.guards.Reference.of(() => RSAPublicKey),
		"RSAPrivateKey": autoguard.guards.Reference.of(() => RSAPrivateKey)
	};

	export type Guards = { [A in keyof typeof Guards]: ReturnType<typeof Guards[A]["as"]>; };

	export const Requests = {};

	export type Requests = { [A in keyof typeof Requests]: ReturnType<typeof Requests[A]["as"]>; };

	export const Responses = {};

	export type Responses = { [A in keyof typeof Responses]: ReturnType<typeof Responses[A]["as"]>; };
};
