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

import { CaptchaDataIResultOutput, SlideTrack, ValidateResultIResultOutput } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Captcha<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Captcha
   * @name AdminCaptchaGenerateCreate
   * @summary 生成
   * @request POST:/api/admin/Captcha/generate
   * @secure
   */
  adminCaptchaGenerateCreate = (
    query?: {
      /** 验证码id */
      captchaId?: string | null;
    },
    params: RequestParams = {},
  ) =>
    this.request<CaptchaDataIResultOutput, any>({
      path: `/api/admin/Captcha/generate`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Captcha
   * @name AdminCaptchaCheckCreate
   * @summary 验证
   * @request POST:/api/admin/Captcha/check
   * @secure
   */
  adminCaptchaCheckCreate = (
    data: SlideTrack,
    query?: {
      /** 验证码id */
      captchaId?: string | null;
    },
    params: RequestParams = {},
  ) =>
    this.request<ValidateResultIResultOutput, any>({
      path: `/api/admin/Captcha/check`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
