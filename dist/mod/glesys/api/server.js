"use strict";
// This file was auto-generated by @joelek/autoguard. Edit at own risk.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeServer = void 0;
const autoguard = require("@joelek/autoguard/dist/lib-server");
const shared = require("./index");
const makeServer = (routes, serverOptions) => {
    let endpoints = new Array();
    endpoints.push((raw, auxillary) => {
        let method = "POST";
        let matchers = new Array();
        matchers.push(new autoguard.api.StaticRouteMatcher(decodeURIComponent("domain")));
        matchers.push(new autoguard.api.StaticRouteMatcher(decodeURIComponent("list")));
        return {
            acceptsComponents: () => autoguard.api.acceptsComponents(raw.components, matchers),
            acceptsMethod: () => autoguard.api.acceptsMethod(raw.method, method),
            validateRequest: () => __awaiter(void 0, void 0, void 0, function* () {
                let options = {};
                options = Object.assign(Object.assign({}, options), autoguard.api.decodeUndeclaredParameters(raw.parameters, Object.keys(options)));
                let headers = {};
                headers = Object.assign(Object.assign({}, headers), autoguard.api.decodeUndeclaredHeaders(raw.headers, Object.keys(headers)));
                let payload = raw.payload;
                let guard = autoguard.api.wrapMessageGuard(shared.Autoguard.Requests["listDomains"], serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.debugMode);
                let request = guard.as({ options, headers, payload }, "request");
                return {
                    handleRequest: () => __awaiter(void 0, void 0, void 0, function* () {
                        let response = yield routes["listDomains"](new autoguard.api.ClientRequest(request, true, auxillary));
                        return {
                            validateResponse: () => __awaiter(void 0, void 0, void 0, function* () {
                                var _a, _b, _c, _d;
                                let guard = autoguard.api.wrapMessageGuard(shared.Autoguard.Responses["listDomains"], serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.debugMode);
                                guard.as(response, "response");
                                let status = (_a = response.status) !== null && _a !== void 0 ? _a : 200;
                                let headers = new Array();
                                headers.push(...autoguard.api.encodeUndeclaredHeaderPairs((_b = response.headers) !== null && _b !== void 0 ? _b : {}, headers.map((header) => header[0])));
                                let payload = autoguard.api.serializePayload(response.payload);
                                let defaultHeaders = (_d = (_c = serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.defaultHeaders) === null || _c === void 0 ? void 0 : _c.slice()) !== null && _d !== void 0 ? _d : [];
                                defaultHeaders.push(["Content-Type", "application/json; charset=utf-8"]);
                                return autoguard.api.finalizeResponse({ status, headers, payload }, defaultHeaders);
                            })
                        };
                    })
                };
            })
        };
    });
    endpoints.push((raw, auxillary) => {
        let method = "POST";
        let matchers = new Array();
        matchers.push(new autoguard.api.StaticRouteMatcher(decodeURIComponent("domain")));
        matchers.push(new autoguard.api.StaticRouteMatcher(decodeURIComponent("listrecords")));
        return {
            acceptsComponents: () => autoguard.api.acceptsComponents(raw.components, matchers),
            acceptsMethod: () => autoguard.api.acceptsMethod(raw.method, method),
            validateRequest: () => __awaiter(void 0, void 0, void 0, function* () {
                let options = {};
                options = Object.assign(Object.assign({}, options), autoguard.api.decodeUndeclaredParameters(raw.parameters, Object.keys(options)));
                let headers = {};
                headers = Object.assign(Object.assign({}, headers), autoguard.api.decodeUndeclaredHeaders(raw.headers, Object.keys(headers)));
                let payload = yield autoguard.api.deserializePayload(raw.payload);
                let guard = autoguard.api.wrapMessageGuard(shared.Autoguard.Requests["listDomainRecords"], serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.debugMode);
                let request = guard.as({ options, headers, payload }, "request");
                return {
                    handleRequest: () => __awaiter(void 0, void 0, void 0, function* () {
                        let response = yield routes["listDomainRecords"](new autoguard.api.ClientRequest(request, false, auxillary));
                        return {
                            validateResponse: () => __awaiter(void 0, void 0, void 0, function* () {
                                var _a, _b, _c, _d;
                                let guard = autoguard.api.wrapMessageGuard(shared.Autoguard.Responses["listDomainRecords"], serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.debugMode);
                                guard.as(response, "response");
                                let status = (_a = response.status) !== null && _a !== void 0 ? _a : 200;
                                let headers = new Array();
                                headers.push(...autoguard.api.encodeUndeclaredHeaderPairs((_b = response.headers) !== null && _b !== void 0 ? _b : {}, headers.map((header) => header[0])));
                                let payload = autoguard.api.serializePayload(response.payload);
                                let defaultHeaders = (_d = (_c = serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.defaultHeaders) === null || _c === void 0 ? void 0 : _c.slice()) !== null && _d !== void 0 ? _d : [];
                                defaultHeaders.push(["Content-Type", "application/json; charset=utf-8"]);
                                return autoguard.api.finalizeResponse({ status, headers, payload }, defaultHeaders);
                            })
                        };
                    })
                };
            })
        };
    });
    endpoints.push((raw, auxillary) => {
        let method = "POST";
        let matchers = new Array();
        matchers.push(new autoguard.api.StaticRouteMatcher(decodeURIComponent("domain")));
        matchers.push(new autoguard.api.StaticRouteMatcher(decodeURIComponent("addrecord")));
        return {
            acceptsComponents: () => autoguard.api.acceptsComponents(raw.components, matchers),
            acceptsMethod: () => autoguard.api.acceptsMethod(raw.method, method),
            validateRequest: () => __awaiter(void 0, void 0, void 0, function* () {
                let options = {};
                options = Object.assign(Object.assign({}, options), autoguard.api.decodeUndeclaredParameters(raw.parameters, Object.keys(options)));
                let headers = {};
                headers = Object.assign(Object.assign({}, headers), autoguard.api.decodeUndeclaredHeaders(raw.headers, Object.keys(headers)));
                let payload = yield autoguard.api.deserializePayload(raw.payload);
                let guard = autoguard.api.wrapMessageGuard(shared.Autoguard.Requests["createDomainRecord"], serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.debugMode);
                let request = guard.as({ options, headers, payload }, "request");
                return {
                    handleRequest: () => __awaiter(void 0, void 0, void 0, function* () {
                        let response = yield routes["createDomainRecord"](new autoguard.api.ClientRequest(request, false, auxillary));
                        return {
                            validateResponse: () => __awaiter(void 0, void 0, void 0, function* () {
                                var _a, _b, _c, _d;
                                let guard = autoguard.api.wrapMessageGuard(shared.Autoguard.Responses["createDomainRecord"], serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.debugMode);
                                guard.as(response, "response");
                                let status = (_a = response.status) !== null && _a !== void 0 ? _a : 200;
                                let headers = new Array();
                                headers.push(...autoguard.api.encodeUndeclaredHeaderPairs((_b = response.headers) !== null && _b !== void 0 ? _b : {}, headers.map((header) => header[0])));
                                let payload = autoguard.api.serializePayload(response.payload);
                                let defaultHeaders = (_d = (_c = serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.defaultHeaders) === null || _c === void 0 ? void 0 : _c.slice()) !== null && _d !== void 0 ? _d : [];
                                defaultHeaders.push(["Content-Type", "application/json; charset=utf-8"]);
                                return autoguard.api.finalizeResponse({ status, headers, payload }, defaultHeaders);
                            })
                        };
                    })
                };
            })
        };
    });
    endpoints.push((raw, auxillary) => {
        let method = "POST";
        let matchers = new Array();
        matchers.push(new autoguard.api.StaticRouteMatcher(decodeURIComponent("domain")));
        matchers.push(new autoguard.api.StaticRouteMatcher(decodeURIComponent("updaterecord")));
        return {
            acceptsComponents: () => autoguard.api.acceptsComponents(raw.components, matchers),
            acceptsMethod: () => autoguard.api.acceptsMethod(raw.method, method),
            validateRequest: () => __awaiter(void 0, void 0, void 0, function* () {
                let options = {};
                options = Object.assign(Object.assign({}, options), autoguard.api.decodeUndeclaredParameters(raw.parameters, Object.keys(options)));
                let headers = {};
                headers = Object.assign(Object.assign({}, headers), autoguard.api.decodeUndeclaredHeaders(raw.headers, Object.keys(headers)));
                let payload = yield autoguard.api.deserializePayload(raw.payload);
                let guard = autoguard.api.wrapMessageGuard(shared.Autoguard.Requests["updateDomainRecord"], serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.debugMode);
                let request = guard.as({ options, headers, payload }, "request");
                return {
                    handleRequest: () => __awaiter(void 0, void 0, void 0, function* () {
                        let response = yield routes["updateDomainRecord"](new autoguard.api.ClientRequest(request, false, auxillary));
                        return {
                            validateResponse: () => __awaiter(void 0, void 0, void 0, function* () {
                                var _a, _b, _c, _d;
                                let guard = autoguard.api.wrapMessageGuard(shared.Autoguard.Responses["updateDomainRecord"], serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.debugMode);
                                guard.as(response, "response");
                                let status = (_a = response.status) !== null && _a !== void 0 ? _a : 200;
                                let headers = new Array();
                                headers.push(...autoguard.api.encodeUndeclaredHeaderPairs((_b = response.headers) !== null && _b !== void 0 ? _b : {}, headers.map((header) => header[0])));
                                let payload = autoguard.api.serializePayload(response.payload);
                                let defaultHeaders = (_d = (_c = serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.defaultHeaders) === null || _c === void 0 ? void 0 : _c.slice()) !== null && _d !== void 0 ? _d : [];
                                defaultHeaders.push(["Content-Type", "application/json; charset=utf-8"]);
                                return autoguard.api.finalizeResponse({ status, headers, payload }, defaultHeaders);
                            })
                        };
                    })
                };
            })
        };
    });
    endpoints.push((raw, auxillary) => {
        let method = "POST";
        let matchers = new Array();
        matchers.push(new autoguard.api.StaticRouteMatcher(decodeURIComponent("domain")));
        matchers.push(new autoguard.api.StaticRouteMatcher(decodeURIComponent("deleterecord")));
        return {
            acceptsComponents: () => autoguard.api.acceptsComponents(raw.components, matchers),
            acceptsMethod: () => autoguard.api.acceptsMethod(raw.method, method),
            validateRequest: () => __awaiter(void 0, void 0, void 0, function* () {
                let options = {};
                options = Object.assign(Object.assign({}, options), autoguard.api.decodeUndeclaredParameters(raw.parameters, Object.keys(options)));
                let headers = {};
                headers = Object.assign(Object.assign({}, headers), autoguard.api.decodeUndeclaredHeaders(raw.headers, Object.keys(headers)));
                let payload = yield autoguard.api.deserializePayload(raw.payload);
                let guard = autoguard.api.wrapMessageGuard(shared.Autoguard.Requests["deleteDomainRecord"], serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.debugMode);
                let request = guard.as({ options, headers, payload }, "request");
                return {
                    handleRequest: () => __awaiter(void 0, void 0, void 0, function* () {
                        let response = yield routes["deleteDomainRecord"](new autoguard.api.ClientRequest(request, false, auxillary));
                        return {
                            validateResponse: () => __awaiter(void 0, void 0, void 0, function* () {
                                var _a, _b, _c, _d;
                                let guard = autoguard.api.wrapMessageGuard(shared.Autoguard.Responses["deleteDomainRecord"], serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.debugMode);
                                guard.as(response, "response");
                                let status = (_a = response.status) !== null && _a !== void 0 ? _a : 200;
                                let headers = new Array();
                                headers.push(...autoguard.api.encodeUndeclaredHeaderPairs((_b = response.headers) !== null && _b !== void 0 ? _b : {}, headers.map((header) => header[0])));
                                let payload = autoguard.api.serializePayload(response.payload);
                                let defaultHeaders = (_d = (_c = serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.defaultHeaders) === null || _c === void 0 ? void 0 : _c.slice()) !== null && _d !== void 0 ? _d : [];
                                defaultHeaders.push(["Content-Type", "application/json; charset=utf-8"]);
                                return autoguard.api.finalizeResponse({ status, headers, payload }, defaultHeaders);
                            })
                        };
                    })
                };
            })
        };
    });
    return (request, response) => autoguard.api.route(endpoints, request, response, serverOptions);
};
exports.makeServer = makeServer;
