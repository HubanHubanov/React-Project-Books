async function requester(method, url, data) {

    const options = {
        method,
        headers: {}
    };

    if(data) {
        options.headers["Content=Type"] = "application/json"
        options.body = JSON.stringify(data)
    }
    
   const response = await fetch(url, options);

   const result = response.json();

   return result;

}

export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const put = requester.bind(null, "PUT");
export const del = requester.bind(null, "DELETE");

// export const get = (url) => request("get", url);
// export const post = (url, data) => request("post", url, data);
// export const put = (url, data) => request("put", url, data);
// export const del = (url) => request("delete", url);


