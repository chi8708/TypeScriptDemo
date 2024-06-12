"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectWeatherForecastApi = exports.ObjectValuesApi = exports.ObjectPubUserApi = exports.ObjectPubRoleApi = exports.ObjectPubFunctionApi = exports.ObjectPubDeptApi = exports.ObjectCaptchaApi = exports.ObjectAuthroizeApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectAuthroizeApi = /** @class */ (function () {
    function ObjectAuthroizeApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAuthroizeApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * 获取菜单
     * @param param the request object
     */
    ObjectAuthroizeApi.prototype.apiAuthroizeGetUserAccessPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiAuthroizeGetUserAccessPost(options).toPromise();
    };
    /**
     * 获取菜单
     * @param param the request object
     */
    ObjectAuthroizeApi.prototype.apiAuthroizeGetUserMenuPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiAuthroizeGetUserMenuPost(options).toPromise();
    };
    /**
     * 是否开启验证码
     * @param param the request object
     */
    ObjectAuthroizeApi.prototype.apiAuthroizeIsCaptchaGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiAuthroizeIsCaptchaGet(options).toPromise();
    };
    /**
     * 登录获取token
     * @param param the request object
     */
    ObjectAuthroizeApi.prototype.apiAuthroizePost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiAuthroizePost(param.loginViewModel, options).toPromise();
    };
    return ObjectAuthroizeApi;
}());
exports.ObjectAuthroizeApi = ObjectAuthroizeApi;
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectCaptchaApi = /** @class */ (function () {
    function ObjectCaptchaApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableCaptchaApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * 验证
     * @param param the request object
     */
    ObjectCaptchaApi.prototype.apiAdminCaptchaCheckPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiAdminCaptchaCheckPost(param.captchaId, param.slideTrack, options).toPromise();
    };
    /**
     * 生成
     * @param param the request object
     */
    ObjectCaptchaApi.prototype.apiAdminCaptchaGeneratePost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiAdminCaptchaGeneratePost(param.captchaId, options).toPromise();
    };
    return ObjectCaptchaApi;
}());
exports.ObjectCaptchaApi = ObjectCaptchaApi;
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectPubDeptApi = /** @class */ (function () {
    function ObjectPubDeptApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservablePubDeptApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * 添加
     * @param param the request object
     */
    ObjectPubDeptApi.prototype.apiPubDeptAddPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubDeptAddPost(param.pubDepartment, options).toPromise();
    };
    /**
     * 删除
     * @param param the request object
     */
    ObjectPubDeptApi.prototype.apiPubDeptDeleteIdPost = function (param, options) {
        return this.api.apiPubDeptDeleteIdPost(param.id, options).toPromise();
    };
    /**
     * 编辑
     * @param param the request object
     */
    ObjectPubDeptApi.prototype.apiPubDeptEditPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubDeptEditPost(param.pubDepartment, options).toPromise();
    };
    /**
     * 获取子部门列表
     * @param param the request object
     */
    ObjectPubDeptApi.prototype.apiPubDeptGetChildListCodePost = function (param, options) {
        return this.api.apiPubDeptGetChildListCodePost(param.code, options).toPromise();
    };
    /**
     * 获取子部门列表
     * @param param the request object
     */
    ObjectPubDeptApi.prototype.apiPubDeptGetChildListPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubDeptGetChildListPost(param.code, options).toPromise();
    };
    /**
     * @param param the request object
     */
    ObjectPubDeptApi.prototype.apiPubDeptGetListPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubDeptGetListPost(options).toPromise();
    };
    return ObjectPubDeptApi;
}());
exports.ObjectPubDeptApi = ObjectPubDeptApi;
var ObservableAPI_4 = require("./ObservableAPI");
var ObjectPubFunctionApi = /** @class */ (function () {
    function ObjectPubFunctionApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservablePubFunctionApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * 添加
     * @param param the request object
     */
    ObjectPubFunctionApi.prototype.apiPubFunctionAddPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubFunctionAddPost(param.pubFunction, options).toPromise();
    };
    /**
     * 删除
     * @param param the request object
     */
    ObjectPubFunctionApi.prototype.apiPubFunctionDeleteIdPost = function (param, options) {
        return this.api.apiPubFunctionDeleteIdPost(param.id, options).toPromise();
    };
    /**
     * 编辑
     * @param param the request object
     */
    ObjectPubFunctionApi.prototype.apiPubFunctionEditPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubFunctionEditPost(param.pubFunction, options).toPromise();
    };
    /**
     * 获取子权限列表
     * @param param the request object
     */
    ObjectPubFunctionApi.prototype.apiPubFunctionGetChildListCodePost = function (param, options) {
        return this.api.apiPubFunctionGetChildListCodePost(param.code, options).toPromise();
    };
    /**
     * 获取子权限列表
     * @param param the request object
     */
    ObjectPubFunctionApi.prototype.apiPubFunctionGetChildListPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubFunctionGetChildListPost(param.code, options).toPromise();
    };
    /**
     * @param param the request object
     */
    ObjectPubFunctionApi.prototype.apiPubFunctionGetListPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubFunctionGetListPost(options).toPromise();
    };
    /**
     * 获取左侧菜单
     * @param param the request object
     */
    ObjectPubFunctionApi.prototype.apiPubFunctionGetMenuPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubFunctionGetMenuPost(options).toPromise();
    };
    return ObjectPubFunctionApi;
}());
exports.ObjectPubFunctionApi = ObjectPubFunctionApi;
var ObservableAPI_5 = require("./ObservableAPI");
var ObjectPubRoleApi = /** @class */ (function () {
    function ObjectPubRoleApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservablePubRoleApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * 添加角色
     * @param param the request object
     */
    ObjectPubRoleApi.prototype.apiPubRoleAddPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubRoleAddPost(param.pubRole, options).toPromise();
    };
    /**
     * 删除角色
     * @param param the request object
     */
    ObjectPubRoleApi.prototype.apiPubRoleDeleteIdPost = function (param, options) {
        return this.api.apiPubRoleDeleteIdPost(param.id, options).toPromise();
    };
    /**
     * 编辑角色
     * @param param the request object
     */
    ObjectPubRoleApi.prototype.apiPubRoleEditPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubRoleEditPost(param.pubRole, options).toPromise();
    };
    /**
     * 获取角色权限
     * @param param the request object
     */
    ObjectPubRoleApi.prototype.apiPubRoleGetFunctionsCodePost = function (param, options) {
        return this.api.apiPubRoleGetFunctionsCodePost(param.code, options).toPromise();
    };
    /**
     * @param param the request object
     */
    ObjectPubRoleApi.prototype.apiPubRoleGetListPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubRoleGetListPost(options).toPromise();
    };
    /**
     * 获取角色分页
     * @param param the request object
     */
    ObjectPubRoleApi.prototype.apiPubRoleGetPagePost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubRoleGetPagePost(param.pageDataReq, options).toPromise();
    };
    /**
     * 保存角色权限
     * @param param the request object
     */
    ObjectPubRoleApi.prototype.apiPubRoleSaveFunctionsCodePost = function (param, options) {
        return this.api.apiPubRoleSaveFunctionsCodePost(param.code, param.requestBody, options).toPromise();
    };
    return ObjectPubRoleApi;
}());
exports.ObjectPubRoleApi = ObjectPubRoleApi;
var ObservableAPI_6 = require("./ObservableAPI");
var ObjectPubUserApi = /** @class */ (function () {
    function ObjectPubUserApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservablePubUserApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * 添加用户
     * @param param the request object
     */
    ObjectPubUserApi.prototype.apiPubUserAddPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubUserAddPost(param.vPubuserDept, options).toPromise();
    };
    /**
     * 删除用户
     * @param param the request object
     */
    ObjectPubUserApi.prototype.apiPubUserDeleteIdPost = function (param, options) {
        return this.api.apiPubUserDeleteIdPost(param.id, options).toPromise();
    };
    /**
     * 编辑用户
     * @param param the request object
     */
    ObjectPubUserApi.prototype.apiPubUserEditPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubUserEditPost(param.vPubuserDept, options).toPromise();
    };
    /**
     * @param param the request object
     */
    ObjectPubUserApi.prototype.apiPubUserGetAccessGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubUserGetAccessGet(options).toPromise();
    };
    /**
     * 获取用户权限
     * @param param the request object
     */
    ObjectPubUserApi.prototype.apiPubUserGetFunctionsCodePost = function (param, options) {
        return this.api.apiPubUserGetFunctionsCodePost(param.code, options).toPromise();
    };
    /**
     * 获取用户实体
     * @param param the request object
     */
    ObjectPubUserApi.prototype.apiPubUserGetModelIdPost = function (param, options) {
        return this.api.apiPubUserGetModelIdPost(param.id, options).toPromise();
    };
    /**
     * 获取用户分页
     * @param param the request object
     */
    ObjectPubUserApi.prototype.apiPubUserGetPagePost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubUserGetPagePost(param.pageDataReq, options).toPromise();
    };
    /**
     * 注销登录
     * @param param the request object
     */
    ObjectPubUserApi.prototype.apiPubUserLogoutPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiPubUserLogoutPost(options).toPromise();
    };
    /**
     * 保存用户权限
     * @param param the request object
     */
    ObjectPubUserApi.prototype.apiPubUserSaveFunctionsCodePost = function (param, options) {
        return this.api.apiPubUserSaveFunctionsCodePost(param.code, param.requestBody, options).toPromise();
    };
    return ObjectPubUserApi;
}());
exports.ObjectPubUserApi = ObjectPubUserApi;
var ObservableAPI_7 = require("./ObservableAPI");
var ObjectValuesApi = /** @class */ (function () {
    function ObjectValuesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableValuesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * @param param the request object
     */
    ObjectValuesApi.prototype.apiValuesGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiValuesGet(options).toPromise();
    };
    /**
     * @param param the request object
     */
    ObjectValuesApi.prototype.apiValuesIdDelete = function (param, options) {
        return this.api.apiValuesIdDelete(param.id, options).toPromise();
    };
    /**
     * @param param the request object
     */
    ObjectValuesApi.prototype.apiValuesIdGet = function (param, options) {
        return this.api.apiValuesIdGet(param.id, options).toPromise();
    };
    /**
     * @param param the request object
     */
    ObjectValuesApi.prototype.apiValuesIdPut = function (param, options) {
        return this.api.apiValuesIdPut(param.id, param.body, options).toPromise();
    };
    /**
     * @param param the request object
     */
    ObjectValuesApi.prototype.apiValuesPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiValuesPost(param.pubUser, options).toPromise();
    };
    return ObjectValuesApi;
}());
exports.ObjectValuesApi = ObjectValuesApi;
var ObservableAPI_8 = require("./ObservableAPI");
var ObjectWeatherForecastApi = /** @class */ (function () {
    function ObjectWeatherForecastApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableWeatherForecastApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * @param param the request object
     */
    ObjectWeatherForecastApi.prototype.weatherForecastGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.weatherForecastGet(options).toPromise();
    };
    return ObjectWeatherForecastApi;
}());
exports.ObjectWeatherForecastApi = ObjectWeatherForecastApi;
