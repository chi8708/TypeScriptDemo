/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import type { AxiosResponse } from "axios";
import { BooleanIResultOutput, LoginViewModel, PubFunctionListIResultOutput } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Authroize<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Authroize
   * @name AuthroizeCreate
   * @summary 登录获取token
   * @request POST:/api/Authroize
   * @secure
   */
  authroizeCreate = (data: LoginViewModel, params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/Authroize`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Authroize
   * @name AuthroizeIsCaptchaList
   * @summary 是否开启验证码
   * @request GET:/api/Authroize/isCaptcha
   * @secure
   */
  authroizeIsCaptchaList = (params: RequestParams = {}) =>
    this.request<BooleanIResultOutput, any>({
      path: `/api/Authroize/isCaptcha`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authroize
   * @name AuthroizeGetUserMenuCreate
   * @summary 获取菜单
   * @request POST:/api/Authroize/GetUserMenu
   * @secure
   */
  authroizeGetUserMenuCreate = (params: RequestParams = {}) =>
    this.request<PubFunctionListIResultOutput, any>({
      path: `/api/Authroize/GetUserMenu`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authroize
   * @name AuthroizeGetUserAccessCreate
   * @summary 获取菜单
   * @request POST:/api/Authroize/GetUserAccess
   * @secure
   */
  authroizeGetUserAccessCreate = (params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/Authroize/GetUserAccess`,
      method: "POST",
      secure: true,
      ...params,
    });
}
