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
import { ObservableAuthroizeApi } from './ObservableAPI';

import { AuthroizeApiRequestFactory, AuthroizeApiResponseProcessor} from "../apis/AuthroizeApi";
export class PromiseAuthroizeApi {
    private api: ObservableAuthroizeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthroizeApiRequestFactory,
        responseProcessor?: AuthroizeApiResponseProcessor
    ) {
        this.api = new ObservableAuthroizeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 获取菜单
     */
    public apiAuthroizeGetUserAccessPost(_options?: Configuration): Promise<void> {
        const result = this.api.apiAuthroizeGetUserAccessPost(_options);
        return result.toPromise();
    }

    /**
     * 获取菜单
     */
    public apiAuthroizeGetUserMenuPost(_options?: Configuration): Promise<PubFunctionListIResultOutput> {
        const result = this.api.apiAuthroizeGetUserMenuPost(_options);
        return result.toPromise();
    }

    /**
     * 是否开启验证码
     */
    public apiAuthroizeIsCaptchaGet(_options?: Configuration): Promise<BooleanIResultOutput> {
        const result = this.api.apiAuthroizeIsCaptchaGet(_options);
        return result.toPromise();
    }

    /**
     * 登录获取token
     * @param loginViewModel 登录实体信息
     */
    public apiAuthroizePost(loginViewModel?: LoginViewModel, _options?: Configuration): Promise<void> {
        const result = this.api.apiAuthroizePost(loginViewModel, _options);
        return result.toPromise();
    }


}



import { ObservableCaptchaApi } from './ObservableAPI';

import { CaptchaApiRequestFactory, CaptchaApiResponseProcessor} from "../apis/CaptchaApi";
export class PromiseCaptchaApi {
    private api: ObservableCaptchaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CaptchaApiRequestFactory,
        responseProcessor?: CaptchaApiResponseProcessor
    ) {
        this.api = new ObservableCaptchaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 验证
     * @param captchaId 验证码id
     * @param slideTrack 滑动轨迹
     */
    public apiAdminCaptchaCheckPost(captchaId?: string, slideTrack?: SlideTrack, _options?: Configuration): Promise<ValidateResultIResultOutput> {
        const result = this.api.apiAdminCaptchaCheckPost(captchaId, slideTrack, _options);
        return result.toPromise();
    }

    /**
     * 生成
     * @param captchaId 验证码id
     */
    public apiAdminCaptchaGeneratePost(captchaId?: string, _options?: Configuration): Promise<CaptchaDataIResultOutput> {
        const result = this.api.apiAdminCaptchaGeneratePost(captchaId, _options);
        return result.toPromise();
    }


}



import { ObservablePubDeptApi } from './ObservableAPI';

import { PubDeptApiRequestFactory, PubDeptApiResponseProcessor} from "../apis/PubDeptApi";
export class PromisePubDeptApi {
    private api: ObservablePubDeptApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PubDeptApiRequestFactory,
        responseProcessor?: PubDeptApiResponseProcessor
    ) {
        this.api = new ObservablePubDeptApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 添加
     * @param pubDepartment 
     */
    public apiPubDeptAddPost(pubDepartment?: PubDepartment, _options?: Configuration): Promise<BooleanDataRes> {
        const result = this.api.apiPubDeptAddPost(pubDepartment, _options);
        return result.toPromise();
    }

    /**
     * 删除
     * @param id 
     */
    public apiPubDeptDeleteIdPost(id: string, _options?: Configuration): Promise<BooleanDataRes> {
        const result = this.api.apiPubDeptDeleteIdPost(id, _options);
        return result.toPromise();
    }

    /**
     * 编辑
     * @param pubDepartment 
     */
    public apiPubDeptEditPost(pubDepartment?: PubDepartment, _options?: Configuration): Promise<BooleanDataRes> {
        const result = this.api.apiPubDeptEditPost(pubDepartment, _options);
        return result.toPromise();
    }

    /**
     * 获取子部门列表
     * @param code 
     */
    public apiPubDeptGetChildListCodePost(code: string, _options?: Configuration): Promise<VPubdeptParentListDataRes> {
        const result = this.api.apiPubDeptGetChildListCodePost(code, _options);
        return result.toPromise();
    }

    /**
     * 获取子部门列表
     * @param code 
     */
    public apiPubDeptGetChildListPost(code?: string, _options?: Configuration): Promise<VPubdeptParentListDataRes> {
        const result = this.api.apiPubDeptGetChildListPost(code, _options);
        return result.toPromise();
    }

    /**
     */
    public apiPubDeptGetListPost(_options?: Configuration): Promise<PubDepartmentListDataRes> {
        const result = this.api.apiPubDeptGetListPost(_options);
        return result.toPromise();
    }


}



import { ObservablePubFunctionApi } from './ObservableAPI';

import { PubFunctionApiRequestFactory, PubFunctionApiResponseProcessor} from "../apis/PubFunctionApi";
export class PromisePubFunctionApi {
    private api: ObservablePubFunctionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PubFunctionApiRequestFactory,
        responseProcessor?: PubFunctionApiResponseProcessor
    ) {
        this.api = new ObservablePubFunctionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 添加
     * @param pubFunction 
     */
    public apiPubFunctionAddPost(pubFunction?: PubFunction, _options?: Configuration): Promise<BooleanDataRes> {
        const result = this.api.apiPubFunctionAddPost(pubFunction, _options);
        return result.toPromise();
    }

    /**
     * 删除
     * @param id 
     */
    public apiPubFunctionDeleteIdPost(id: string, _options?: Configuration): Promise<BooleanDataRes> {
        const result = this.api.apiPubFunctionDeleteIdPost(id, _options);
        return result.toPromise();
    }

    /**
     * 编辑
     * @param pubFunction 
     */
    public apiPubFunctionEditPost(pubFunction?: PubFunction, _options?: Configuration): Promise<BooleanDataRes> {
        const result = this.api.apiPubFunctionEditPost(pubFunction, _options);
        return result.toPromise();
    }

    /**
     * 获取子权限列表
     * @param code 
     */
    public apiPubFunctionGetChildListCodePost(code: string, _options?: Configuration): Promise<VPubfunctionParentListDataRes> {
        const result = this.api.apiPubFunctionGetChildListCodePost(code, _options);
        return result.toPromise();
    }

    /**
     * 获取子权限列表
     * @param code 
     */
    public apiPubFunctionGetChildListPost(code?: string, _options?: Configuration): Promise<VPubfunctionParentListDataRes> {
        const result = this.api.apiPubFunctionGetChildListPost(code, _options);
        return result.toPromise();
    }

    /**
     */
    public apiPubFunctionGetListPost(_options?: Configuration): Promise<PubFunctionListDataRes> {
        const result = this.api.apiPubFunctionGetListPost(_options);
        return result.toPromise();
    }

    /**
     * 获取左侧菜单
     */
    public apiPubFunctionGetMenuPost(_options?: Configuration): Promise<MenuListDataRes> {
        const result = this.api.apiPubFunctionGetMenuPost(_options);
        return result.toPromise();
    }


}



import { ObservablePubRoleApi } from './ObservableAPI';

import { PubRoleApiRequestFactory, PubRoleApiResponseProcessor} from "../apis/PubRoleApi";
export class PromisePubRoleApi {
    private api: ObservablePubRoleApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PubRoleApiRequestFactory,
        responseProcessor?: PubRoleApiResponseProcessor
    ) {
        this.api = new ObservablePubRoleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 添加角色
     * @param pubRole 
     */
    public apiPubRoleAddPost(pubRole?: PubRole, _options?: Configuration): Promise<BooleanDataRes> {
        const result = this.api.apiPubRoleAddPost(pubRole, _options);
        return result.toPromise();
    }

    /**
     * 删除角色
     * @param id 
     */
    public apiPubRoleDeleteIdPost(id: number, _options?: Configuration): Promise<BooleanDataRes> {
        const result = this.api.apiPubRoleDeleteIdPost(id, _options);
        return result.toPromise();
    }

    /**
     * 编辑角色
     * @param pubRole 
     */
    public apiPubRoleEditPost(pubRole?: PubRole, _options?: Configuration): Promise<BooleanDataRes> {
        const result = this.api.apiPubRoleEditPost(pubRole, _options);
        return result.toPromise();
    }

    /**
     * 获取角色权限
     * @param code 
     */
    public apiPubRoleGetFunctionsCodePost(code: string, _options?: Configuration): Promise<StringIEnumerableDataRes> {
        const result = this.api.apiPubRoleGetFunctionsCodePost(code, _options);
        return result.toPromise();
    }

    /**
     */
    public apiPubRoleGetListPost(_options?: Configuration): Promise<PubRoleListDataRes> {
        const result = this.api.apiPubRoleGetListPost(_options);
        return result.toPromise();
    }

    /**
     * 获取角色分页
     * @param pageDataReq 
     */
    public apiPubRoleGetPagePost(pageDataReq?: PageDataReq, _options?: Configuration): Promise<PubRolePageDateRes> {
        const result = this.api.apiPubRoleGetPagePost(pageDataReq, _options);
        return result.toPromise();
    }

    /**
     * 保存角色权限
     * @param code 
     * @param requestBody 
     */
    public apiPubRoleSaveFunctionsCodePost(code: string, requestBody?: Array<string>, _options?: Configuration): Promise<BooleanDataRes> {
        const result = this.api.apiPubRoleSaveFunctionsCodePost(code, requestBody, _options);
        return result.toPromise();
    }


}



import { ObservablePubUserApi } from './ObservableAPI';

import { PubUserApiRequestFactory, PubUserApiResponseProcessor} from "../apis/PubUserApi";
export class PromisePubUserApi {
    private api: ObservablePubUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PubUserApiRequestFactory,
        responseProcessor?: PubUserApiResponseProcessor
    ) {
        this.api = new ObservablePubUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 添加用户
     * @param vPubuserDept 
     */
    public apiPubUserAddPost(vPubuserDept?: VPubuserDept, _options?: Configuration): Promise<BooleanDataRes> {
        const result = this.api.apiPubUserAddPost(vPubuserDept, _options);
        return result.toPromise();
    }

    /**
     * 删除用户
     * @param id 
     */
    public apiPubUserDeleteIdPost(id: number, _options?: Configuration): Promise<BooleanDataRes> {
        const result = this.api.apiPubUserDeleteIdPost(id, _options);
        return result.toPromise();
    }

    /**
     * 编辑用户
     * @param vPubuserDept 
     */
    public apiPubUserEditPost(vPubuserDept?: VPubuserDept, _options?: Configuration): Promise<BooleanDataRes> {
        const result = this.api.apiPubUserEditPost(vPubuserDept, _options);
        return result.toPromise();
    }

    /**
     */
    public apiPubUserGetAccessGet(_options?: Configuration): Promise<void> {
        const result = this.api.apiPubUserGetAccessGet(_options);
        return result.toPromise();
    }

    /**
     * 获取用户权限
     * @param code 
     */
    public apiPubUserGetFunctionsCodePost(code: string, _options?: Configuration): Promise<StringIEnumerableDataRes> {
        const result = this.api.apiPubUserGetFunctionsCodePost(code, _options);
        return result.toPromise();
    }

    /**
     * 获取用户实体
     * @param id 
     */
    public apiPubUserGetModelIdPost(id: number, _options?: Configuration): Promise<VPubuserDeptDataRes> {
        const result = this.api.apiPubUserGetModelIdPost(id, _options);
        return result.toPromise();
    }

    /**
     * 获取用户分页
     * @param pageDataReq 
     */
    public apiPubUserGetPagePost(pageDataReq?: PageDataReq, _options?: Configuration): Promise<VPubuserDeptPageDateRes> {
        const result = this.api.apiPubUserGetPagePost(pageDataReq, _options);
        return result.toPromise();
    }

    /**
     * 注销登录
     */
    public apiPubUserLogoutPost(_options?: Configuration): Promise<void> {
        const result = this.api.apiPubUserLogoutPost(_options);
        return result.toPromise();
    }

    /**
     * 保存用户权限
     * @param code 
     * @param requestBody 
     */
    public apiPubUserSaveFunctionsCodePost(code: string, requestBody?: Array<string>, _options?: Configuration): Promise<BooleanDataRes> {
        const result = this.api.apiPubUserSaveFunctionsCodePost(code, requestBody, _options);
        return result.toPromise();
    }


}



import { ObservableValuesApi } from './ObservableAPI';

import { ValuesApiRequestFactory, ValuesApiResponseProcessor} from "../apis/ValuesApi";
export class PromiseValuesApi {
    private api: ObservableValuesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ValuesApiRequestFactory,
        responseProcessor?: ValuesApiResponseProcessor
    ) {
        this.api = new ObservableValuesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public apiValuesGet(_options?: Configuration): Promise<string> {
        const result = this.api.apiValuesGet(_options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public apiValuesIdDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiValuesIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public apiValuesIdGet(id: number, _options?: Configuration): Promise<string> {
        const result = this.api.apiValuesIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param body 
     */
    public apiValuesIdPut(id: number, body?: string, _options?: Configuration): Promise<void> {
        const result = this.api.apiValuesIdPut(id, body, _options);
        return result.toPromise();
    }

    /**
     * @param pubUser 
     */
    public apiValuesPost(pubUser?: PubUser, _options?: Configuration): Promise<void> {
        const result = this.api.apiValuesPost(pubUser, _options);
        return result.toPromise();
    }


}



import { ObservableWeatherForecastApi } from './ObservableAPI';

import { WeatherForecastApiRequestFactory, WeatherForecastApiResponseProcessor} from "../apis/WeatherForecastApi";
export class PromiseWeatherForecastApi {
    private api: ObservableWeatherForecastApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WeatherForecastApiRequestFactory,
        responseProcessor?: WeatherForecastApiResponseProcessor
    ) {
        this.api = new ObservableWeatherForecastApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public weatherForecastGet(_options?: Configuration): Promise<Array<WeatherForecast>> {
        const result = this.api.weatherForecastGet(_options);
        return result.toPromise();
    }


}



