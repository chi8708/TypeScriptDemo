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
  MenuListDataRes,
  PubFunction,
  PubFunctionListDataRes,
  VPubfunctionParentListDataRes,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PubFunction<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags PubFunction
   * @name PubFunctionGetListCreate
   * @request POST:/api/PubFunction/GetList
   * @secure
   */
  pubFunctionGetListCreate = (params: RequestParams = {}) =>
    this.request<PubFunctionListDataRes, any>({
      path: `/api/PubFunction/GetList`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PubFunction
   * @name PubFunctionGetChildListCreate
   * @summary 获取子权限列表
   * @request POST:/api/PubFunction/GetChildList
   * @secure
   */
  pubFunctionGetChildListCreate = (
    query?: {
      /** @default "FC001" */
      code?: string | null;
    },
    params: RequestParams = {},
  ) =>
    this.request<VPubfunctionParentListDataRes, any>({
      path: `/api/PubFunction/GetChildList`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PubFunction
   * @name PubFunctionGetChildListCreate2
   * @summary 获取子权限列表
   * @request POST:/api/PubFunction/GetChildList/{code}
   * @originalName pubFunctionGetChildListCreate
   * @duplicate
   * @secure
   */
  pubFunctionGetChildListCreate2 = (code: string | null, params: RequestParams = {}) =>
    this.request<VPubfunctionParentListDataRes, any>({
      path: `/api/PubFunction/GetChildList/${code}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PubFunction
   * @name PubFunctionAddCreate
   * @summary 添加
   * @request POST:/api/PubFunction/Add
   * @secure
   */
  pubFunctionAddCreate = (data: PubFunction, params: RequestParams = {}) =>
    this.request<BooleanDataRes, any>({
      path: `/api/PubFunction/Add`,
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
   * @tags PubFunction
   * @name PubFunctionEditCreate
   * @summary 编辑
   * @request POST:/api/PubFunction/Edit
   * @secure
   */
  pubFunctionEditCreate = (data: PubFunction, params: RequestParams = {}) =>
    this.request<BooleanDataRes, any>({
      path: `/api/PubFunction/Edit`,
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
   * @tags PubFunction
   * @name PubFunctionDeleteCreate
   * @summary 删除
   * @request POST:/api/PubFunction/Delete/{id}
   * @secure
   */
  pubFunctionDeleteCreate = (id: string | null, params: RequestParams = {}) =>
    this.request<BooleanDataRes, any>({
      path: `/api/PubFunction/Delete/${id}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PubFunction
   * @name PubFunctionGetMenuCreate
   * @summary 获取左侧菜单
   * @request POST:/api/PubFunction/GetMenu
   * @secure
   */
  pubFunctionGetMenuCreate = (params: RequestParams = {}) =>
    this.request<MenuListDataRes, any>({
      path: `/api/PubFunction/GetMenu`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
}
