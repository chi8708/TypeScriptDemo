# .ValuesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiValuesGet**](ValuesApi.md#apiValuesGet) | **GET** /api/Values | 
[**apiValuesIdDelete**](ValuesApi.md#apiValuesIdDelete) | **DELETE** /api/Values/{id} | 
[**apiValuesIdGet**](ValuesApi.md#apiValuesIdGet) | **GET** /api/Values/{id} | 
[**apiValuesIdPut**](ValuesApi.md#apiValuesIdPut) | **PUT** /api/Values/{id} | 
[**apiValuesPost**](ValuesApi.md#apiValuesPost) | **POST** /api/Values | 


# **apiValuesGet**
> string apiValuesGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ValuesApi(configuration);

let body:any = {};

apiInstance.apiValuesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**string**

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

# **apiValuesIdDelete**
> void apiValuesIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ValuesApi(configuration);

let body:.ValuesApiApiValuesIdDeleteRequest = {
  // number
  id: 1,
};

apiInstance.apiValuesIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


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

# **apiValuesIdGet**
> string apiValuesIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ValuesApi(configuration);

let body:.ValuesApiApiValuesIdGetRequest = {
  // number
  id: 1,
};

apiInstance.apiValuesIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**string**

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

# **apiValuesIdPut**
> void apiValuesIdPut()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ValuesApi(configuration);

let body:.ValuesApiApiValuesIdPutRequest = {
  // number
  id: 1,
  // string (optional)
  body: "body_example",
};

apiInstance.apiValuesIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
 **id** | [**number**] |  | defaults to undefined


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

# **apiValuesPost**
> void apiValuesPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ValuesApi(configuration);

let body:.ValuesApiApiValuesPostRequest = {
  // PubUser (optional)
  pubUser: {
    id: 1,
    userCode: "userCode_example",
    userName: "userName_example",
    realName: "realName_example",
    userPwd: "userPwd_example",
    sex: 1,
    identityNo: "identityNo_example",
    birthday: new Date('1970-01-01T00:00:00.00Z'),
    deptCode: "deptCode_example",
    managerFlag: 1,
    tel: "tel_example",
    eMail: "eMail_example",
    qq: "qq_example",
    remark: "remark_example",
    stopFlag: 1,
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
  },
};

apiInstance.apiValuesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pubUser** | **PubUser**|  |


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


