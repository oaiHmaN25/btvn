import { config } from "./Config.js";  
const {SERVER_API} = config;
export const client = {
    serverApi : SERVER_API,
    setUrl : function (url) {
        this.serverApi = url;
    },
    send: async function (url,method='GET', body = null, token = null){
        url = `${this.serverApi}${url}`
        let headers = {
            "Content-Type": "application/json"
        }
        // console.log(token);
        // if(token){
        //     headers["Authorization"] = `Bearer ${token}`;
        // }
        if (token) {
            headers["X-Api-Key"] = `${token}`;
        }

        const options = {
            method,
            headers
        }
        if(body != null){
            options.body = JSON.stringify(body);
        }
        // console.log(options);
        const response = await fetch(url,options);
        const data = await response.json();
        return {response,data};
    },
    get: function (url,token=null) {
        return this.send(url, "GET", null,token);
    },
    post : function (url,body ={}, token=null){
        return this.send(url,"POST", body, token)
    },
    put: function (url,body ={},token=null){
        return this.send(url,"PUT", body, token)
    },
    patch: function (url,body ={},token=null){
        return this.send(url,"PATCH", body,token)
    },
    delete: function (url,token=null) {
        return this.send(url, "DELETE",null,token)
    },

}