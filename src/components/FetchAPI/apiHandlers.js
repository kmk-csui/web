export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete
};
const BASE_URL = "https://kmk-csui-backend.up.railway.app/"

function get(url) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(BASE_URL+url, requestOptions).then(handleResponse);
}

function post(url, body, contentType) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': contentType},
        body: body
    };
    return fetch(BASE_URL+url, requestOptions).then(handleResponse);
}

function put(url, body, contentType) {
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': contentType},
        body: body
    };
    return fetch(BASE_URL+url, requestOptions).then(handleResponse);    
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url, contentType) {
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': contentType}
    };
    return fetch(BASE_URL+url, requestOptions).then(handleResponse);
}


function handleResponse(response) {
    if(!response.ok){
        throw new Error(response.statusText)
    }
    return response.json()
}
