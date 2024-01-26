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
    function(response){
       // Stop global Loader here
      
       return processResponse(response);
    },
    function(error){
     return Promise.reject( processError(error));
    }
)

///========================================/////////
//  if success -> return { isSuccess : true , data ; Object}
//  if failure -> return { isFailure : true , status : string , msg : string , code : int }

const processResponse = (response)=>{
     if (response?.status === 200){
        return {
            isSuccess : true,
            data : response.data
        }
     }
     else{
        return {
            isFailure : true,
            status : response?.status,
            msg: response?.msg,
            code: response?.code
        }
     }
}

///========================================/////////
//  if success -> return { isSuccess : true , data ; Object}
//  if failure -> return { isFailure : true , status : string , msg : string , code : int }

const processError = async (error) =>{
    if(error.response){
    // Request made and server responded with a status other
    //that falls out of tha range 2.x.x
    console.log("Error in Response" , error.toJSON())
    
     return {
        isError : true,
        msg : API_NOTIFICATIONS_MESSAGES.responseFailure,
        code : error.response.status
     }
    }else if (error.request){
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
       return axiosInstance({
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