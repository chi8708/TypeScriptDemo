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

import {
  BooleanDataRes,
  PageDataReq,
  PubRole,
  PubRoleListDataRes,
  PubRolePageDateRes,
  StringIEnumerableDataRes,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PubRole<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags PubRole
   * @name PubRoleGetListCreate
   * @request POST:/api/PubRole/GetList
   * @secure
   */
  pubRoleGetListCreate = (params: RequestParams = {}) =>
    this.request<PubRoleListDataRes, any>({
      path: `/api/PubRole/GetList`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PubRole
   * @name PubRoleGetPageCreate
   * @summary 获取角色分页
   * @request POST:/api/PubRole/GetPage
   * @secure
   */
  pubRoleGetPageCreate = (data: PageDataReq, params: RequestParams = {}) =>
    this.request<PubRolePageDateRes, any>({
      path: `/api/PubRole/GetPage`,
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
   * @tags PubRole
   * @name PubRoleAddCreate
   * @summary 添加角色
   * @request POST:/api/PubRole/Add
   * @secure
   */
  pubRoleAddCreate = (data: PubRole, params: RequestParams = {}) =>
    this.request<BooleanDataRes, any>({
      path: `/api/PubRole/Add`,
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
   * @tags PubRole
   * @name PubRoleEditCreate
   * @summary 编辑角色
   * @request POST:/api/PubRole/Edit
   * @secure
   */
  pubRoleEditCreate = (data: PubRole, params: RequestParams = {}) =>
    this.request<BooleanDataRes, any>({
      path: `/api/PubRole/Edit`,
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
   * @tags PubRole
   * @name PubRoleDeleteCreate
   * @summary 删除角色
   * @request POST:/api/PubRole/Delete/{id}
   * @secure
   */
  pubRoleDeleteCreate = (id: number, params: RequestParams = {}) =>
    this.request<BooleanDataRes, any>({
      path: `/api/PubRole/Delete/${id}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PubRole
   * @name PubRoleGetFunctionsCreate
   * @summary 获取角色权限
   * @request POST:/api/PubRole/GetFunctions/{code}
   * @secure
   */
  pubRoleGetFunctionsCreate = (code: string | null, params: RequestParams = {}) =>
    this.request<StringIEnumerableDataRes, any>({
      path: `/api/PubRole/GetFunctions/${code}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PubRole
   * @name PubRoleSaveFunctionsCreate
   * @summary 保存角色权限
   * @request POST:/api/PubRole/SaveFunctions/{code}
   * @secure
   */
  pubRoleSaveFunctionsCreate = (code: string | null, data: string[] | null, params: RequestParams = {}) =>
    this.request<BooleanDataRes, any>({
      path: `/api/PubRole/SaveFunctions/${code}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
