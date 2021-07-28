"use strict";
// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autoguard = exports.Config = void 0;
const autoguard = require("@joelek/ts-autoguard/dist/lib-shared");
exports.Config = autoguard.guards.Object.of({
    "api_key": autoguard.guards.String,
    "hostname": autoguard.guards.String
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
