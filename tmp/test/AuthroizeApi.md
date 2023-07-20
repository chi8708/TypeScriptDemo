# .AuthroizeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAuthroizeGetUserAccessPost**](AuthroizeApi.md#apiAuthroizeGetUserAccessPost) | **POST** /api/Authroize/GetUserAccess | 获取菜单
[**apiAuthroizeGetUserMenuPost**](AuthroizeApi.md#apiAuthroizeGetUserMenuPost) | **POST** /api/Authroize/GetUserMenu | 获取菜单
[**apiAuthroizeIsCaptchaGet**](AuthroizeApi.md#apiAuthroizeIsCaptchaGet) | **GET** /api/Authroize/isCaptcha | 是否开启验证码
[**apiAuthroizePost**](AuthroizeApi.md#apiAuthroizePost) | **POST** /api/Authroize | 登录获取token


# **apiAuthroizeGetUserAccessPost**
> void apiAuthroizeGetUserAccessPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthroizeApi(configuration);

let body:any = {};

apiInstance.apiAuthroizeGetUserAccessPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiAuthroizeGetUserMenuPost**
> PubFunctionListIResultOutput apiAuthroizeGetUserMenuPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthroizeApi(configuration);

let body:any = {};

apiInstance.apiAuthroizeGetUserMenuPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**PubFunctionListIResultOutput**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiAuthroizeIsCaptchaGet**
> BooleanIResultOutput apiAuthroizeIsCaptchaGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthroizeApi(configuration);

let body:any = {};

apiInstance.apiAuthroizeIsCaptchaGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**BooleanIResultOutput**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiAuthroizePost**
> void apiAuthroizePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthroizeApi(configuration);

let body:.AuthroizeApiApiAuthroizePostRequest = {
  // LoginViewModel | 登录实体信息 (optional)
  loginViewModel: {
    userName: "userName_example",
    password: "password_example",
    passwordKey: "passwordKey_example",
    captchaId: "captchaId_example",
    captchaData: "captchaData_example",
  },
};

apiInstance.apiAuthroizePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginViewModel** | **LoginViewModel**| 登录实体信息 |


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


