import React, { useEffect, useState } from 'react'

import {API} from "../../../Service/api"
import { Link } from 'react-router-dom';
// import postCss from '../Post.module.CSS'

const post = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
      const fetchData = async () =>{
      let response =   await API.getAllPosts();
      if(response.isSuccess){
        setPosts(response.data)
        console.log('response console ',response.data)
      }
      }
      fetchData();
    } ,[])
  return (
    <>
  <div className="max-w-screen-xl mx-auto px-4 pt-16 pb-4">
    <div className="flex flex-col flex-wrap md:flex-row md:-mx-2 gap-5">
    {
  posts && posts.length >0 ? posts.map(post =>{
    return <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0 border-2 border-zinc-800">
        {

        <Link to="#" className="h-72 md:h-96 block group relative overflow-hidden shadow-lg">
          <img src={`${post.picture}`} className="absolute z-0 object-cover w-full h-72 md:h-96 transform group-hover:scale-150"/>
          <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
          <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
            <div className="h-1/2 relative">
              <div className="absolute bottom-0">
                <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">{post.title}</h2>
              </div>
            </div>
            <div className="h-1/2">
              <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">{post.categories}</p>
              <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
            </div>
          </div>
        </Link>
         }
      </div>
      
    }): <div>No Data Available to display</div> }
    
    </div>
  </div>
     

    </>
  )
}

export default post