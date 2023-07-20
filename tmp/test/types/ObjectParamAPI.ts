import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { BooleanDataRes } from '../models/BooleanDataRes';
import { BooleanIResultOutput } from '../models/BooleanIResultOutput';
import { CaptchaData } from '../models/CaptchaData';
import { CaptchaDataIResultOutput } from '../models/CaptchaDataIResultOutput';
import { LoginViewModel } from '../models/LoginViewModel';
import { Menu } from '../models/Menu';
import { MenuListDataRes } from '../models/MenuListDataRes';
import { Meta } from '../models/Meta';
import { PageDataReq } from '../models/PageDataReq';
import { PubDepartment } from '../models/PubDepartment';
import { PubDepartmentListDataRes } from '../models/PubDepartmentListDataRes';
import { PubFunction } from '../models/PubFunction';
import { PubFunctionListDataRes } from '../models/PubFunctionListDataRes';
import { PubFunctionListIResultOutput } from '../models/PubFunctionListIResultOutput';
import { PubRole } from '../models/PubRole';
import { PubRoleListDataRes } from '../models/PubRoleListDataRes';
import { PubRolePageDateRes } from '../models/PubRolePageDateRes';
import { PubUser } from '../models/PubUser';
import { ResCode } from '../models/ResCode';
import { SlideTrack } from '../models/SlideTrack';
import { StringIEnumerableDataRes } from '../models/StringIEnumerableDataRes';
import { Track } from '../models/Track';
import { VPubdeptParent } from '../models/VPubdeptParent';
import { VPubdeptParentListDataRes } from '../models/VPubdeptParentListDataRes';
import { VPubfunctionParent } from '../models/VPubfunctionParent';
import { VPubfunctionParentListDataRes } from '../models/VPubfunctionParentListDataRes';
import { VPubuserDept } from '../models/VPubuserDept';
import { VPubuserDeptDataRes } from '../models/VPubuserDeptDataRes';
import { VPubuserDeptPageDateRes } from '../models/VPubuserDeptPageDateRes';
import { ValidateResult } from '../models/ValidateResult';
import { ValidateResultIResultOutput } from '../models/ValidateResultIResultOutput';
import { ValidateResultType } from '../models/ValidateResultType';
import { WeatherForecast } from '../models/WeatherForecast';

import { ObservableAuthroizeApi } from "./ObservableAPI";
import { AuthroizeApiRequestFactory, AuthroizeApiResponseProcessor} from "../apis/AuthroizeApi";

export interface AuthroizeApiApiAuthroizeGetUserAccessPostRequest {
}

export interface AuthroizeApiApiAuthroizeGetUserMenuPostRequest {
}

export interface AuthroizeApiApiAuthroizeIsCaptchaGetRequest {
}

export interface AuthroizeApiApiAuthroizePostRequest {
    /**
     * 登录实体信息
     * @type LoginViewModel
     * @memberof AuthroizeApiapiAuthroizePost
     */
    loginViewModel?: LoginViewModel
}

export class ObjectAuthroizeApi {
    private api: ObservableAuthroizeApi

    public constructor(configuration: Configuration, requestFactory?: AuthroizeApiRequestFactory, responseProcessor?: AuthroizeApiResponseProcessor) {
        this.api = new ObservableAuthroizeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 获取菜单
     * @param param the request object
     */
    public apiAuthroizeGetUserAccessPost(param: AuthroizeApiApiAuthroizeGetUserAccessPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiAuthroizeGetUserAccessPost( options).toPromise();
    }

    /**
     * 获取菜单
     * @param param the request object
     */
    public apiAuthroizeGetUserMenuPost(param: AuthroizeApiApiAuthroizeGetUserMenuPostRequest = {}, options?: Configuration): Promise<PubFunctionListIResultOutput> {
        return this.api.apiAuthroizeGetUserMenuPost( options).toPromise();
    }

    /**
     * 是否开启验证码
     * @param param the request object
     */
    public apiAuthroizeIsCaptchaGet(param: AuthroizeApiApiAuthroizeIsCaptchaGetRequest = {}, options?: Configuration): Promise<BooleanIResultOutput> {
        return this.api.apiAuthroizeIsCaptchaGet( options).toPromise();
    }

    /**
     * 登录获取token
     * @param param the request object
     */
    public apiAuthroizePost(param: AuthroizeApiApiAuthroizePostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiAuthroizePost(param.loginViewModel,  options).toPromise();
    }

}

import { ObservableCaptchaApi } from "./ObservableAPI";
import { CaptchaApiRequestFactory, CaptchaApiResponseProcessor} from "../apis/CaptchaApi";

export interface CaptchaApiApiAdminCaptchaCheckPostRequest {
    /**
     * 验证码id
     * @type string
     * @memberof CaptchaApiapiAdminCaptchaCheckPost
     */
    captchaId?: string
    /**
     * 滑动轨迹
     * @type SlideTrack
     * @memberof CaptchaApiapiAdminCaptchaCheckPost
     */
    slideTrack?: SlideTrack
}

export interface CaptchaApiApiAdminCaptchaGeneratePostRequest {
    /**
     * 验证码id
     * @type string
     * @memberof CaptchaApiapiAdminCaptchaGeneratePost
     */
    captchaId?: string
}

export class ObjectCaptchaApi {
    private api: ObservableCaptchaApi

    public constructor(configuration: Configuration, requestFactory?: CaptchaApiRequestFactory, responseProcessor?: CaptchaApiResponseProcessor) {
        this.api = new ObservableCaptchaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 验证
     * @param param the request object
     */
    public apiAdminCaptchaCheckPost(param: CaptchaApiApiAdminCaptchaCheckPostRequest = {}, options?: Configuration): Promise<ValidateResultIResultOutput> {
        return this.api.apiAdminCaptchaCheckPost(param.captchaId, param.slideTrack,  options).toPromise();
    }

    /**
     * 生成
     * @param param the request object
     */
    public apiAdminCaptchaGeneratePost(param: CaptchaApiApiAdminCaptchaGeneratePostRequest = {}, options?: Configuration): Promise<CaptchaDataIResultOutput> {
        return this.api.apiAdminCaptchaGeneratePost(param.captchaId,  options).toPromise();
    }

}

import { ObservablePubDeptApi } from "./ObservableAPI";
import { PubDeptApiRequestFactory, PubDeptApiResponseProcessor} from "../apis/PubDeptApi";

export interface PubDeptApiApiPubDeptAddPostRequest {
    /**
     * 
     * @type PubDepartment
     * @memberof PubDeptApiapiPubDeptAddPost
     */
    pubDepartment?: PubDepartment
}

export interface PubDeptApiApiPubDeptDeleteIdPostRequest {
    /**
     * 
     * @type string
     * @memberof PubDeptApiapiPubDeptDeleteIdPost
     */
    id: string
}

export interface PubDeptApiApiPubDeptEditPostRequest {
    /**
     * 
     * @type PubDepartment
     * @memberof PubDeptApiapiPubDeptEditPost
     */
    pubDepartment?: PubDepartment
}

export interface PubDeptApiApiPubDeptGetChildListCodePostRequest {
    /**
     * 
     * @type string
     * @memberof PubDeptApiapiPubDeptGetChildListCodePost
     */
    code: string
}

export interface PubDeptApiApiPubDeptGetChildListPostRequest {
    /**
     * 
     * @type string
     * @memberof PubDeptApiapiPubDeptGetChildListPost
     */
    code?: string
}

export interface PubDeptApiApiPubDeptGetListPostRequest {
}

export class ObjectPubDeptApi {
    private api: ObservablePubDeptApi

    public constructor(configuration: Configuration, requestFactory?: PubDeptApiRequestFactory, responseProcessor?: PubDeptApiResponseProcessor) {
        this.api = new ObservablePubDeptApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 添加
     * @param param the request object
     */
    public apiPubDeptAddPost(param: PubDeptApiApiPubDeptAddPostRequest = {}, options?: Configuration): Promise<BooleanDataRes> {
        return this.api.apiPubDeptAddPost(param.pubDepartment,  options).toPromise();
    }

    /**
     * 删除
     * @param param the request object
     */
    public apiPubDeptDeleteIdPost(param: PubDeptApiApiPubDeptDeleteIdPostRequest, options?: Configuration): Promise<BooleanDataRes> {
        return this.api.apiPubDeptDeleteIdPost(param.id,  options).toPromise();
    }

    /**
     * 编辑
     * @param param the request object
     */
    public apiPubDeptEditPost(param: PubDeptApiApiPubDeptEditPostRequest = {}, options?: Configuration): Promise<BooleanDataRes> {
        return this.api.apiPubDeptEditPost(param.pubDepartment,  options).toPromise();
    }

    /**
     * 获取子部门列表
     * @param param the request object
     */
    public apiPubDeptGetChildListCodePost(param: PubDeptApiApiPubDeptGetChildListCodePostRequest, options?: Configuration): Promise<VPubdeptParentListDataRes> {
        return this.api.apiPubDeptGetChildListCodePost(param.code,  options).toPromise();
    }

    /**
     * 获取子部门列表
     * @param param the request object
     */
    public apiPubDeptGetChildListPost(param: PubDeptApiApiPubDeptGetChildListPostRequest = {}, options?: Configuration): Promise<VPubdeptParentListDataRes> {
        return this.api.apiPubDeptGetChildListPost(param.code,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPubDeptGetListPost(param: PubDeptApiApiPubDeptGetListPostRequest = {}, options?: Configuration): Promise<PubDepartmentListDataRes> {
        return this.api.apiPubDeptGetListPost( options).toPromise();
    }

}

import { ObservablePubFunctionApi } from "./ObservableAPI";
import { PubFunctionApiRequestFactory, PubFunctionApiResponseProcessor} from "../apis/PubFunctionApi";

export interface PubFunctionApiApiPubFunctionAddPostRequest {
    /**
     * 
     * @type PubFunction
     * @memberof PubFunctionApiapiPubFunctionAddPost
     */
    pubFunction?: PubFunction
}

export interface PubFunctionApiApiPubFunctionDeleteIdPostRequest {
    /**
     * 
     * @type string
     * @memberof PubFunctionApiapiPubFunctionDeleteIdPost
     */
    id: string
}

export interface PubFunctionApiApiPubFunctionEditPostRequest {
    /**
     * 
     * @type PubFunction
     * @memberof PubFunctionApiapiPubFunctionEditPost
     */
    pubFunction?: PubFunction
}

export interface PubFunctionApiApiPubFunctionGetChildListCodePostRequest {
    /**
     * 
     * @type string
     * @memberof PubFunctionApiapiPubFunctionGetChildListCodePost
     */
    code: string
}

export interface PubFunctionApiApiPubFunctionGetChildListPostRequest {
    /**
     * 
     * @type string
     * @memberof PubFunctionApiapiPubFunctionGetChildListPost
     */
    code?: string
}

export interface PubFunctionApiApiPubFunctionGetListPostRequest {
}

export interface PubFunctionApiApiPubFunctionGetMenuPostRequest {
}

export class ObjectPubFunctionApi {
    private api: ObservablePubFunctionApi

    public constructor(configuration: Configuration, requestFactory?: PubFunctionApiRequestFactory, responseProcessor?: PubFunctionApiResponseProcessor) {
        this.api = new ObservablePubFunctionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 添加
     * @param param the request object
     */
    public apiPubFunctionAddPost(param: PubFunctionApiApiPubFunctionAddPostRequest = {}, options?: Configuration): Promise<BooleanDataRes> {
        return this.api.apiPubFunctionAddPost(param.pubFunction,  options).toPromise();
    }

    /**
     * 删除
     * @param param the request object
     */
    public apiPubFunctionDeleteIdPost(param: PubFunctionApiApiPubFunctionDeleteIdPostRequest, options?: Configuration): Promise<BooleanDataRes> {
        return this.api.apiPubFunctionDeleteIdPost(param.id,  options).toPromise();
    }

    /**
     * 编辑
     * @param param the request object
     */
    public apiPubFunctionEditPost(param: PubFunctionApiApiPubFunctionEditPostRequest = {}, options?: Configuration): Promise<BooleanDataRes> {
        return this.api.apiPubFunctionEditPost(param.pubFunction,  options).toPromise();
    }

    /**
     * 获取子权限列表
     * @param param the request object
     */
    public apiPubFunctionGetChildListCodePost(param: PubFunctionApiApiPubFunctionGetChildListCodePostRequest, options?: Configuration): Promise<VPubfunctionParentListDataRes> {
        return this.api.apiPubFunctionGetChildListCodePost(param.code,  options).toPromise();
    }

    /**
     * 获取子权限列表
     * @param param the request object
     */
    public apiPubFunctionGetChildListPost(param: PubFunctionApiApiPubFunctionGetChildListPostRequest = {}, options?: Configuration): Promise<VPubfunctionParentListDataRes> {
        return this.api.apiPubFunctionGetChildListPost(param.code,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPubFunctionGetListPost(param: PubFunctionApiApiPubFunctionGetListPostRequest = {}, options?: Configuration): Promise<PubFunctionListDataRes> {
        return this.api.apiPubFunctionGetListPost( options).toPromise();
    }

    /**
     * 获取左侧菜单
     * @param param the request object
     */
    public apiPubFunctionGetMenuPost(param: PubFunctionApiApiPubFunctionGetMenuPostRequest = {}, options?: Configuration): Promise<MenuListDataRes> {
        return this.api.apiPubFunctionGetMenuPost( options).toPromise();
    }

}

import { ObservablePubRoleApi } from "./ObservableAPI";
import { PubRoleApiRequestFactory, PubRoleApiResponseProcessor} from "../apis/PubRoleApi";

export interface PubRoleApiApiPubRoleAddPostRequest {
    /**
     * 
     * @type PubRole
     * @memberof PubRoleApiapiPubRoleAddPost
     */
    pubRole?: PubRole
}

export interface PubRoleApiApiPubRoleDeleteIdPostRequest {
    /**
     * 
     * @type number
     * @memberof PubRoleApiapiPubRoleDeleteIdPost
     */
    id: number
}

export interface PubRoleApiApiPubRoleEditPostRequest {
    /**
     * 
     * @type PubRole
     * @memberof PubRoleApiapiPubRoleEditPost
     */
    pubRole?: PubRole
}

export interface PubRoleApiApiPubRoleGetFunctionsCodePostRequest {
    /**
     * 
     * @type string
     * @memberof PubRoleApiapiPubRoleGetFunctionsCodePost
     */
    code: string
}

export interface PubRoleApiApiPubRoleGetListPostRequest {
}

export interface PubRoleApiApiPubRoleGetPagePostRequest {
    /**
     * 
     * @type PageDataReq
     * @memberof PubRoleApiapiPubRoleGetPagePost
     */
    pageDataReq?: PageDataReq
}

export interface PubRoleApiApiPubRoleSaveFunctionsCodePostRequest {
    /**
     * 
     * @type string
     * @memberof PubRoleApiapiPubRoleSaveFunctionsCodePost
     */
    code: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof PubRoleApiapiPubRoleSaveFunctionsCodePost
     */
    requestBody?: Array<string>
}

export class ObjectPubRoleApi {
    private api: ObservablePubRoleApi

    public constructor(configuration: Configuration, requestFactory?: PubRoleApiRequestFactory, responseProcessor?: PubRoleApiResponseProcessor) {
        this.api = new ObservablePubRoleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 添加角色
     * @param param the request object
     */
    public apiPubRoleAddPost(param: PubRoleApiApiPubRoleAddPostRequest = {}, options?: Configuration): Promise<BooleanDataRes> {
        return this.api.apiPubRoleAddPost(param.pubRole,  options).toPromise();
    }

    /**
     * 删除角色
     * @param param the request object
     */
    public apiPubRoleDeleteIdPost(param: PubRoleApiApiPubRoleDeleteIdPostRequest, options?: Configuration): Promise<BooleanDataRes> {
        return this.api.apiPubRoleDeleteIdPost(param.id,  options).toPromise();
    }

    /**
     * 编辑角色
     * @param param the request object
     */
    public apiPubRoleEditPost(param: PubRoleApiApiPubRoleEditPostRequest = {}, options?: Configuration): Promise<BooleanDataRes> {
        return this.api.apiPubRoleEditPost(param.pubRole,  options).toPromise();
    }

    /**
     * 获取角色权限
     * @param param the request object
     */
    public apiPubRoleGetFunctionsCodePost(param: PubRoleApiApiPubRoleGetFunctionsCodePostRequest, options?: Configuration): Promise<StringIEnumerableDataRes> {
        return this.api.apiPubRoleGetFunctionsCodePost(param.code,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPubRoleGetListPost(param: PubRoleApiApiPubRoleGetListPostRequest = {}, options?: Configuration): Promise<PubRoleListDataRes> {
        return this.api.apiPubRoleGetListPost( options).toPromise();
    }

    /**
     * 获取角色分页
     * @param param the request object
     */
    public apiPubRoleGetPagePost(param: PubRoleApiApiPubRoleGetPagePostRequest = {}, options?: Configuration): Promise<PubRolePageDateRes> {
        return this.api.apiPubRoleGetPagePost(param.pageDataReq,  options).toPromise();
    }

    /**
     * 保存角色权限
     * @param param the request object
     */
    public apiPubRoleSaveFunctionsCodePost(param: PubRoleApiApiPubRoleSaveFunctionsCodePostRequest, options?: Configuration): Promise<BooleanDataRes> {
        return this.api.apiPubRoleSaveFunctionsCodePost(param.code, param.requestBody,  options).toPromise();
    }

}

import { ObservablePubUserApi } from "./ObservableAPI";
import { PubUserApiRequestFactory, PubUserApiResponseProcessor} from "../apis/PubUserApi";

export interface PubUserApiApiPubUserAddPostRequest {
    /**
     * 
     * @type VPubuserDept
     * @memberof PubUserApiapiPubUserAddPost
     */
    vPubuserDept?: VPubuserDept
}

export interface PubUserApiApiPubUserDeleteIdPostRequest {
    /**
     * 
     * @type number
     * @memberof PubUserApiapiPubUserDeleteIdPost
     */
    id: number
}

export interface PubUserApiApiPubUserEditPostRequest {
    /**
     * 
     * @type VPubuserDept
     * @memberof PubUserApiapiPubUserEditPost
     */
    vPubuserDept?: VPubuserDept
}

export interface PubUserApiApiPubUserGetAccessGetRequest {
}

export interface PubUserApiApiPubUserGetFunctionsCodePostRequest {
    /**
     * 
     * @type string
     * @memberof PubUserApiapiPubUserGetFunctionsCodePost
     */
    code: string
}

export interface PubUserApiApiPubUserGetModelIdPostRequest {
    /**
     * 
     * @type number
     * @memberof PubUserApiapiPubUserGetModelIdPost
     */
    id: number
}

export interface PubUserApiApiPubUserGetPagePostRequest {
    /**
     * 
     * @type PageDataReq
     * @memberof PubUserApiapiPubUserGetPagePost
     */
    pageDataReq?: PageDataReq
}

export interface PubUserApiApiPubUserLogoutPostRequest {
}

export interface PubUserApiApiPubUserSaveFunctionsCodePostRequest {
    /**
     * 
     * @type string
     * @memberof PubUserApiapiPubUserSaveFunctionsCodePost
     */
    code: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof PubUserApiapiPubUserSaveFunctionsCodePost
     */
    requestBody?: Array<string>
}

export class ObjectPubUserApi {
    private api: ObservablePubUserApi

    public constructor(configuration: Configuration, requestFactory?: PubUserApiRequestFactory, responseProcessor?: PubUserApiResponseProcessor) {
        this.api = new ObservablePubUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 添加用户
     * @param param the request object
     */
    public apiPubUserAddPost(param: PubUserApiApiPubUserAddPostRequest = {}, options?: Configuration): Promise<BooleanDataRes> {
        return this.api.apiPubUserAddPost(param.vPubuserDept,  options).toPromise();
    }

    /**
     * 删除用户
     * @param param the request object
     */
    public apiPubUserDeleteIdPost(param: PubUserApiApiPubUserDeleteIdPostRequest, options?: Configuration): Promise<BooleanDataRes> {
        return this.api.apiPubUserDeleteIdPost(param.id,  options).toPromise();
    }

    /**
     * 编辑用户
     * @param param the request object
     */
    public apiPubUserEditPost(param: PubUserApiApiPubUserEditPostRequest = {}, options?: Configuration): Promise<BooleanDataRes> {
        return this.api.apiPubUserEditPost(param.vPubuserDept,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPubUserGetAccessGet(param: PubUserApiApiPubUserGetAccessGetRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiPubUserGetAccessGet( options).toPromise();
    }

    /**
     * 获取用户权限
     * @param param the request object
     */
    public apiPubUserGetFunctionsCodePost(param: PubUserApiApiPubUserGetFunctionsCodePostRequest, options?: Configuration): Promise<StringIEnumerableDataRes> {
        return this.api.apiPubUserGetFunctionsCodePost(param.code,  options).toPromise();
    }

    /**
     * 获取用户实体
     * @param param the request object
     */
    public apiPubUserGetModelIdPost(param: PubUserApiApiPubUserGetModelIdPostRequest, options?: Configuration): Promise<VPubuserDeptDataRes> {
        return this.api.apiPubUserGetModelIdPost(param.id,  options).toPromise();
    }

    /**
     * 获取用户分页
     * @param param the request object
     */
    public apiPubUserGetPagePost(param: PubUserApiApiPubUserGetPagePostRequest = {}, options?: Configuration): Promise<VPubuserDeptPageDateRes> {
        return this.api.apiPubUserGetPagePost(param.pageDataReq,  options).toPromise();
    }

    /**
     * 注销登录
     * @param param the request object
     */
    public apiPubUserLogoutPost(param: PubUserApiApiPubUserLogoutPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiPubUserLogoutPost( options).toPromise();
    }

    /**
     * 保存用户权限
     * @param param the request object
     */
    public apiPubUserSaveFunctionsCodePost(param: PubUserApiApiPubUserSaveFunctionsCodePostRequest, options?: Configuration): Promise<BooleanDataRes> {
        return this.api.apiPubUserSaveFunctionsCodePost(param.code, param.requestBody,  options).toPromise();
    }

}

import { ObservableValuesApi } from "./ObservableAPI";
import { ValuesApiRequestFactory, ValuesApiResponseProcessor} from "../apis/ValuesApi";

export interface ValuesApiApiValuesGetRequest {
}

export interface ValuesApiApiValuesIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof ValuesApiapiValuesIdDelete
     */
    id: number
}

export interface ValuesApiApiValuesIdGetRequest {
    /**
     * 
     * @type number
     * @memberof ValuesApiapiValuesIdGet
     */
    id: number
}

export interface ValuesApiApiValuesIdPutRequest {
    /**
     * 
     * @type number
     * @memberof ValuesApiapiValuesIdPut
     */
    id: number
    /**
     * 
     * @type string
     * @memberof ValuesApiapiValuesIdPut
     */
    body?: string
}

export interface ValuesApiApiValuesPostRequest {
    /**
     * 
     * @type PubUser
     * @memberof ValuesApiapiValuesPost
     */
    pubUser?: PubUser
}

export class ObjectValuesApi {
    private api: ObservableValuesApi

    public constructor(configuration: Configuration, requestFactory?: ValuesApiRequestFactory, responseProcessor?: ValuesApiResponseProcessor) {
        this.api = new ObservableValuesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiValuesGet(param: ValuesApiApiValuesGetRequest = {}, options?: Configuration): Promise<string> {
        return this.api.apiValuesGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiValuesIdDelete(param: ValuesApiApiValuesIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apiValuesIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiValuesIdGet(param: ValuesApiApiValuesIdGetRequest, options?: Configuration): Promise<string> {
        return this.api.apiValuesIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiValuesIdPut(param: ValuesApiApiValuesIdPutRequest, options?: Configuration): Promise<void> {
        return this.api.apiValuesIdPut(param.id, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiValuesPost(param: ValuesApiApiValuesPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiValuesPost(param.pubUser,  options).toPromise();
    }

}

import { ObservableWeatherForecastApi } from "./ObservableAPI";
import { WeatherForecastApiRequestFactory, WeatherForecastApiResponseProcessor} from "../apis/WeatherForecastApi";

export interface WeatherForecastApiWeatherForecastGetRequest {
}

export class ObjectWeatherForecastApi {
    private api: ObservableWeatherForecastApi

    public constructor(configuration: Configuration, requestFactory?: WeatherForecastApiRequestFactory, responseProcessor?: WeatherForecastApiResponseProcessor) {
        this.api = new ObservableWeatherForecastApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public weatherForecastGet(param: WeatherForecastApiWeatherForecastGetRequest = {}, options?: Configuration): Promise<Array<WeatherForecast>> {
        return this.api.weatherForecastGet( options).toPromise();
    }

}
