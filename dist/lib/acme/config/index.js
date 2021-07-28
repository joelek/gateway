"use strict";
// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autoguard = exports.Config = void 0;
const autoguard = require("@joelek/ts-autoguard/dist/lib-shared");
exports.Config = autoguard.guards.Object.of({
    "agree_to_tos": autoguard.guards.Boolean,
    "contact": autoguard.guards.Array.of(autoguard.guards.String),
    "directories": autoguard.guards.Object.of({
        "staging": autoguard.guards.String,
        "production": autoguard.guards.String
    }),
    "domains": autoguard.guards.Array.of(autoguard.guards.Object.of({
        "hostname": autoguard.guards.String,
        "wildcard": autoguard.guards.Boolean
    }))
});
var Autoguard;
(function (Autoguard) {
    Autoguard.Guards = {
        "Config": autoguard.guards.Reference.of(() => exports.Config)
    };
    Autoguard.Requests = {};
    Autoguard.Responses = {};
})(Autoguard = exports.Autoguard || (exports.Autoguard = {}));
;
