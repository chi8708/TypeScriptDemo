# .PubRoleApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPubRoleAddPost**](PubRoleApi.md#apiPubRoleAddPost) | **POST** /api/PubRole/Add | 添加角色
[**apiPubRoleDeleteIdPost**](PubRoleApi.md#apiPubRoleDeleteIdPost) | **POST** /api/PubRole/Delete/{id} | 删除角色
[**apiPubRoleEditPost**](PubRoleApi.md#apiPubRoleEditPost) | **POST** /api/PubRole/Edit | 编辑角色
[**apiPubRoleGetFunctionsCodePost**](PubRoleApi.md#apiPubRoleGetFunctionsCodePost) | **POST** /api/PubRole/GetFunctions/{code} | 获取角色权限
[**apiPubRoleGetListPost**](PubRoleApi.md#apiPubRoleGetListPost) | **POST** /api/PubRole/GetList | 
[**apiPubRoleGetPagePost**](PubRoleApi.md#apiPubRoleGetPagePost) | **POST** /api/PubRole/GetPage | 获取角色分页
[**apiPubRoleSaveFunctionsCodePost**](PubRoleApi.md#apiPubRoleSaveFunctionsCodePost) | **POST** /api/PubRole/SaveFunctions/{code} | 保存角色权限


# **apiPubRoleAddPost**
> BooleanDataRes apiPubRoleAddPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubRoleApi(configuration);

let body:.PubRoleApiApiPubRoleAddPostRequest = {
  // PubRole (optional)
  pubRole: {
    id: 1,
    roleCode: "roleCode_example",
    roleName: "roleName_example",
    remark: "remark_example",
    stopFlag: true,
    crid: "crid_example",
    crdt: new Date('1970-01-01T00:00:00.00Z'),
    lmid: "lmid_example",
    lmdt: new Date('1970-01-01T00:00:00.00Z'),
  },
};

apiInstance.apiPubRoleAddPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pubRole** | **PubRole**|  |


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

# **apiPubRoleDeleteIdPost**
> BooleanDataRes apiPubRoleDeleteIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubRoleApi(configuration);

let body:.PubRoleApiApiPubRoleDeleteIdPostRequest = {
  // number
  id: 1,
};

apiInstance.apiPubRoleDeleteIdPost(body).then((data:any) => {
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

# **apiPubRoleEditPost**
> BooleanDataRes apiPubRoleEditPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubRoleApi(configuration);

let body:.PubRoleApiApiPubRoleEditPostRequest = {
  // PubRole (optional)
  pubRole: {
    id: 1,
    roleCode: "roleCode_example",
    roleName: "roleName_example",
    remark: "remark_example",
    stopFlag: true,
    crid: "crid_example",
    crdt: new Date('1970-01-01T00:00:00.00Z'),
    lmid: "lmid_example",
    lmdt: new Date('1970-01-01T00:00:00.00Z'),
  },
};

apiInstance.apiPubRoleEditPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pubRole** | **PubRole**|  |


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

# **apiPubRoleGetFunctionsCodePost**
> StringIEnumerableDataRes apiPubRoleGetFunctionsCodePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubRoleApi(configuration);

let body:.PubRoleApiApiPubRoleGetFunctionsCodePostRequest = {
  // string
  code: "code_example",
};

apiInstance.apiPubRoleGetFunctionsCodePost(body).then((data:any) => {
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

# **apiPubRoleGetListPost**
> PubRoleListDataRes apiPubRoleGetListPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubRoleApi(configuration);

let body:any = {};

apiInstance.apiPubRoleGetListPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**PubRoleListDataRes**

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

# **apiPubRoleGetPagePost**
> PubRolePageDateRes apiPubRoleGetPagePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubRoleApi(configuration);

let body:.PubRoleApiApiPubRoleGetPagePostRequest = {
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

apiInstance.apiPubRoleGetPagePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageDataReq** | **PageDataReq**|  |


### Return type

**PubRolePageDateRes**

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

# **apiPubRoleSaveFunctionsCodePost**
> BooleanDataRes apiPubRoleSaveFunctionsCodePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubRoleApi(configuration);

let body:.PubRoleApiApiPubRoleSaveFunctionsCodePostRequest = {
  // string
  code: "code_example",
  // Array<string> (optional)
  requestBody: [
    "requestBody_example",
  ],
};

apiInstance.apiPubRoleSaveFunctionsCodePost(body).then((data:any) => {
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


