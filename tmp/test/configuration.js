"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfiguration = void 0;
var middleware_1 = require("./middleware");
var isomorphic_fetch_1 = require("./http/isomorphic-fetch");
var servers_1 = require("./servers");
var auth_1 = require("./auth/auth");
/**
 * Provide your `ConfigurationParameters` to this function to get a `Configuration`
 * object that can be used to configure your APIs (in the constructor or
 * for each request individually).
 *
 * If a property is not included in conf, a default is used:
 *    - baseServer: server1
 *    - httpApi: IsomorphicFetchHttpLibrary
 *    - middleware: []
 *    - promiseMiddleware: []
 *    - authMethods: {}
 *
 * @param conf partial configuration
 */
function createConfiguration(conf) {
    if (conf === void 0) { conf = {}; }
    var configuration = {
        baseServer: conf.baseServer !== undefined ? conf.baseServer : servers_1.server1,
        httpApi: conf.httpApi || new isomorphic_fetch_1.IsomorphicFetchHttpLibrary(),
        middleware: conf.middleware || [],
        authMethods: (0, auth_1.configureAuthMethods)(conf.authMethods)
    };
    if (conf.promiseMiddleware) {
        conf.promiseMiddleware.forEach(function (m) { return configuration.middleware.push(new middleware_1.PromiseMiddlewareWrapper(m)); });
    }
    return configuration;
}
exports.createConfiguration = createConfiguration;
