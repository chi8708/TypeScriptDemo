# .PubDeptApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPubDeptAddPost**](PubDeptApi.md#apiPubDeptAddPost) | **POST** /api/PubDept/Add | 添加
[**apiPubDeptDeleteIdPost**](PubDeptApi.md#apiPubDeptDeleteIdPost) | **POST** /api/PubDept/Delete/{id} | 删除
[**apiPubDeptEditPost**](PubDeptApi.md#apiPubDeptEditPost) | **POST** /api/PubDept/Edit | 编辑
[**apiPubDeptGetChildListCodePost**](PubDeptApi.md#apiPubDeptGetChildListCodePost) | **POST** /api/PubDept/GetChildList/{code} | 获取子部门列表
[**apiPubDeptGetChildListPost**](PubDeptApi.md#apiPubDeptGetChildListPost) | **POST** /api/PubDept/GetChildList | 获取子部门列表
[**apiPubDeptGetListPost**](PubDeptApi.md#apiPubDeptGetListPost) | **POST** /api/PubDept/GetList | 


# **apiPubDeptAddPost**
> BooleanDataRes apiPubDeptAddPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubDeptApi(configuration);

let body:.PubDeptApiApiPubDeptAddPostRequest = {
  // PubDepartment (optional)
  pubDepartment: {
    deptCode: "deptCode_example",
    deptName: "deptName_example",
    remark: "remark_example",
    parentCode: "parentCode_example",
    deptLevel: 1,
    lmid: "lmid_example",
    lmdt: new Date('1970-01-01T00:00:00.00Z'),
    stopFlag: true,
  },
};

apiInstance.apiPubDeptAddPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pubDepartment** | **PubDepartment**|  |


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

# **apiPubDeptDeleteIdPost**
> BooleanDataRes apiPubDeptDeleteIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubDeptApi(configuration);

let body:.PubDeptApiApiPubDeptDeleteIdPostRequest = {
  // string
  id: "id_example",
};

apiInstance.apiPubDeptDeleteIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


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

# **apiPubDeptEditPost**
> BooleanDataRes apiPubDeptEditPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubDeptApi(configuration);

let body:.PubDeptApiApiPubDeptEditPostRequest = {
  // PubDepartment (optional)
  pubDepartment: {
    deptCode: "deptCode_example",
    deptName: "deptName_example",
    remark: "remark_example",
    parentCode: "parentCode_example",
    deptLevel: 1,
    lmid: "lmid_example",
    lmdt: new Date('1970-01-01T00:00:00.00Z'),
    stopFlag: true,
  },
};

apiInstance.apiPubDeptEditPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pubDepartment** | **PubDepartment**|  |


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

# **apiPubDeptGetChildListCodePost**
> VPubdeptParentListDataRes apiPubDeptGetChildListCodePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubDeptApi(configuration);

let body:.PubDeptApiApiPubDeptGetChildListCodePostRequest = {
  // string
  code: "D000001",
};

apiInstance.apiPubDeptGetChildListCodePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | defaults to 'D000001'


### Return type

**VPubdeptParentListDataRes**

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

# **apiPubDeptGetChildListPost**
> VPubdeptParentListDataRes apiPubDeptGetChildListPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubDeptApi(configuration);

let body:.PubDeptApiApiPubDeptGetChildListPostRequest = {
  // string (optional)
  code: "D000001",
};

apiInstance.apiPubDeptGetChildListPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | (optional) defaults to 'D000001'


### Return type

**VPubdeptParentListDataRes**

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

# **apiPubDeptGetListPost**
> PubDepartmentListDataRes apiPubDeptGetListPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubDeptApi(configuration);

let body:any = {};

apiInstance.apiPubDeptGetListPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**PubDepartmentListDataRes**

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


