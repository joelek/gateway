"use strict";
// This file was auto-generated by @joelek/autoguard. Edit at own risk.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autoguard = exports.ECPrivateKey = exports.ASN1Sequence = exports.ASN1OctetString = exports.ASN1Integer = exports.ASN1BitString = void 0;
const autoguard = require("@joelek/autoguard/dist/lib-shared");
const asn1_1 = require("../../asn1");
const pkcs8_1 = require("../../pkcs8");
const asn1_2 = require("../../asn1");
const asn1_3 = require("../../asn1");
const asn1_4 = require("../../asn1");
exports.ASN1BitString = autoguard.guards.Reference.of(() => asn1_1.BitString);
exports.ASN1Integer = autoguard.guards.Reference.of(() => asn1_2.Integer);
exports.ASN1OctetString = autoguard.guards.Reference.of(() => asn1_3.OctetString);
exports.ASN1Sequence = autoguard.guards.Reference.of(() => asn1_4.Sequence);
exports.ECPrivateKey = autoguard.guards.Intersection.of(autoguard.guards.Reference.of(() => exports.ASN1Sequence), autoguard.guards.Object.of({
    "data": autoguard.guards.Tuple.of(autoguard.guards.Reference.of(() => exports.ASN1Integer), autoguard.guards.Reference.of(() => exports.ASN1OctetString), autoguard.guards.Object.of({
        "kind": autoguard.guards.StringLiteral.of("CONTEXT"),
        "form": autoguard.guards.StringLiteral.of("CONSTRUCTED"),
        "type": autoguard.guards.StringLiteral.of("END_OF_CONTENT"),
        "data": autoguard.guards.Tuple.of(autoguard.guards.Reference.of(() => pkcs8_1.ECCurve))
    }, {}), autoguard.guards.Object.of({
        "kind": autoguard.guards.StringLiteral.of("CONTEXT"),
        "form": autoguard.guards.StringLiteral.of("CONSTRUCTED"),
        "type": autoguard.guards.StringLiteral.of("BOOLEAN"),
        "data": autoguard.guards.Tuple.of(autoguard.guards.Reference.of(() => exports.ASN1BitString))
    }, {}))
}, {}));
var Autoguard;
(function (Autoguard) {
    Autoguard.Guards = {
        "ASN1BitString": autoguard.guards.Reference.of(() => exports.ASN1BitString),
        "ASN1Integer": autoguard.guards.Reference.of(() => exports.ASN1Integer),
        "ASN1OctetString": autoguard.guards.Reference.of(() => exports.ASN1OctetString),
        "ASN1Sequence": autoguard.guards.Reference.of(() => exports.ASN1Sequence),
        "ECPrivateKey": autoguard.guards.Reference.of(() => exports.ECPrivateKey)
    };
    Autoguard.Requests = {};
    Autoguard.Responses = {};
})(Autoguard = exports.Autoguard || (exports.Autoguard = {}));
;
