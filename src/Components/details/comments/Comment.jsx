import React from 'react'
import {useContext} from "react";

import { DataContext } from '../../../Context/DataProvider';
import { RiDeleteBinLine } from '@remixicon/react';
import {API} from "../../../Service/api"

const Comment = ({comment , setToggle}) => {

  const {account} = useContext(DataContext); 
  const removeComment = async () =>{
    let response = await API.deleteComment(comment._id);
    if(response.isSuccess){
      setToggle(prevState => !prevState)
    }
  }
  return (
    <>
<div class="container mx-auto my-4 sm:px-20 flex justify-center">
  <div class="w-full lg:w-6/12 mx-3 md:mx-0 lg:mx-0 border rounded bg-white overflow-hidden">

<div className="mb-2 pb-2">
        <div className="mb-2 text-sm">
          <strong className="mr-2"> {comment.name} </strong>
          <span className="text-gray-400">
          {new Date(comment.date).toDateString()}

          </span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <span className="text-sm text-gray-500 font-medium cursor-pointer">
            {comment.comments}
          </span>
          <span className="text-sm text-gray-500 font-medium cursor-pointer">
    { comment.name === account.username &&
             <RiDeleteBinLine onClick={() => removeComment()}/>
    }
          </span>
        </div>
      </div>
      </div>
      </div>
      
    </>
  )
}

export default Comment