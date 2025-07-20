# ExampleApi.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postsGet**](DefaultApi.md#postsGet) | **GET** /posts | Get all posts
[**postsPost**](DefaultApi.md#postsPost) | **POST** /posts | Create a post
[**usersGet**](DefaultApi.md#usersGet) | **GET** /users | Get all users
[**usersIdGet**](DefaultApi.md#usersIdGet) | **GET** /users/{id} | Get user by ID
[**usersPost**](DefaultApi.md#usersPost) | **POST** /users | Create a user



## postsGet

> [Post] postsGet()

Get all posts

### Example

```javascript
import ExampleApi from 'example_api';

let apiInstance = new ExampleApi.DefaultApi();
apiInstance.postsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Post]**](Post.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postsPost

> postsPost(post)

Create a post

### Example

```javascript
import ExampleApi from 'example_api';

let apiInstance = new ExampleApi.DefaultApi();
let post = new ExampleApi.Post(); // Post | 
apiInstance.postsPost(post, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post** | [**Post**](Post.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## usersGet

> [User] usersGet()

Get all users

### Example

```javascript
import ExampleApi from 'example_api';

let apiInstance = new ExampleApi.DefaultApi();
apiInstance.usersGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersIdGet

> User usersIdGet(id)

Get user by ID

### Example

```javascript
import ExampleApi from 'example_api';

let apiInstance = new ExampleApi.DefaultApi();
let id = "id_example"; // String | 
apiInstance.usersIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersPost

> usersPost(user)

Create a user

### Example

```javascript
import ExampleApi from 'example_api';

let apiInstance = new ExampleApi.DefaultApi();
let user = new ExampleApi.User(); // User | 
apiInstance.usersPost(user, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

