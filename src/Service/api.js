import axios from "axios";
import { API_NOTIFICATIONS_MESSAGES , SERVICE_URLS } from "../Constants/config";
const API_URL = "http://localhost:8080";

const axiosInstance = axios.create({
    baseURL : API_URL,
    timeout : 10000,
    headers : {
        "content-type" : "application/json"
    }
})

axiosInstance.interceptors.request.use(
    function(config){
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function(res){
       // Stop global Loader here
      
       return processResponse(res);
    },
    function(error){
     return Promise.reject( processError(error));
    }
)

///========================================/////////
//  if success -> return { isSuccess : true , data ; Object}
//  if failure -> return { isFailure : true , status : string , msg : string , code : int }
const processResponse = (res)=>{
     if (res?.status === 200){
        return {
            isSuccess : true,
            data : res.data
        }
     }
     else{
        return {
            isFailure : true,
            status : res?.status,
            msg: res?.msg,
            code: res?.code
        }
     }
}

///========================================/////////
//  if success -> return { isSuccess : true , data ; Object}
//  if failure -> return { isFailure : true , status : string , msg : string , code : int }

const processError = (error) =>{
    if(error.res){
    // Request made and server responded with a status other
    //that falls out of tha range 2.x.x
    console.log("Error in Response" , error.toJSON())
    
     return {
        isError : true,
        msg : API_NOTIFICATIONS_MESSAGES.responseFailure,
        code : error.res.status
     }
    }else if (error.req){
     //Request made but no response was received

     console.log("Error in Request" , error.toJSON())
    
     return {
        isError : true,
        msg : API_NOTIFICATIONS_MESSAGES.requestFailure,
        code : ""
     }

    }
    else{
    // something happened in setting up request that triggers an error(frontend)
    console.log("Error in Network" , error.toJSON())
    
     return {
        isError : true,
        msg : API_NOTIFICATIONS_MESSAGES.networkError,
        code :""
     }
    }
}

const API = {};

for (const [key , value] of Object.entries(SERVICE_URLS)){
    API[key] = (
        body,
        showUploadProgress,
        showDownloadProgress
    ) =>{
        axiosInstance({
            method: value.method,
            url:value.url,
            data: body,
            responseType : value.responseType,
            onUploadProgress : function(progressEvent){
                if(showUploadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded = 100)/progressEvent.total)
                    showUploadProgress(percentageCompleted)
                }
            },
            onDownloadProgress : function(progressEvent){
                if(showDownloadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded = 100)/progressEvent.total)
                    showDownloadProgress(percentageCompleted)
                }
            }
        })
    }
}

export {API};