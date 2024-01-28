import React from 'react'

import {blogCategories} from "../../Constants/data"
import { Link } from 'react-router-dom'
const categories = () => {
  return (
    <>
     {/* <button className="rounded-lg px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300">Create Blog</button> */}

<Link to={"/create"}>
 <button className=" w-screen mt-2 rounded-lg px-4 py-2 border-2 bg-blue-500 text-blue-100 hover:border-blue-600 hover:bg-transparent hover:text-blue-500 duration-300">Create Blog</button>
 </Link>

     <div className="bg-gray-100 ">
    <div className="container mx-auto flex flex-col lg:flex-row p-8">
    
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
                { blogCategories.map(category =>{

               return <li key={category.id}><Link to="#" className="text-blue-500 hover:underline">{category.type}</Link></li>    

                })}
            </ul>
        </div>

        <div className="w-full lg:w-3/4">
            <h1 className="text-3xl font-semibold mb-6">Latest Blog Posts</h1>

            
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2"><a href="#" className="text-blue-700 hover:underline">Blog Post Title 1</a></h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2"><a href="#" className="text-blue-700 hover:underline">Blog Post Title 2</a></h2>
                <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

        

        </div>
    </div>
</div>

    </>
  )
}

export default categories