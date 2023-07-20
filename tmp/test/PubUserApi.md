# .PubUserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPubUserAddPost**](PubUserApi.md#apiPubUserAddPost) | **POST** /api/PubUser/Add | 添加用户
[**apiPubUserDeleteIdPost**](PubUserApi.md#apiPubUserDeleteIdPost) | **POST** /api/PubUser/Delete/{id} | 删除用户
[**apiPubUserEditPost**](PubUserApi.md#apiPubUserEditPost) | **POST** /api/PubUser/Edit | 编辑用户
[**apiPubUserGetAccessGet**](PubUserApi.md#apiPubUserGetAccessGet) | **GET** /api/PubUser/GetAccess | 
[**apiPubUserGetFunctionsCodePost**](PubUserApi.md#apiPubUserGetFunctionsCodePost) | **POST** /api/PubUser/GetFunctions/{code} | 获取用户权限
[**apiPubUserGetModelIdPost**](PubUserApi.md#apiPubUserGetModelIdPost) | **POST** /api/PubUser/GetModel/{id} | 获取用户实体
[**apiPubUserGetPagePost**](PubUserApi.md#apiPubUserGetPagePost) | **POST** /api/PubUser/GetPage | 获取用户分页
[**apiPubUserLogoutPost**](PubUserApi.md#apiPubUserLogoutPost) | **POST** /api/PubUser/Logout | 注销登录
[**apiPubUserSaveFunctionsCodePost**](PubUserApi.md#apiPubUserSaveFunctionsCodePost) | **POST** /api/PubUser/SaveFunctions/{code} | 保存用户权限


# **apiPubUserAddPost**
> BooleanDataRes apiPubUserAddPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubUserApi(configuration);

let body:.PubUserApiApiPubUserAddPostRequest = {
  // VPubuserDept (optional)
  vPubuserDept: {
    roleCodes: [
      "roleCodes_example",
    ],
    id: 1,
    userCode: "userCode_example",
    userName: "userName_example",
    realName: "realName_example",
    userPwd: "userPwd_example",
    sex: true,
    identityNo: "identityNo_example",
    birthday: new Date('1970-01-01T00:00:00.00Z'),
    deptCode: "deptCode_example",
    managerFlag: true,
    tel: "tel_example",
    eMail: "eMail_example",
    qq: "qq_example",
    remark: "remark_example",
    stopFlag: true,
    crid: "crid_example",
    crdt: new Date('1970-01-01T00:00:00.00Z'),
    lmid: "lmid_example",
    lmdt: new Date('1970-01-01T00:00:00.00Z'),
    loginDate: new Date('1970-01-01T00:00:00.00Z'),
    provinceCode: "provinceCode_example",
    cityCode: "cityCode_example",
    regionCode: "regionCode_example",
    userAddress: "userAddress_example",
    wxcode: "wxcode_example",
    headUrl: "headUrl_example",
    userStatus: 1,
    deptName: "deptName_example",
  },
};

apiInstance.apiPubUserAddPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vPubuserDept** | **VPubuserDept**|  |


### Return type

**BooleanDataRes**

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

# **apiPubUserDeleteIdPost**
> BooleanDataRes apiPubUserDeleteIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubUserApi(configuration);

let body:.PubUserApiApiPubUserDeleteIdPostRequest = {
  // number
  id: 1,
};

apiInstance.apiPubUserDeleteIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**BooleanDataRes**

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

# **apiPubUserEditPost**
> BooleanDataRes apiPubUserEditPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubUserApi(configuration);

let body:.PubUserApiApiPubUserEditPostRequest = {
  // VPubuserDept (optional)
  vPubuserDept: {
    roleCodes: [
      "roleCodes_example",
    ],
    id: 1,
    userCode: "userCode_example",
    userName: "userName_example",
    realName: "realName_example",
    userPwd: "userPwd_example",
    sex: true,
    identityNo: "identityNo_example",
    birthday: new Date('1970-01-01T00:00:00.00Z'),
    deptCode: "deptCode_example",
    managerFlag: true,
    tel: "tel_example",
    eMail: "eMail_example",
    qq: "qq_example",
    remark: "remark_example",
    stopFlag: true,
    crid: "crid_example",
    crdt: new Date('1970-01-01T00:00:00.00Z'),
    lmid: "lmid_example",
    lmdt: new Date('1970-01-01T00:00:00.00Z'),
    loginDate: new Date('1970-01-01T00:00:00.00Z'),
    provinceCode: "provinceCode_example",
    cityCode: "cityCode_example",
    regionCode: "regionCode_example",
    userAddress: "userAddress_example",
    wxcode: "wxcode_example",
    headUrl: "headUrl_example",
    userStatus: 1,
    deptName: "deptName_example",
  },
};

apiInstance.apiPubUserEditPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vPubuserDept** | **VPubuserDept**|  |


### Return type

**BooleanDataRes**

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

# **apiPubUserGetAccessGet**
> void apiPubUserGetAccessGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubUserApi(configuration);

let body:any = {};

apiInstance.apiPubUserGetAccessGet(body).then((data:any) => {
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

# **apiPubUserGetFunctionsCodePost**
> StringIEnumerableDataRes apiPubUserGetFunctionsCodePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubUserApi(configuration);

let body:.PubUserApiApiPubUserGetFunctionsCodePostRequest = {
  // string
  code: "code_example",
};

apiInstance.apiPubUserGetFunctionsCodePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | defaults to undefined


### Return type

**StringIEnumerableDataRes**

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

# **apiPubUserGetModelIdPost**
> VPubuserDeptDataRes apiPubUserGetModelIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubUserApi(configuration);

let body:.PubUserApiApiPubUserGetModelIdPostRequest = {
  // number
  id: 1,
};

apiInstance.apiPubUserGetModelIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**VPubuserDeptDataRes**

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

# **apiPubUserGetPagePost**
> VPubuserDeptPageDateRes apiPubUserGetPagePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubUserApi(configuration);

let body:.PubUserApiApiPubUserGetPagePostRequest = {
  // PageDataReq (optional)
  pageDataReq: {
    pageNum: 1,
    pageSize: 1,
    field: "field_example",
    order: "order_example",
    query: {
      "key": null,
    },
  },
};

apiInstance.apiPubUserGetPagePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageDataReq** | **PageDataReq**|  |


### Return type

**VPubuserDeptPageDateRes**

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

# **apiPubUserLogoutPost**
> void apiPubUserLogoutPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubUserApi(configuration);

let body:any = {};

apiInstance.apiPubUserLogoutPost(body).then((data:any) => {
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

# **apiPubUserSaveFunctionsCodePost**
> BooleanDataRes apiPubUserSaveFunctionsCodePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubUserApi(configuration);

let body:.PubUserApiApiPubUserSaveFunctionsCodePostRequest = {
  // string
  code: "code_example",
  // Array<string> (optional)
  requestBody: [
    "requestBody_example",
  ],
};

apiInstance.apiPubUserSaveFunctionsCodePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **Array<string>**|  |
 **code** | [**string**] |  | defaults to undefined


### Return type

**BooleanDataRes**

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


