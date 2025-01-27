"use strict";
// This file was auto-generated by @joelek/autoguard. Edit at own risk.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autoguard = exports.Options = exports.Certificate = exports.Provider = exports.ProviderGlesys = exports.ProviderDynu = void 0;
const autoguard = require("@joelek/autoguard/dist/lib-shared");
exports.ProviderDynu = autoguard.guards.Object.of({
    "type": autoguard.guards.StringLiteral.of("dynu"),
    "key": autoguard.guards.String
}, {});
exports.ProviderGlesys = autoguard.guards.Object.of({
    "type": autoguard.guards.StringLiteral.of("glesys"),
    "account": autoguard.guards.String,
    "key": autoguard.guards.String
}, {});
exports.Provider = autoguard.guards.Union.of(autoguard.guards.Reference.of(() => exports.ProviderDynu), autoguard.guards.Reference.of(() => exports.ProviderGlesys));
exports.Certificate = autoguard.guards.Object.of({
    "hostnames": autoguard.guards.Array.of(autoguard.guards.String)
}, {
    "root": autoguard.guards.String,
    "account_key": autoguard.guards.String,
    "account_pass": autoguard.guards.String,
    "certificate_key": autoguard.guards.String,
    "certificate_pass": autoguard.guards.String,
    "certificate": autoguard.guards.String
});
exports.Options = autoguard.guards.Object.of({
    "providers": autoguard.guards.Array.of(autoguard.guards.Reference.of(() => exports.Provider)),
    "certificates": autoguard.guards.Array.of(autoguard.guards.Reference.of(() => exports.Certificate))
}, {
    "acme": autoguard.guards.String,
    "monitor": autoguard.guards.Boolean
});
var Autoguard;
(function (Autoguard) {
    Autoguard.Guards = {
        "ProviderDynu": autoguard.guards.Reference.of(() => exports.ProviderDynu),
        "ProviderGlesys": autoguard.guards.Reference.of(() => exports.ProviderGlesys),
        "Provider": autoguard.guards.Reference.of(() => exports.Provider),
        "Certificate": autoguard.guards.Reference.of(() => exports.Certificate),
        "Options": autoguard.guards.Reference.of(() => exports.Options)
    };
    Autoguard.Requests = {};
    Autoguard.Responses = {};
})(Autoguard = exports.Autoguard || (exports.Autoguard = {}));
;
