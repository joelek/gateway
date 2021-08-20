import * as autoguard from "@joelek/ts-autoguard/dist/lib-shared";
export declare const Config: autoguard.serialization.MessageGuard<{
    contact: string[];
    agree_to_tos: boolean;
    directories: {
        staging: string;
        production: string;
    };
    domains: {
        hostname: string;
        wildcard: boolean;
    }[];
}>;
export declare type Config = ReturnType<typeof Config["as"]>;
export declare namespace Autoguard {
    const Guards: {
        Config: autoguard.serialization.MessageGuard<{
            contact: string[];
            agree_to_tos: boolean;
            directories: {
                staging: string;
                production: string;
            };
            domains: {
                hostname: string;
                wildcard: boolean;
            }[];
        }>;
    };
    type Guards = {
        [A in keyof typeof Guards]: ReturnType<typeof Guards[A]["as"]>;
    };
    const Requests: {};
    type Requests = {
        [A in keyof typeof Requests]: ReturnType<typeof Requests[A]["as"]>;
    };
    const Responses: {};
    type Responses = {
        [A in keyof typeof Responses]: ReturnType<typeof Responses[A]["as"]>;
    };
}