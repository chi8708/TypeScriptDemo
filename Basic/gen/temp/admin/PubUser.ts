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
import {
  BooleanDataRes,
  PageDataReq,
  StringIEnumerableDataRes,
  VPubuserDept,
  VPubuserDeptDataRes,
  VPubuserDeptPageDateRes,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PubUser<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags PubUser
   * @name PubUserGetAccessList
   * @request GET:/api/PubUser/GetAccess
   * @secure
   */
  pubUserGetAccessList = (params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/PubUser/GetAccess`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags PubUser
   * @name PubUserGetPageCreate
   * @summary 获取用户分页
   * @request POST:/api/PubUser/GetPage
   * @secure
   */
  pubUserGetPageCreate = (data: PageDataReq, params: RequestParams = {}) =>
    this.request<VPubuserDeptPageDateRes, any>({
      path: `/api/PubUser/GetPage`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PubUser
   * @name PubUserAddCreate
   * @summary 添加用户
   * @request POST:/api/PubUser/Add
   * @secure
   */
  pubUserAddCreate = (data: VPubuserDept, params: RequestParams = {}) =>
    this.request<BooleanDataRes, any>({
      path: `/api/PubUser/Add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PubUser
   * @name PubUserEditCreate
   * @summary 编辑用户
   * @request POST:/api/PubUser/Edit
   * @secure
   */
  pubUserEditCreate = (data: VPubuserDept, params: RequestParams = {}) =>
    this.request<BooleanDataRes, any>({
      path: `/api/PubUser/Edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PubUser
   * @name PubUserDeleteCreate
   * @summary 删除用户
   * @request POST:/api/PubUser/Delete/{id}
   * @secure
   */
  pubUserDeleteCreate = (id: number, params: RequestParams = {}) =>
    this.request<BooleanDataRes, any>({
      path: `/api/PubUser/Delete/${id}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PubUser
   * @name PubUserGetFunctionsCreate
   * @summary 获取用户权限
   * @request POST:/api/PubUser/GetFunctions/{code}
   * @secure
   */
  pubUserGetFunctionsCreate = (code: string | null, params: RequestParams = {}) =>
    this.request<StringIEnumerableDataRes, any>({
      path: `/api/PubUser/GetFunctions/${code}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PubUser
   * @name PubUserSaveFunctionsCreate
   * @summary 保存用户权限
   * @request POST:/api/PubUser/SaveFunctions/{code}
   * @secure
   */
  pubUserSaveFunctionsCreate = (code: string | null, data: string[] | null, params: RequestParams = {}) =>
    this.request<BooleanDataRes, any>({
      path: `/api/PubUser/SaveFunctions/${code}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PubUser
   * @name PubUserLogoutCreate
   * @summary 注销登录
   * @request POST:/api/PubUser/Logout
   * @secure
   */
  pubUserLogoutCreate = (params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/PubUser/Logout`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags PubUser
   * @name PubUserGetModelCreate
   * @summary 获取用户实体
   * @request POST:/api/PubUser/GetModel/{id}
   * @secure
   */
  pubUserGetModelCreate = (id: number, params: RequestParams = {}) =>
    this.request<VPubuserDeptDataRes, any>({
      path: `/api/PubUser/GetModel/${id}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
}
