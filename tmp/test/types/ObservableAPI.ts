import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AuthroizeApiRequestFactory, AuthroizeApiResponseProcessor} from "../apis/AuthroizeApi";
export class ObservableAuthroizeApi {
    private requestFactory: AuthroizeApiRequestFactory;
    private responseProcessor: AuthroizeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthroizeApiRequestFactory,
        responseProcessor?: AuthroizeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthroizeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthroizeApiResponseProcessor();
    }

    /**
     * 获取菜单
     */
    public apiAuthroizeGetUserAccessPost(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.apiAuthroizeGetUserAccessPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiAuthroizeGetUserAccessPost(rsp)));
            }));
    }

    /**
     * 获取菜单
     */
    public apiAuthroizeGetUserMenuPost(_options?: Configuration): Observable<PubFunctionListIResultOutput> {
        const requestContextPromise = this.requestFactory.apiAuthroizeGetUserMenuPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiAuthroizeGetUserMenuPost(rsp)));
            }));
    }

    /**
     * 是否开启验证码
     */
    public apiAuthroizeIsCaptchaGet(_options?: Configuration): Observable<BooleanIResultOutput> {
        const requestContextPromise = this.requestFactory.apiAuthroizeIsCaptchaGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiAuthroizeIsCaptchaGet(rsp)));
            }));
    }

    /**
     * 登录获取token
     * @param loginViewModel 登录实体信息
     */
    public apiAuthroizePost(loginViewModel?: LoginViewModel, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.apiAuthroizePost(loginViewModel, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiAuthroizePost(rsp)));
            }));
    }

}

import { CaptchaApiRequestFactory, CaptchaApiResponseProcessor} from "../apis/CaptchaApi";
export class ObservableCaptchaApi {
    private requestFactory: CaptchaApiRequestFactory;
    private responseProcessor: CaptchaApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CaptchaApiRequestFactory,
        responseProcessor?: CaptchaApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CaptchaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CaptchaApiResponseProcessor();
    }

    /**
     * 验证
     * @param captchaId 验证码id
     * @param slideTrack 滑动轨迹
     */
    public apiAdminCaptchaCheckPost(captchaId?: string, slideTrack?: SlideTrack, _options?: Configuration): Observable<ValidateResultIResultOutput> {
        const requestContextPromise = this.requestFactory.apiAdminCaptchaCheckPost(captchaId, slideTrack, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiAdminCaptchaCheckPost(rsp)));
            }));
    }

    /**
     * 生成
     * @param captchaId 验证码id
     */
    public apiAdminCaptchaGeneratePost(captchaId?: string, _options?: Configuration): Observable<CaptchaDataIResultOutput> {
        const requestContextPromise = this.requestFactory.apiAdminCaptchaGeneratePost(captchaId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiAdminCaptchaGeneratePost(rsp)));
            }));
    }

}

import { PubDeptApiRequestFactory, PubDeptApiResponseProcessor} from "../apis/PubDeptApi";
export class ObservablePubDeptApi {
    private requestFactory: PubDeptApiRequestFactory;
    private responseProcessor: PubDeptApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PubDeptApiRequestFactory,
        responseProcessor?: PubDeptApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PubDeptApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PubDeptApiResponseProcessor();
    }

    /**
     * 添加
     * @param pubDepartment 
     */
    public apiPubDeptAddPost(pubDepartment?: PubDepartment, _options?: Configuration): Observable<BooleanDataRes> {
        const requestContextPromise = this.requestFactory.apiPubDeptAddPost(pubDepartment, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubDeptAddPost(rsp)));
            }));
    }

    /**
     * 删除
     * @param id 
     */
    public apiPubDeptDeleteIdPost(id: string, _options?: Configuration): Observable<BooleanDataRes> {
        const requestContextPromise = this.requestFactory.apiPubDeptDeleteIdPost(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubDeptDeleteIdPost(rsp)));
            }));
    }

    /**
     * 编辑
     * @param pubDepartment 
     */
    public apiPubDeptEditPost(pubDepartment?: PubDepartment, _options?: Configuration): Observable<BooleanDataRes> {
        const requestContextPromise = this.requestFactory.apiPubDeptEditPost(pubDepartment, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubDeptEditPost(rsp)));
            }));
    }

    /**
     * 获取子部门列表
     * @param code 
     */
    public apiPubDeptGetChildListCodePost(code: string, _options?: Configuration): Observable<VPubdeptParentListDataRes> {
        const requestContextPromise = this.requestFactory.apiPubDeptGetChildListCodePost(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubDeptGetChildListCodePost(rsp)));
            }));
    }

    /**
     * 获取子部门列表
     * @param code 
     */
    public apiPubDeptGetChildListPost(code?: string, _options?: Configuration): Observable<VPubdeptParentListDataRes> {
        const requestContextPromise = this.requestFactory.apiPubDeptGetChildListPost(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubDeptGetChildListPost(rsp)));
            }));
    }

    /**
     */
    public apiPubDeptGetListPost(_options?: Configuration): Observable<PubDepartmentListDataRes> {
        const requestContextPromise = this.requestFactory.apiPubDeptGetListPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubDeptGetListPost(rsp)));
            }));
    }

}

import { PubFunctionApiRequestFactory, PubFunctionApiResponseProcessor} from "../apis/PubFunctionApi";
export class ObservablePubFunctionApi {
    private requestFactory: PubFunctionApiRequestFactory;
    private responseProcessor: PubFunctionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PubFunctionApiRequestFactory,
        responseProcessor?: PubFunctionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PubFunctionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PubFunctionApiResponseProcessor();
    }

    /**
     * 添加
     * @param pubFunction 
     */
    public apiPubFunctionAddPost(pubFunction?: PubFunction, _options?: Configuration): Observable<BooleanDataRes> {
        const requestContextPromise = this.requestFactory.apiPubFunctionAddPost(pubFunction, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubFunctionAddPost(rsp)));
            }));
    }

    /**
     * 删除
     * @param id 
     */
    public apiPubFunctionDeleteIdPost(id: string, _options?: Configuration): Observable<BooleanDataRes> {
        const requestContextPromise = this.requestFactory.apiPubFunctionDeleteIdPost(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubFunctionDeleteIdPost(rsp)));
            }));
    }

    /**
     * 编辑
     * @param pubFunction 
     */
    public apiPubFunctionEditPost(pubFunction?: PubFunction, _options?: Configuration): Observable<BooleanDataRes> {
        const requestContextPromise = this.requestFactory.apiPubFunctionEditPost(pubFunction, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubFunctionEditPost(rsp)));
            }));
    }

    /**
     * 获取子权限列表
     * @param code 
     */
    public apiPubFunctionGetChildListCodePost(code: string, _options?: Configuration): Observable<VPubfunctionParentListDataRes> {
        const requestContextPromise = this.requestFactory.apiPubFunctionGetChildListCodePost(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubFunctionGetChildListCodePost(rsp)));
            }));
    }

    /**
     * 获取子权限列表
     * @param code 
     */
    public apiPubFunctionGetChildListPost(code?: string, _options?: Configuration): Observable<VPubfunctionParentListDataRes> {
        const requestContextPromise = this.requestFactory.apiPubFunctionGetChildListPost(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubFunctionGetChildListPost(rsp)));
            }));
    }

    /**
     */
    public apiPubFunctionGetListPost(_options?: Configuration): Observable<PubFunctionListDataRes> {
        const requestContextPromise = this.requestFactory.apiPubFunctionGetListPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubFunctionGetListPost(rsp)));
            }));
    }

    /**
     * 获取左侧菜单
     */
    public apiPubFunctionGetMenuPost(_options?: Configuration): Observable<MenuListDataRes> {
        const requestContextPromise = this.requestFactory.apiPubFunctionGetMenuPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubFunctionGetMenuPost(rsp)));
            }));
    }

}

import { PubRoleApiRequestFactory, PubRoleApiResponseProcessor} from "../apis/PubRoleApi";
export class ObservablePubRoleApi {
    private requestFactory: PubRoleApiRequestFactory;
    private responseProcessor: PubRoleApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PubRoleApiRequestFactory,
        responseProcessor?: PubRoleApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PubRoleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PubRoleApiResponseProcessor();
    }

    /**
     * 添加角色
     * @param pubRole 
     */
    public apiPubRoleAddPost(pubRole?: PubRole, _options?: Configuration): Observable<BooleanDataRes> {
        const requestContextPromise = this.requestFactory.apiPubRoleAddPost(pubRole, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubRoleAddPost(rsp)));
            }));
    }

    /**
     * 删除角色
     * @param id 
     */
    public apiPubRoleDeleteIdPost(id: number, _options?: Configuration): Observable<BooleanDataRes> {
        const requestContextPromise = this.requestFactory.apiPubRoleDeleteIdPost(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubRoleDeleteIdPost(rsp)));
            }));
    }

    /**
     * 编辑角色
     * @param pubRole 
     */
    public apiPubRoleEditPost(pubRole?: PubRole, _options?: Configuration): Observable<BooleanDataRes> {
        const requestContextPromise = this.requestFactory.apiPubRoleEditPost(pubRole, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubRoleEditPost(rsp)));
            }));
    }

    /**
     * 获取角色权限
     * @param code 
     */
    public apiPubRoleGetFunctionsCodePost(code: string, _options?: Configuration): Observable<StringIEnumerableDataRes> {
        const requestContextPromise = this.requestFactory.apiPubRoleGetFunctionsCodePost(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubRoleGetFunctionsCodePost(rsp)));
            }));
    }

    /**
     */
    public apiPubRoleGetListPost(_options?: Configuration): Observable<PubRoleListDataRes> {
        const requestContextPromise = this.requestFactory.apiPubRoleGetListPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubRoleGetListPost(rsp)));
            }));
    }

    /**
     * 获取角色分页
     * @param pageDataReq 
     */
    public apiPubRoleGetPagePost(pageDataReq?: PageDataReq, _options?: Configuration): Observable<PubRolePageDateRes> {
        const requestContextPromise = this.requestFactory.apiPubRoleGetPagePost(pageDataReq, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubRoleGetPagePost(rsp)));
            }));
    }

    /**
     * 保存角色权限
     * @param code 
     * @param requestBody 
     */
    public apiPubRoleSaveFunctionsCodePost(code: string, requestBody?: Array<string>, _options?: Configuration): Observable<BooleanDataRes> {
        const requestContextPromise = this.requestFactory.apiPubRoleSaveFunctionsCodePost(code, requestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubRoleSaveFunctionsCodePost(rsp)));
            }));
    }

}

import { PubUserApiRequestFactory, PubUserApiResponseProcessor} from "../apis/PubUserApi";
export class ObservablePubUserApi {
    private requestFactory: PubUserApiRequestFactory;
    private responseProcessor: PubUserApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PubUserApiRequestFactory,
        responseProcessor?: PubUserApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PubUserApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PubUserApiResponseProcessor();
    }

    /**
     * 添加用户
     * @param vPubuserDept 
     */
    public apiPubUserAddPost(vPubuserDept?: VPubuserDept, _options?: Configuration): Observable<BooleanDataRes> {
        const requestContextPromise = this.requestFactory.apiPubUserAddPost(vPubuserDept, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubUserAddPost(rsp)));
            }));
    }

    /**
     * 删除用户
     * @param id 
     */
    public apiPubUserDeleteIdPost(id: number, _options?: Configuration): Observable<BooleanDataRes> {
        const requestContextPromise = this.requestFactory.apiPubUserDeleteIdPost(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubUserDeleteIdPost(rsp)));
            }));
    }

    /**
     * 编辑用户
     * @param vPubuserDept 
     */
    public apiPubUserEditPost(vPubuserDept?: VPubuserDept, _options?: Configuration): Observable<BooleanDataRes> {
        const requestContextPromise = this.requestFactory.apiPubUserEditPost(vPubuserDept, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubUserEditPost(rsp)));
            }));
    }

    /**
     */
    public apiPubUserGetAccessGet(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.apiPubUserGetAccessGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubUserGetAccessGet(rsp)));
            }));
    }

    /**
     * 获取用户权限
     * @param code 
     */
    public apiPubUserGetFunctionsCodePost(code: string, _options?: Configuration): Observable<StringIEnumerableDataRes> {
        const requestContextPromise = this.requestFactory.apiPubUserGetFunctionsCodePost(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubUserGetFunctionsCodePost(rsp)));
            }));
    }

    /**
     * 获取用户实体
     * @param id 
     */
    public apiPubUserGetModelIdPost(id: number, _options?: Configuration): Observable<VPubuserDeptDataRes> {
        const requestContextPromise = this.requestFactory.apiPubUserGetModelIdPost(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubUserGetModelIdPost(rsp)));
            }));
    }

    /**
     * 获取用户分页
     * @param pageDataReq 
     */
    public apiPubUserGetPagePost(pageDataReq?: PageDataReq, _options?: Configuration): Observable<VPubuserDeptPageDateRes> {
        const requestContextPromise = this.requestFactory.apiPubUserGetPagePost(pageDataReq, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubUserGetPagePost(rsp)));
            }));
    }

    /**
     * 注销登录
     */
    public apiPubUserLogoutPost(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.apiPubUserLogoutPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubUserLogoutPost(rsp)));
            }));
    }

    /**
     * 保存用户权限
     * @param code 
     * @param requestBody 
     */
    public apiPubUserSaveFunctionsCodePost(code: string, requestBody?: Array<string>, _options?: Configuration): Observable<BooleanDataRes> {
        const requestContextPromise = this.requestFactory.apiPubUserSaveFunctionsCodePost(code, requestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPubUserSaveFunctionsCodePost(rsp)));
            }));
    }

}

import { ValuesApiRequestFactory, ValuesApiResponseProcessor} from "../apis/ValuesApi";
export class ObservableValuesApi {
    private requestFactory: ValuesApiRequestFactory;
    private responseProcessor: ValuesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ValuesApiRequestFactory,
        responseProcessor?: ValuesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ValuesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ValuesApiResponseProcessor();
    }

    /**
     */
    public apiValuesGet(_options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.apiValuesGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiValuesGet(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public apiValuesIdDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.apiValuesIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiValuesIdDelete(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public apiValuesIdGet(id: number, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.apiValuesIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiValuesIdGet(rsp)));
            }));
    }

    /**
     * @param id 
     * @param body 
     */
    public apiValuesIdPut(id: number, body?: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.apiValuesIdPut(id, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiValuesIdPut(rsp)));
            }));
    }

    /**
     * @param pubUser 
     */
    public apiValuesPost(pubUser?: PubUser, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.apiValuesPost(pubUser, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiValuesPost(rsp)));
            }));
    }

}

import { WeatherForecastApiRequestFactory, WeatherForecastApiResponseProcessor} from "../apis/WeatherForecastApi";
export class ObservableWeatherForecastApi {
    private requestFactory: WeatherForecastApiRequestFactory;
    private responseProcessor: WeatherForecastApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WeatherForecastApiRequestFactory,
        responseProcessor?: WeatherForecastApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WeatherForecastApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WeatherForecastApiResponseProcessor();
    }

    /**
     */
    public weatherForecastGet(_options?: Configuration): Observable<Array<WeatherForecast>> {
        const requestContextPromise = this.requestFactory.weatherForecastGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.weatherForecastGet(rsp)));
            }));
    }

}
