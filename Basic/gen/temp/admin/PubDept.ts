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

import { BooleanDataRes, PubDepartment, PubDepartmentListDataRes, VPubdeptParentListDataRes } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PubDept<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags PubDept
   * @name PubDeptGetListCreate
   * @request POST:/api/PubDept/GetList
   * @secure
   */
  pubDeptGetListCreate = (params: RequestParams = {}) =>
    this.request<PubDepartmentListDataRes, any>({
      path: `/api/PubDept/GetList`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PubDept
   * @name PubDeptGetChildListCreate
   * @summary 获取子部门列表
   * @request POST:/api/PubDept/GetChildList
   * @secure
   */
  pubDeptGetChildListCreate = (
    query?: {
      /** @default "D000001" */
      code?: string | null;
    },
    params: RequestParams = {},
  ) =>
    this.request<VPubdeptParentListDataRes, any>({
      path: `/api/PubDept/GetChildList`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PubDept
   * @name PubDeptGetChildListCreate2
   * @summary 获取子部门列表
   * @request POST:/api/PubDept/GetChildList/{code}
   * @originalName pubDeptGetChildListCreate
   * @duplicate
   * @secure
   */
  pubDeptGetChildListCreate2 = (code: string | null, params: RequestParams = {}) =>
    this.request<VPubdeptParentListDataRes, any>({
      path: `/api/PubDept/GetChildList/${code}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PubDept
   * @name PubDeptAddCreate
   * @summary 添加
   * @request POST:/api/PubDept/Add
   * @secure
   */
  pubDeptAddCreate = (data: PubDepartment, params: RequestParams = {}) =>
    this.request<BooleanDataRes, any>({
      path: `/api/PubDept/Add`,
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
   * @tags PubDept
   * @name PubDeptEditCreate
   * @summary 编辑
   * @request POST:/api/PubDept/Edit
   * @secure
   */
  pubDeptEditCreate = (data: PubDepartment, params: RequestParams = {}) =>
    this.request<BooleanDataRes, any>({
      path: `/api/PubDept/Edit`,
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
   * @tags PubDept
   * @name PubDeptDeleteCreate
   * @summary 删除
   * @request POST:/api/PubDept/Delete/{id}
   * @secure
   */
  pubDeptDeleteCreate = (id: string | null, params: RequestParams = {}) =>
    this.request<BooleanDataRes, any>({
      path: `/api/PubDept/Delete/${id}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
}
