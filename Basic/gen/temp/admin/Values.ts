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
import { PubUser } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Values<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Values
   * @name ValuesList
   * @request GET:/api/Values
   * @secure
   */
  valuesList = (params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/api/Values`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Values
   * @name ValuesCreate
   * @request POST:/api/Values
   * @secure
   */
  valuesCreate = (data: PubUser, params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/Values`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Values
   * @name ValuesDetail
   * @request GET:/api/Values/{id}
   * @secure
   */
  valuesDetail = (id: number, params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/api/Values/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Values
   * @name ValuesUpdate
   * @request PUT:/api/Values/{id}
   * @secure
   */
  valuesUpdate = (id: number, data: string | null, params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/Values/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Values
   * @name ValuesDelete
   * @request DELETE:/api/Values/{id}
   * @secure
   */
  valuesDelete = (id: number, params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/Values/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
