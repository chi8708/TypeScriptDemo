"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRequest = void 0;
var node_fetch_1 = __importDefault(require("node-fetch")); //报错 使用npm install node-fetch@2
function makeRequest(url, method, data) {
    var options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (data) {
        options.body = JSON.stringify(data);
    }
    return (0, node_fetch_1.default)(url, options)
        .then(function (response) {
        //console.log(response);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response;
    })
        .catch(function (error) {
        console.error("error:" + error);
    });
}
exports.makeRequest = makeRequest;
//export{makeRequest}
