// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.

import * as autoguard from "@joelek/ts-autoguard/dist/lib-shared";

export enum Kind {
	"UNIVERSAL" = 0,
	"APPLICATION" = 1,
	"CONTEXT" = 2,
	"PRIVATE" = 3
};

export namespace Kind {
	export const Key: autoguard.serialization.MessageGuard<Key> = autoguard.guards.Union.of(
		autoguard.guards.StringLiteral.of("UNIVERSAL"),
		autoguard.guards.StringLiteral.of("APPLICATION"),
		autoguard.guards.StringLiteral.of("CONTEXT"),
		autoguard.guards.StringLiteral.of("PRIVATE")
	);

	export type Key = autoguard.guards.Union<[
		autoguard.guards.StringLiteral<"UNIVERSAL">,
		autoguard.guards.StringLiteral<"APPLICATION">,
		autoguard.guards.StringLiteral<"CONTEXT">,
		autoguard.guards.StringLiteral<"PRIVATE">
	]>;

	export const Value: autoguard.serialization.MessageGuard<Value> = autoguard.guards.Union.of(
		autoguard.guards.NumberLiteral.of(0),
		autoguard.guards.NumberLiteral.of(1),
		autoguard.guards.NumberLiteral.of(2),
		autoguard.guards.NumberLiteral.of(3)
	);

	export type Value = autoguard.guards.Union<[
		autoguard.guards.NumberLiteral<0>,
		autoguard.guards.NumberLiteral<1>,
		autoguard.guards.NumberLiteral<2>,
		autoguard.guards.NumberLiteral<3>
	]>;

	export function keyFromValue(value: number): Key {
		return Key.as(Kind[Value.as(value)]);
	};

	export function valueFromKey(key: string): Value {
		return Value.as(Kind[Key.as(key)]);
	};
};

export enum Form {
	"PRIMITIVE" = 0,
	"CONSTRUCTED" = 1
};

export namespace Form {
	export const Key: autoguard.serialization.MessageGuard<Key> = autoguard.guards.Union.of(
		autoguard.guards.StringLiteral.of("PRIMITIVE"),
		autoguard.guards.StringLiteral.of("CONSTRUCTED")
	);

	export type Key = autoguard.guards.Union<[
		autoguard.guards.StringLiteral<"PRIMITIVE">,
		autoguard.guards.StringLiteral<"CONSTRUCTED">
	]>;

	export const Value: autoguard.serialization.MessageGuard<Value> = autoguard.guards.Union.of(
		autoguard.guards.NumberLiteral.of(0),
		autoguard.guards.NumberLiteral.of(1)
	);

	export type Value = autoguard.guards.Union<[
		autoguard.guards.NumberLiteral<0>,
		autoguard.guards.NumberLiteral<1>
	]>;

	export function keyFromValue(value: number): Key {
		return Key.as(Form[Value.as(value)]);
	};

	export function valueFromKey(key: string): Value {
		return Value.as(Form[Key.as(key)]);
	};
};

export enum Type {
	"END_OF_CONTENT" = 0,
	"BOOLEAN" = 1,
	"INTEGER" = 2,
	"BIT_STRING" = 3,
	"OCTET_STRING" = 4,
	"NULL" = 5,
	"OBJECT_IDENTIFIER" = 6,
	"OBJECT_DESCRIPTOR" = 7,
	"EXTERNAL" = 8,
	"REAL" = 9,
	"ENUMERATED" = 10,
	"EMBEDDED_PDV" = 11,
	"UTF8_STRING" = 12,
	"RELATIVE_OID" = 13,
	"TIME" = 14,
	"0F_RESERVED" = 15,
	"SEQUENCE" = 16,
	"SET" = 17,
	"NUMERIC_STRING" = 18,
	"PRINTABLE_STRING" = 19,
	"T61_STRING" = 20,
	"VIDEOTEX_STRING" = 21,
	"IA5_STRING" = 22,
	"UTC_TIME" = 23,
	"GENERALIZED_TIME" = 24,
	"GRAPHIC_STRING" = 25,
	"VISIBLE_STRING" = 26,
	"GENERAL_STRING" = 27,
	"UNIVERSAL_STRING" = 28,
	"CHARACTER_STRING" = 29,
	"BMP_STRING" = 30,
	"DATE" = 31,
	"TIME_OF_DAY" = 32,
	"DATE_TIME" = 33,
	"DURATION" = 34,
	"OID_IRI" = 35,
	"RELATIVE_OID_IRI" = 36
};

export namespace Type {
	export const Key: autoguard.serialization.MessageGuard<Key> = autoguard.guards.Union.of(
		autoguard.guards.StringLiteral.of("END_OF_CONTENT"),
		autoguard.guards.StringLiteral.of("BOOLEAN"),
		autoguard.guards.StringLiteral.of("INTEGER"),
		autoguard.guards.StringLiteral.of("BIT_STRING"),
		autoguard.guards.StringLiteral.of("OCTET_STRING"),
		autoguard.guards.StringLiteral.of("NULL"),
		autoguard.guards.StringLiteral.of("OBJECT_IDENTIFIER"),
		autoguard.guards.StringLiteral.of("OBJECT_DESCRIPTOR"),
		autoguard.guards.StringLiteral.of("EXTERNAL"),
		autoguard.guards.StringLiteral.of("REAL"),
		autoguard.guards.StringLiteral.of("ENUMERATED"),
		autoguard.guards.StringLiteral.of("EMBEDDED_PDV"),
		autoguard.guards.StringLiteral.of("UTF8_STRING"),
		autoguard.guards.StringLiteral.of("RELATIVE_OID"),
		autoguard.guards.StringLiteral.of("TIME"),
		autoguard.guards.StringLiteral.of("0F_RESERVED"),
		autoguard.guards.StringLiteral.of("SEQUENCE"),
		autoguard.guards.StringLiteral.of("SET"),
		autoguard.guards.StringLiteral.of("NUMERIC_STRING"),
		autoguard.guards.StringLiteral.of("PRINTABLE_STRING"),
		autoguard.guards.StringLiteral.of("T61_STRING"),
		autoguard.guards.StringLiteral.of("VIDEOTEX_STRING"),
		autoguard.guards.StringLiteral.of("IA5_STRING"),
		autoguard.guards.StringLiteral.of("UTC_TIME"),
		autoguard.guards.StringLiteral.of("GENERALIZED_TIME"),
		autoguard.guards.StringLiteral.of("GRAPHIC_STRING"),
		autoguard.guards.StringLiteral.of("VISIBLE_STRING"),
		autoguard.guards.StringLiteral.of("GENERAL_STRING"),
		autoguard.guards.StringLiteral.of("UNIVERSAL_STRING"),
		autoguard.guards.StringLiteral.of("CHARACTER_STRING"),
		autoguard.guards.StringLiteral.of("BMP_STRING"),
		autoguard.guards.StringLiteral.of("DATE"),
		autoguard.guards.StringLiteral.of("TIME_OF_DAY"),
		autoguard.guards.StringLiteral.of("DATE_TIME"),
		autoguard.guards.StringLiteral.of("DURATION"),
		autoguard.guards.StringLiteral.of("OID_IRI"),
		autoguard.guards.StringLiteral.of("RELATIVE_OID_IRI")
	);

	export type Key = autoguard.guards.Union<[
		autoguard.guards.StringLiteral<"END_OF_CONTENT">,
		autoguard.guards.StringLiteral<"BOOLEAN">,
		autoguard.guards.StringLiteral<"INTEGER">,
		autoguard.guards.StringLiteral<"BIT_STRING">,
		autoguard.guards.StringLiteral<"OCTET_STRING">,
		autoguard.guards.StringLiteral<"NULL">,
		autoguard.guards.StringLiteral<"OBJECT_IDENTIFIER">,
		autoguard.guards.StringLiteral<"OBJECT_DESCRIPTOR">,
		autoguard.guards.StringLiteral<"EXTERNAL">,
		autoguard.guards.StringLiteral<"REAL">,
		autoguard.guards.StringLiteral<"ENUMERATED">,
		autoguard.guards.StringLiteral<"EMBEDDED_PDV">,
		autoguard.guards.StringLiteral<"UTF8_STRING">,
		autoguard.guards.StringLiteral<"RELATIVE_OID">,
		autoguard.guards.StringLiteral<"TIME">,
		autoguard.guards.StringLiteral<"0F_RESERVED">,
		autoguard.guards.StringLiteral<"SEQUENCE">,
		autoguard.guards.StringLiteral<"SET">,
		autoguard.guards.StringLiteral<"NUMERIC_STRING">,
		autoguard.guards.StringLiteral<"PRINTABLE_STRING">,
		autoguard.guards.StringLiteral<"T61_STRING">,
		autoguard.guards.StringLiteral<"VIDEOTEX_STRING">,
		autoguard.guards.StringLiteral<"IA5_STRING">,
		autoguard.guards.StringLiteral<"UTC_TIME">,
		autoguard.guards.StringLiteral<"GENERALIZED_TIME">,
		autoguard.guards.StringLiteral<"GRAPHIC_STRING">,
		autoguard.guards.StringLiteral<"VISIBLE_STRING">,
		autoguard.guards.StringLiteral<"GENERAL_STRING">,
		autoguard.guards.StringLiteral<"UNIVERSAL_STRING">,
		autoguard.guards.StringLiteral<"CHARACTER_STRING">,
		autoguard.guards.StringLiteral<"BMP_STRING">,
		autoguard.guards.StringLiteral<"DATE">,
		autoguard.guards.StringLiteral<"TIME_OF_DAY">,
		autoguard.guards.StringLiteral<"DATE_TIME">,
		autoguard.guards.StringLiteral<"DURATION">,
		autoguard.guards.StringLiteral<"OID_IRI">,
		autoguard.guards.StringLiteral<"RELATIVE_OID_IRI">
	]>;

	export const Value: autoguard.serialization.MessageGuard<Value> = autoguard.guards.Union.of(
		autoguard.guards.NumberLiteral.of(0),
		autoguard.guards.NumberLiteral.of(1),
		autoguard.guards.NumberLiteral.of(2),
		autoguard.guards.NumberLiteral.of(3),
		autoguard.guards.NumberLiteral.of(4),
		autoguard.guards.NumberLiteral.of(5),
		autoguard.guards.NumberLiteral.of(6),
		autoguard.guards.NumberLiteral.of(7),
		autoguard.guards.NumberLiteral.of(8),
		autoguard.guards.NumberLiteral.of(9),
		autoguard.guards.NumberLiteral.of(10),
		autoguard.guards.NumberLiteral.of(11),
		autoguard.guards.NumberLiteral.of(12),
		autoguard.guards.NumberLiteral.of(13),
		autoguard.guards.NumberLiteral.of(14),
		autoguard.guards.NumberLiteral.of(15),
		autoguard.guards.NumberLiteral.of(16),
		autoguard.guards.NumberLiteral.of(17),
		autoguard.guards.NumberLiteral.of(18),
		autoguard.guards.NumberLiteral.of(19),
		autoguard.guards.NumberLiteral.of(20),
		autoguard.guards.NumberLiteral.of(21),
		autoguard.guards.NumberLiteral.of(22),
		autoguard.guards.NumberLiteral.of(23),
		autoguard.guards.NumberLiteral.of(24),
		autoguard.guards.NumberLiteral.of(25),
		autoguard.guards.NumberLiteral.of(26),
		autoguard.guards.NumberLiteral.of(27),
		autoguard.guards.NumberLiteral.of(28),
		autoguard.guards.NumberLiteral.of(29),
		autoguard.guards.NumberLiteral.of(30),
		autoguard.guards.NumberLiteral.of(31),
		autoguard.guards.NumberLiteral.of(32),
		autoguard.guards.NumberLiteral.of(33),
		autoguard.guards.NumberLiteral.of(34),
		autoguard.guards.NumberLiteral.of(35),
		autoguard.guards.NumberLiteral.of(36)
	);

	export type Value = autoguard.guards.Union<[
		autoguard.guards.NumberLiteral<0>,
		autoguard.guards.NumberLiteral<1>,
		autoguard.guards.NumberLiteral<2>,
		autoguard.guards.NumberLiteral<3>,
		autoguard.guards.NumberLiteral<4>,
		autoguard.guards.NumberLiteral<5>,
		autoguard.guards.NumberLiteral<6>,
		autoguard.guards.NumberLiteral<7>,
		autoguard.guards.NumberLiteral<8>,
		autoguard.guards.NumberLiteral<9>,
		autoguard.guards.NumberLiteral<10>,
		autoguard.guards.NumberLiteral<11>,
		autoguard.guards.NumberLiteral<12>,
		autoguard.guards.NumberLiteral<13>,
		autoguard.guards.NumberLiteral<14>,
		autoguard.guards.NumberLiteral<15>,
		autoguard.guards.NumberLiteral<16>,
		autoguard.guards.NumberLiteral<17>,
		autoguard.guards.NumberLiteral<18>,
		autoguard.guards.NumberLiteral<19>,
		autoguard.guards.NumberLiteral<20>,
		autoguard.guards.NumberLiteral<21>,
		autoguard.guards.NumberLiteral<22>,
		autoguard.guards.NumberLiteral<23>,
		autoguard.guards.NumberLiteral<24>,
		autoguard.guards.NumberLiteral<25>,
		autoguard.guards.NumberLiteral<26>,
		autoguard.guards.NumberLiteral<27>,
		autoguard.guards.NumberLiteral<28>,
		autoguard.guards.NumberLiteral<29>,
		autoguard.guards.NumberLiteral<30>,
		autoguard.guards.NumberLiteral<31>,
		autoguard.guards.NumberLiteral<32>,
		autoguard.guards.NumberLiteral<33>,
		autoguard.guards.NumberLiteral<34>,
		autoguard.guards.NumberLiteral<35>,
		autoguard.guards.NumberLiteral<36>
	]>;

	export function keyFromValue(value: number): Key {
		return Key.as(Type[Value.as(value)]);
	};

	export function valueFromKey(key: string): Value {
		return Value.as(Type[Key.as(key)]);
	};
};

export const Node: autoguard.serialization.MessageGuard<Node> = autoguard.guards.Object.of({
	"kind": autoguard.guards.Reference.of(() => Kind.Key),
	"form": autoguard.guards.Reference.of(() => Form.Key),
	"type": autoguard.guards.Reference.of(() => Type.Key),
	"data": autoguard.guards.Union.of(
		autoguard.guards.String,
		autoguard.guards.Array.of(autoguard.guards.Reference.of(() => Node))
	)
}, {});

export type Node = autoguard.guards.Object<{
	"kind": autoguard.guards.Reference<Kind.Key>,
	"form": autoguard.guards.Reference<Form.Key>,
	"type": autoguard.guards.Reference<Type.Key>,
	"data": autoguard.guards.Union<[
		autoguard.guards.String,
		autoguard.guards.Array<autoguard.guards.Reference<Node>>
	]>
}, {}>;

export const BitString: autoguard.serialization.MessageGuard<BitString> = autoguard.guards.Object.of({
	"kind": autoguard.guards.StringLiteral.of("UNIVERSAL"),
	"form": autoguard.guards.StringLiteral.of("PRIMITIVE"),
	"type": autoguard.guards.StringLiteral.of("BIT_STRING"),
	"data": autoguard.guards.String
}, {});

export type BitString = autoguard.guards.Object<{
	"kind": autoguard.guards.StringLiteral<"UNIVERSAL">,
	"form": autoguard.guards.StringLiteral<"PRIMITIVE">,
	"type": autoguard.guards.StringLiteral<"BIT_STRING">,
	"data": autoguard.guards.String
}, {}>;

export const Integer: autoguard.serialization.MessageGuard<Integer> = autoguard.guards.Object.of({
	"kind": autoguard.guards.StringLiteral.of("UNIVERSAL"),
	"form": autoguard.guards.StringLiteral.of("PRIMITIVE"),
	"type": autoguard.guards.StringLiteral.of("INTEGER"),
	"data": autoguard.guards.String
}, {});

export type Integer = autoguard.guards.Object<{
	"kind": autoguard.guards.StringLiteral<"UNIVERSAL">,
	"form": autoguard.guards.StringLiteral<"PRIMITIVE">,
	"type": autoguard.guards.StringLiteral<"INTEGER">,
	"data": autoguard.guards.String
}, {}>;

export const Null: autoguard.serialization.MessageGuard<Null> = autoguard.guards.Object.of({
	"kind": autoguard.guards.StringLiteral.of("UNIVERSAL"),
	"form": autoguard.guards.StringLiteral.of("PRIMITIVE"),
	"type": autoguard.guards.StringLiteral.of("NULL"),
	"data": autoguard.guards.String
}, {});

export type Null = autoguard.guards.Object<{
	"kind": autoguard.guards.StringLiteral<"UNIVERSAL">,
	"form": autoguard.guards.StringLiteral<"PRIMITIVE">,
	"type": autoguard.guards.StringLiteral<"NULL">,
	"data": autoguard.guards.String
}, {}>;

export const ObjectIdentifier: autoguard.serialization.MessageGuard<ObjectIdentifier> = autoguard.guards.Object.of({
	"kind": autoguard.guards.StringLiteral.of("UNIVERSAL"),
	"form": autoguard.guards.StringLiteral.of("PRIMITIVE"),
	"type": autoguard.guards.StringLiteral.of("OBJECT_IDENTIFIER"),
	"data": autoguard.guards.String
}, {});

export type ObjectIdentifier = autoguard.guards.Object<{
	"kind": autoguard.guards.StringLiteral<"UNIVERSAL">,
	"form": autoguard.guards.StringLiteral<"PRIMITIVE">,
	"type": autoguard.guards.StringLiteral<"OBJECT_IDENTIFIER">,
	"data": autoguard.guards.String
}, {}>;

export const OctetString: autoguard.serialization.MessageGuard<OctetString> = autoguard.guards.Object.of({
	"kind": autoguard.guards.StringLiteral.of("UNIVERSAL"),
	"form": autoguard.guards.StringLiteral.of("PRIMITIVE"),
	"type": autoguard.guards.StringLiteral.of("OCTET_STRING"),
	"data": autoguard.guards.String
}, {});

export type OctetString = autoguard.guards.Object<{
	"kind": autoguard.guards.StringLiteral<"UNIVERSAL">,
	"form": autoguard.guards.StringLiteral<"PRIMITIVE">,
	"type": autoguard.guards.StringLiteral<"OCTET_STRING">,
	"data": autoguard.guards.String
}, {}>;

export const Sequence: autoguard.serialization.MessageGuard<Sequence> = autoguard.guards.Object.of({
	"kind": autoguard.guards.StringLiteral.of("UNIVERSAL"),
	"form": autoguard.guards.StringLiteral.of("CONSTRUCTED"),
	"type": autoguard.guards.StringLiteral.of("SEQUENCE"),
	"data": autoguard.guards.Array.of(autoguard.guards.Reference.of(() => Node))
}, {});

export type Sequence = autoguard.guards.Object<{
	"kind": autoguard.guards.StringLiteral<"UNIVERSAL">,
	"form": autoguard.guards.StringLiteral<"CONSTRUCTED">,
	"type": autoguard.guards.StringLiteral<"SEQUENCE">,
	"data": autoguard.guards.Array<autoguard.guards.Reference<Node>>
}, {}>;

export const Set: autoguard.serialization.MessageGuard<Set> = autoguard.guards.Object.of({
	"kind": autoguard.guards.StringLiteral.of("UNIVERSAL"),
	"form": autoguard.guards.StringLiteral.of("CONSTRUCTED"),
	"type": autoguard.guards.StringLiteral.of("SET"),
	"data": autoguard.guards.Array.of(autoguard.guards.Reference.of(() => Node))
}, {});

export type Set = autoguard.guards.Object<{
	"kind": autoguard.guards.StringLiteral<"UNIVERSAL">,
	"form": autoguard.guards.StringLiteral<"CONSTRUCTED">,
	"type": autoguard.guards.StringLiteral<"SET">,
	"data": autoguard.guards.Array<autoguard.guards.Reference<Node>>
}, {}>;

export const UTF8String: autoguard.serialization.MessageGuard<UTF8String> = autoguard.guards.Object.of({
	"kind": autoguard.guards.StringLiteral.of("UNIVERSAL"),
	"form": autoguard.guards.StringLiteral.of("PRIMITIVE"),
	"type": autoguard.guards.StringLiteral.of("UTF8_STRING"),
	"data": autoguard.guards.String
}, {});

export type UTF8String = autoguard.guards.Object<{
	"kind": autoguard.guards.StringLiteral<"UNIVERSAL">,
	"form": autoguard.guards.StringLiteral<"PRIMITIVE">,
	"type": autoguard.guards.StringLiteral<"UTF8_STRING">,
	"data": autoguard.guards.String
}, {}>;

export const Date: autoguard.serialization.MessageGuard<Date> = autoguard.guards.Object.of({
	"kind": autoguard.guards.StringLiteral.of("UNIVERSAL"),
	"form": autoguard.guards.StringLiteral.of("PRIMITIVE"),
	"type": autoguard.guards.StringLiteral.of("DATE"),
	"data": autoguard.guards.String
}, {});

export type Date = autoguard.guards.Object<{
	"kind": autoguard.guards.StringLiteral<"UNIVERSAL">,
	"form": autoguard.guards.StringLiteral<"PRIMITIVE">,
	"type": autoguard.guards.StringLiteral<"DATE">,
	"data": autoguard.guards.String
}, {}>;

export const UTCTime: autoguard.serialization.MessageGuard<UTCTime> = autoguard.guards.Object.of({
	"kind": autoguard.guards.StringLiteral.of("UNIVERSAL"),
	"form": autoguard.guards.StringLiteral.of("PRIMITIVE"),
	"type": autoguard.guards.StringLiteral.of("UTC_TIME"),
	"data": autoguard.guards.String
}, {});

export type UTCTime = autoguard.guards.Object<{
	"kind": autoguard.guards.StringLiteral<"UNIVERSAL">,
	"form": autoguard.guards.StringLiteral<"PRIMITIVE">,
	"type": autoguard.guards.StringLiteral<"UTC_TIME">,
	"data": autoguard.guards.String
}, {}>;

export namespace Autoguard {
	export const Guards = {
		"Node": autoguard.guards.Reference.of(() => Node),
		"BitString": autoguard.guards.Reference.of(() => BitString),
		"Integer": autoguard.guards.Reference.of(() => Integer),
		"Null": autoguard.guards.Reference.of(() => Null),
		"ObjectIdentifier": autoguard.guards.Reference.of(() => ObjectIdentifier),
		"OctetString": autoguard.guards.Reference.of(() => OctetString),
		"Sequence": autoguard.guards.Reference.of(() => Sequence),
		"Set": autoguard.guards.Reference.of(() => Set),
		"UTF8String": autoguard.guards.Reference.of(() => UTF8String),
		"Date": autoguard.guards.Reference.of(() => Date),
		"UTCTime": autoguard.guards.Reference.of(() => UTCTime)
	};

	export type Guards = { [A in keyof typeof Guards]: ReturnType<typeof Guards[A]["as"]>; };

	export const Requests = {};

	export type Requests = { [A in keyof typeof Requests]: ReturnType<typeof Requests[A]["as"]>; };

	export const Responses = {};

	export type Responses = { [A in keyof typeof Responses]: ReturnType<typeof Responses[A]["as"]>; };
};
