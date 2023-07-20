# .PubFunctionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPubFunctionAddPost**](PubFunctionApi.md#apiPubFunctionAddPost) | **POST** /api/PubFunction/Add | 添加
[**apiPubFunctionDeleteIdPost**](PubFunctionApi.md#apiPubFunctionDeleteIdPost) | **POST** /api/PubFunction/Delete/{id} | 删除
[**apiPubFunctionEditPost**](PubFunctionApi.md#apiPubFunctionEditPost) | **POST** /api/PubFunction/Edit | 编辑
[**apiPubFunctionGetChildListCodePost**](PubFunctionApi.md#apiPubFunctionGetChildListCodePost) | **POST** /api/PubFunction/GetChildList/{code} | 获取子权限列表
[**apiPubFunctionGetChildListPost**](PubFunctionApi.md#apiPubFunctionGetChildListPost) | **POST** /api/PubFunction/GetChildList | 获取子权限列表
[**apiPubFunctionGetListPost**](PubFunctionApi.md#apiPubFunctionGetListPost) | **POST** /api/PubFunction/GetList | 
[**apiPubFunctionGetMenuPost**](PubFunctionApi.md#apiPubFunctionGetMenuPost) | **POST** /api/PubFunction/GetMenu | 获取左侧菜单


# **apiPubFunctionAddPost**
> BooleanDataRes apiPubFunctionAddPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubFunctionApi(configuration);

let body:.PubFunctionApiApiPubFunctionAddPostRequest = {
  // PubFunction (optional)
  pubFunction: {
    functionCode: "functionCode_example",
    functionEnglish: "functionEnglish_example",
    functionChina: "functionChina_example",
    functionDescrip: "functionDescrip_example",
    parentCode: "parentCode_example",
    menuFlag: true,
    stopFlag: true,
    urlString: "urlString_example",
    editdate: new Date('1970-01-01T00:00:00.00Z'),
    editor: "editor_example",
    sortidx: 1,
    target: "target_example",
    menuIcon: "menuIcon_example",
    routerPath: "routerPath_example",
    isCache: true,
    isNewWindow: true,
    isOpen: true,
  },
};

apiInstance.apiPubFunctionAddPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pubFunction** | **PubFunction**|  |


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

# **apiPubFunctionDeleteIdPost**
> BooleanDataRes apiPubFunctionDeleteIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubFunctionApi(configuration);

let body:.PubFunctionApiApiPubFunctionDeleteIdPostRequest = {
  // string
  id: "id_example",
};

apiInstance.apiPubFunctionDeleteIdPost(body).then((data:any) => {
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

# **apiPubFunctionEditPost**
> BooleanDataRes apiPubFunctionEditPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubFunctionApi(configuration);

let body:.PubFunctionApiApiPubFunctionEditPostRequest = {
  // PubFunction (optional)
  pubFunction: {
    functionCode: "functionCode_example",
    functionEnglish: "functionEnglish_example",
    functionChina: "functionChina_example",
    functionDescrip: "functionDescrip_example",
    parentCode: "parentCode_example",
    menuFlag: true,
    stopFlag: true,
    urlString: "urlString_example",
    editdate: new Date('1970-01-01T00:00:00.00Z'),
    editor: "editor_example",
    sortidx: 1,
    target: "target_example",
    menuIcon: "menuIcon_example",
    routerPath: "routerPath_example",
    isCache: true,
    isNewWindow: true,
    isOpen: true,
  },
};

apiInstance.apiPubFunctionEditPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pubFunction** | **PubFunction**|  |


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

# **apiPubFunctionGetChildListCodePost**
> VPubfunctionParentListDataRes apiPubFunctionGetChildListCodePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubFunctionApi(configuration);

let body:.PubFunctionApiApiPubFunctionGetChildListCodePostRequest = {
  // string
  code: "FC001",
};

apiInstance.apiPubFunctionGetChildListCodePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | defaults to 'FC001'


### Return type

**VPubfunctionParentListDataRes**

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

# **apiPubFunctionGetChildListPost**
> VPubfunctionParentListDataRes apiPubFunctionGetChildListPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubFunctionApi(configuration);

let body:.PubFunctionApiApiPubFunctionGetChildListPostRequest = {
  // string (optional)
  code: "FC001",
};

apiInstance.apiPubFunctionGetChildListPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | (optional) defaults to 'FC001'


### Return type

**VPubfunctionParentListDataRes**

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

# **apiPubFunctionGetListPost**
> PubFunctionListDataRes apiPubFunctionGetListPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubFunctionApi(configuration);

let body:any = {};

apiInstance.apiPubFunctionGetListPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**PubFunctionListDataRes**

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

# **apiPubFunctionGetMenuPost**
> MenuListDataRes apiPubFunctionGetMenuPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PubFunctionApi(configuration);

let body:any = {};

apiInstance.apiPubFunctionGetMenuPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**MenuListDataRes**

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


