"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureAuthMethods = exports.BearerAuthentication = void 0;
/**
 * Applies apiKey authentication to the request context.
 */
var BearerAuthentication = /** @class */ (function () {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    function BearerAuthentication(apiKey) {
        this.apiKey = apiKey;
    }
    BearerAuthentication.prototype.getName = function () {
        return "Bearer";
    };
    BearerAuthentication.prototype.applySecurityAuthentication = function (context) {
        context.setHeaderParam("Authorization", this.apiKey);
    };
    return BearerAuthentication;
}());
exports.BearerAuthentication = BearerAuthentication;
/**
 * Creates the authentication methods from a swagger description.
 *
 */
function configureAuthMethods(config) {
    var authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    if (config["Bearer"]) {
        authMethods["Bearer"] = new BearerAuthentication(config["Bearer"]);
    }
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
