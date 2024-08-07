import { getAccessToken } from "../utils/authUtils";
import { login } from "./authService";

async function requester(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    const accessToken = getAccessToken();
    
    if(data) {  
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

        if(accessToken) {
            options.headers["X-Authorization"] = accessToken;
        }       
    
   const response = await fetch(url, options);

   if(response.status == 403) {
    console.log("requester");
    
       localStorage.clear();
       
    }   

   if(response.status === 204) {
        return;
   }     

   const result = await response.json();

   if(!response.ok) {
        throw result;
   }
   return result;



}

export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const put = requester.bind(null, "PUT");
export const del = requester.bind(null, "DELETE");

export default {
    get,
    post,
    put,
    del
}


