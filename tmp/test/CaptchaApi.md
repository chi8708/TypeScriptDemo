# .CaptchaApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAdminCaptchaCheckPost**](CaptchaApi.md#apiAdminCaptchaCheckPost) | **POST** /api/admin/Captcha/check | 验证
[**apiAdminCaptchaGeneratePost**](CaptchaApi.md#apiAdminCaptchaGeneratePost) | **POST** /api/admin/Captcha/generate | 生成


# **apiAdminCaptchaCheckPost**
> ValidateResultIResultOutput apiAdminCaptchaCheckPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaptchaApi(configuration);

let body:.CaptchaApiApiAdminCaptchaCheckPostRequest = {
  // string | 验证码id (optional)
  captchaId: "captchaId_example",
  // SlideTrack | 滑动轨迹 (optional)
  slideTrack: {
    backgroundImageWidth: 1,
    backgroundImageHeight: 1,
    sliderImageWidth: 1,
    sliderImageHeight: 1,
    startTime: new Date('1970-01-01T00:00:00.00Z'),
    endTime: new Date('1970-01-01T00:00:00.00Z'),
    tracks: [
      {
        x: 1,
        y: 1,
        t: 1,
      },
    ],
  },
};

apiInstance.apiAdminCaptchaCheckPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slideTrack** | **SlideTrack**| 滑动轨迹 |
 **captchaId** | [**string**] | 验证码id | (optional) defaults to undefined


### Return type

**ValidateResultIResultOutput**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiAdminCaptchaGeneratePost**
> CaptchaDataIResultOutput apiAdminCaptchaGeneratePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaptchaApi(configuration);

let body:.CaptchaApiApiAdminCaptchaGeneratePostRequest = {
  // string | 验证码id (optional)
  captchaId: "captchaId_example",
};

apiInstance.apiAdminCaptchaGeneratePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **captchaId** | [**string**] | 验证码id | (optional) defaults to undefined


### Return type

**CaptchaDataIResultOutput**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


