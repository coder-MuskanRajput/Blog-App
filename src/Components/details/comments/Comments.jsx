import { useState ,useContext, useEffect } from "react"

import { DataContext } from "../../../Context/DataProvider";
import {API} from "../../../Service/api"

//Components

import ShowComments from "./ShowComments";

export const Comments = ({ post }) =>{

    const initialValues = {
        name:"",
        postId :"",
        comments: "",
        date: new Date()
    }
    
    const [comment, setComment] = useState(initialValues);
    const [comments, setComments] = useState([]);

    const {account} = useContext(DataContext);

    useEffect(() =>{
         const getData = async(e) =>{
          const response = await API.getAllComments(post._id);
          if(response.isSuccess){
            setComments(response.data);
          }
         }
         getData();
    },[post])
    const handleChange = (e) =>{
        setComment({...comment ,
             name :account.username,
             postId :post._id,
             comments: e.target.value,})
    }

    const addComment =async (e) =>{
      let response = await API.newComment(comment);
      console.log(response);
      if(response.isSuccess){
        setComment(initialValues);
      }
    }
     return(
    <>
    <div className="flex w-[100%] justify-center items-center">

<div className="w-full md:w-1/2 bg-white p-2 pt-4 rounded shadow-lg">
  <div className="flex ml-3">
    <div className="mr-3">
      <img src="https://static.thenounproject.com/png/12017-200.png" alt="" className=" w-[30%] rounded-full"/>
    </div>
  </div>

  <div className="mt-0 p-3 w-full">
    <textarea rows="3" className="border p-2 rounded w-full" value={comment.comments} onChange={(e)=> handleChange(e)} placeholder="Write your Comments here..."></textarea>
  </div>

  <div className="flex justify-between mx-3">
    <div><button onClick={(e)=> addComment(e)} className="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Submit</button></div>
      </div>

</div>

</div>
    </>
    )
}

export default Comments