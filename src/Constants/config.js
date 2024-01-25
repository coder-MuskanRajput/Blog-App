// API_NOTIFICATIONS_MESSAGES

export const API_NOTIFICATIONS_MESSAGES={
  loading :{
    title : "Loading....",
    message : "Data is being loaded , Please wait"
  },
  success : {
    title : "Success",
    message : "Data Successfully Loaded"
  },
  responseFailure :{
     title:"Error",
     message :"An error occurs while fetching response from the server , Please try Again"
  },
  requestFailure :{
    title:"Error",
    message :"An error occurs while parsing request data"
 },
  networkError :{
    title: "Error",
    message : "Unable to connect with the server , Please check internet connectivity and try again later"
  }

}

// API Service CAll 
// Sample Request
// Need Service Call : {url :"/" , method :"POST /GET/PUT/DELETE" , params:true/false , query : true/false}

export const SERVICE_URLS ={
    userSignup:{url :"/signup" ,method : "POST"},
    userLogin :{url :"/login" , method : "POST"},    
}