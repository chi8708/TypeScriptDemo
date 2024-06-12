"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseWeatherForecastApi = exports.PromiseValuesApi = exports.PromisePubUserApi = exports.PromisePubRoleApi = exports.PromisePubFunctionApi = exports.PromisePubDeptApi = exports.PromiseCaptchaApi = exports.PromiseAuthroizeApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseAuthroizeApi = /** @class */ (function () {
    function PromiseAuthroizeApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAuthroizeApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * 获取菜单
     */
    PromiseAuthroizeApi.prototype.apiAuthroizeGetUserAccessPost = function (_options) {
        var result = this.api.apiAuthroizeGetUserAccessPost(_options);
        return result.toPromise();
    };
    /**
     * 获取菜单
     */
    PromiseAuthroizeApi.prototype.apiAuthroizeGetUserMenuPost = function (_options) {
        var result = this.api.apiAuthroizeGetUserMenuPost(_options);
        return result.toPromise();
    };
    /**
     * 是否开启验证码
     */
    PromiseAuthroizeApi.prototype.apiAuthroizeIsCaptchaGet = function (_options) {
        var result = this.api.apiAuthroizeIsCaptchaGet(_options);
        return result.toPromise();
    };
    /**
     * 登录获取token
     * @param loginViewModel 登录实体信息
     */
    PromiseAuthroizeApi.prototype.apiAuthroizePost = function (loginViewModel, _options) {
        var result = this.api.apiAuthroizePost(loginViewModel, _options);
        return result.toPromise();
    };
    return PromiseAuthroizeApi;
}());
exports.PromiseAuthroizeApi = PromiseAuthroizeApi;
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseCaptchaApi = /** @class */ (function () {
    function PromiseCaptchaApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableCaptchaApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * 验证
     * @param captchaId 验证码id
     * @param slideTrack 滑动轨迹
     */
    PromiseCaptchaApi.prototype.apiAdminCaptchaCheckPost = function (captchaId, slideTrack, _options) {
        var result = this.api.apiAdminCaptchaCheckPost(captchaId, slideTrack, _options);
        return result.toPromise();
    };
    /**
     * 生成
     * @param captchaId 验证码id
     */
    PromiseCaptchaApi.prototype.apiAdminCaptchaGeneratePost = function (captchaId, _options) {
        var result = this.api.apiAdminCaptchaGeneratePost(captchaId, _options);
        return result.toPromise();
    };
    return PromiseCaptchaApi;
}());
exports.PromiseCaptchaApi = PromiseCaptchaApi;
var ObservableAPI_3 = require("./ObservableAPI");
var PromisePubDeptApi = /** @class */ (function () {
    function PromisePubDeptApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservablePubDeptApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * 添加
     * @param pubDepartment
     */
    PromisePubDeptApi.prototype.apiPubDeptAddPost = function (pubDepartment, _options) {
        var result = this.api.apiPubDeptAddPost(pubDepartment, _options);
        return result.toPromise();
    };
    /**
     * 删除
     * @param id
     */
    PromisePubDeptApi.prototype.apiPubDeptDeleteIdPost = function (id, _options) {
        var result = this.api.apiPubDeptDeleteIdPost(id, _options);
        return result.toPromise();
    };
    /**
     * 编辑
     * @param pubDepartment
     */
    PromisePubDeptApi.prototype.apiPubDeptEditPost = function (pubDepartment, _options) {
        var result = this.api.apiPubDeptEditPost(pubDepartment, _options);
        return result.toPromise();
    };
    /**
     * 获取子部门列表
     * @param code
     */
    PromisePubDeptApi.prototype.apiPubDeptGetChildListCodePost = function (code, _options) {
        var result = this.api.apiPubDeptGetChildListCodePost(code, _options);
        return result.toPromise();
    };
    /**
     * 获取子部门列表
     * @param code
     */
    PromisePubDeptApi.prototype.apiPubDeptGetChildListPost = function (code, _options) {
        var result = this.api.apiPubDeptGetChildListPost(code, _options);
        return result.toPromise();
    };
    /**
     */
    PromisePubDeptApi.prototype.apiPubDeptGetListPost = function (_options) {
        var result = this.api.apiPubDeptGetListPost(_options);
        return result.toPromise();
    };
    return PromisePubDeptApi;
}());
exports.PromisePubDeptApi = PromisePubDeptApi;
var ObservableAPI_4 = require("./ObservableAPI");
var PromisePubFunctionApi = /** @class */ (function () {
    function PromisePubFunctionApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservablePubFunctionApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * 添加
     * @param pubFunction
     */
    PromisePubFunctionApi.prototype.apiPubFunctionAddPost = function (pubFunction, _options) {
        var result = this.api.apiPubFunctionAddPost(pubFunction, _options);
        return result.toPromise();
    };
    /**
     * 删除
     * @param id
     */
    PromisePubFunctionApi.prototype.apiPubFunctionDeleteIdPost = function (id, _options) {
        var result = this.api.apiPubFunctionDeleteIdPost(id, _options);
        return result.toPromise();
    };
    /**
     * 编辑
     * @param pubFunction
     */
    PromisePubFunctionApi.prototype.apiPubFunctionEditPost = function (pubFunction, _options) {
        var result = this.api.apiPubFunctionEditPost(pubFunction, _options);
        return result.toPromise();
    };
    /**
     * 获取子权限列表
     * @param code
     */
    PromisePubFunctionApi.prototype.apiPubFunctionGetChildListCodePost = function (code, _options) {
        var result = this.api.apiPubFunctionGetChildListCodePost(code, _options);
        return result.toPromise();
    };
    /**
     * 获取子权限列表
     * @param code
     */
    PromisePubFunctionApi.prototype.apiPubFunctionGetChildListPost = function (code, _options) {
        var result = this.api.apiPubFunctionGetChildListPost(code, _options);
        return result.toPromise();
    };
    /**
     */
    PromisePubFunctionApi.prototype.apiPubFunctionGetListPost = function (_options) {
        var result = this.api.apiPubFunctionGetListPost(_options);
        return result.toPromise();
    };
    /**
     * 获取左侧菜单
     */
    PromisePubFunctionApi.prototype.apiPubFunctionGetMenuPost = function (_options) {
        var result = this.api.apiPubFunctionGetMenuPost(_options);
        return result.toPromise();
    };
    return PromisePubFunctionApi;
}());
exports.PromisePubFunctionApi = PromisePubFunctionApi;
var ObservableAPI_5 = require("./ObservableAPI");
var PromisePubRoleApi = /** @class */ (function () {
    function PromisePubRoleApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservablePubRoleApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * 添加角色
     * @param pubRole
     */
    PromisePubRoleApi.prototype.apiPubRoleAddPost = function (pubRole, _options) {
        var result = this.api.apiPubRoleAddPost(pubRole, _options);
        return result.toPromise();
    };
    /**
     * 删除角色
     * @param id
     */
    PromisePubRoleApi.prototype.apiPubRoleDeleteIdPost = function (id, _options) {
        var result = this.api.apiPubRoleDeleteIdPost(id, _options);
        return result.toPromise();
    };
    /**
     * 编辑角色
     * @param pubRole
     */
    PromisePubRoleApi.prototype.apiPubRoleEditPost = function (pubRole, _options) {
        var result = this.api.apiPubRoleEditPost(pubRole, _options);
        return result.toPromise();
    };
    /**
     * 获取角色权限
     * @param code
     */
    PromisePubRoleApi.prototype.apiPubRoleGetFunctionsCodePost = function (code, _options) {
        var result = this.api.apiPubRoleGetFunctionsCodePost(code, _options);
        return result.toPromise();
    };
    /**
     */
    PromisePubRoleApi.prototype.apiPubRoleGetListPost = function (_options) {
        var result = this.api.apiPubRoleGetListPost(_options);
        return result.toPromise();
    };
    /**
     * 获取角色分页
     * @param pageDataReq
     */
    PromisePubRoleApi.prototype.apiPubRoleGetPagePost = function (pageDataReq, _options) {
        var result = this.api.apiPubRoleGetPagePost(pageDataReq, _options);
        return result.toPromise();
    };
    /**
     * 保存角色权限
     * @param code
     * @param requestBody
     */
    PromisePubRoleApi.prototype.apiPubRoleSaveFunctionsCodePost = function (code, requestBody, _options) {
        var result = this.api.apiPubRoleSaveFunctionsCodePost(code, requestBody, _options);
        return result.toPromise();
    };
    return PromisePubRoleApi;
}());
exports.PromisePubRoleApi = PromisePubRoleApi;
var ObservableAPI_6 = require("./ObservableAPI");
var PromisePubUserApi = /** @class */ (function () {
    function PromisePubUserApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservablePubUserApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * 添加用户
     * @param vPubuserDept
     */
    PromisePubUserApi.prototype.apiPubUserAddPost = function (vPubuserDept, _options) {
        var result = this.api.apiPubUserAddPost(vPubuserDept, _options);
        return result.toPromise();
    };
    /**
     * 删除用户
     * @param id
     */
    PromisePubUserApi.prototype.apiPubUserDeleteIdPost = function (id, _options) {
        var result = this.api.apiPubUserDeleteIdPost(id, _options);
        return result.toPromise();
    };
    /**
     * 编辑用户
     * @param vPubuserDept
     */
    PromisePubUserApi.prototype.apiPubUserEditPost = function (vPubuserDept, _options) {
        var result = this.api.apiPubUserEditPost(vPubuserDept, _options);
        return result.toPromise();
    };
    /**
     */
    PromisePubUserApi.prototype.apiPubUserGetAccessGet = function (_options) {
        var result = this.api.apiPubUserGetAccessGet(_options);
        return result.toPromise();
    };
    /**
     * 获取用户权限
     * @param code
     */
    PromisePubUserApi.prototype.apiPubUserGetFunctionsCodePost = function (code, _options) {
        var result = this.api.apiPubUserGetFunctionsCodePost(code, _options);
        return result.toPromise();
    };
    /**
     * 获取用户实体
     * @param id
     */
    PromisePubUserApi.prototype.apiPubUserGetModelIdPost = function (id, _options) {
        var result = this.api.apiPubUserGetModelIdPost(id, _options);
        return result.toPromise();
    };
    /**
     * 获取用户分页
     * @param pageDataReq
     */
    PromisePubUserApi.prototype.apiPubUserGetPagePost = function (pageDataReq, _options) {
        var result = this.api.apiPubUserGetPagePost(pageDataReq, _options);
        return result.toPromise();
    };
    /**
     * 注销登录
     */
    PromisePubUserApi.prototype.apiPubUserLogoutPost = function (_options) {
        var result = this.api.apiPubUserLogoutPost(_options);
        return result.toPromise();
    };
    /**
     * 保存用户权限
     * @param code
     * @param requestBody
     */
    PromisePubUserApi.prototype.apiPubUserSaveFunctionsCodePost = function (code, requestBody, _options) {
        var result = this.api.apiPubUserSaveFunctionsCodePost(code, requestBody, _options);
        return result.toPromise();
    };
    return PromisePubUserApi;
}());
exports.PromisePubUserApi = PromisePubUserApi;
var ObservableAPI_7 = require("./ObservableAPI");
var PromiseValuesApi = /** @class */ (function () {
    function PromiseValuesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableValuesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     */
    PromiseValuesApi.prototype.apiValuesGet = function (_options) {
        var result = this.api.apiValuesGet(_options);
        return result.toPromise();
    };
    /**
     * @param id
     */
    PromiseValuesApi.prototype.apiValuesIdDelete = function (id, _options) {
        var result = this.api.apiValuesIdDelete(id, _options);
        return result.toPromise();
    };
    /**
     * @param id
     */
    PromiseValuesApi.prototype.apiValuesIdGet = function (id, _options) {
        var result = this.api.apiValuesIdGet(id, _options);
        return result.toPromise();
    };
    /**
     * @param id
     * @param body
     */
    PromiseValuesApi.prototype.apiValuesIdPut = function (id, body, _options) {
        var result = this.api.apiValuesIdPut(id, body, _options);
        return result.toPromise();
    };
    /**
     * @param pubUser
     */
    PromiseValuesApi.prototype.apiValuesPost = function (pubUser, _options) {
        var result = this.api.apiValuesPost(pubUser, _options);
        return result.toPromise();
    };
    return PromiseValuesApi;
}());
exports.PromiseValuesApi = PromiseValuesApi;
var ObservableAPI_8 = require("./ObservableAPI");
var PromiseWeatherForecastApi = /** @class */ (function () {
    function PromiseWeatherForecastApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableWeatherForecastApi(configuration, requestFactory, responseProcessor);
    }
    /**
     */
    PromiseWeatherForecastApi.prototype.weatherForecastGet = function (_options) {
        var result = this.api.weatherForecastGet(_options);
        return result.toPromise();
    };
    return PromiseWeatherForecastApi;
}());
exports.PromiseWeatherForecastApi = PromiseWeatherForecastApi;
