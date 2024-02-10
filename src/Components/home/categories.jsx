import React, { useState } from 'react'

import {blogCategories} from "../../Constants/data"
import  Post  from "../home/post/post";
import  MyPost  from "../home/post/myPost";

import { Link  , useNavigate, useSearchParams} from 'react-router-dom'
import myPost from '../home/post/myPost';
const categories = () => {
     const  navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const [checkMyPost, setCheckMyPost] = useState(false)
    
    const myPostHandler = () => {
            setCheckMyPost(true)
            navigate("/")
    }
  return (

    <>
     {/* <button className="rounded-lg px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300">Create Blog</button> */}

<Link to={`/create?category=${category || ''}`}>
 <button className="w-[100%] mt-2 rounded-lg px-4 py-2 border-2 bg-blue-500 text-blue-100 hover:border-blue-600 hover:bg-transparent hover:text-blue-500 duration-300">Create Blog</button>
 </Link>

     <div className="bg-gray-200 ">
    <div className="container mx-auto flex flex-col lg:flex-row p-8">
    
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <Link to={"/"} className="text-lg font-semibold "> All Categories</Link>
            <ul className="space-y-2">
                { blogCategories.map(category =>{

                return <li key={category.id}><Link to = {`/?category=${category.type}`} className=" text-blue-800 font-semibold hover:underline">{category.type}</Link></li>    
                
               })}
            <li onClick={myPostHandler} className=" text-blue-800 cursor-pointer font-semibold hover:underline">My All Post</li>
            </ul>

        </div>

        <div className="w-full lg:w-3/4">
            <h1 className="text-3xl font-semibold mb-6">Latest Blog Posts</h1>
            
           {checkMyPost ? <MyPost/>:<Post/>} 

        </div>
    </div>
</div>

    </>
  )
}

export default categories