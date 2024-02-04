import React, { useEffect, useState ,useContext } from 'react'

import {Link, useParams} from "react-router-dom"

import {API} from "../../Service/api";
import { DataContext } from '../../Context/DataProvider';

const DetailView = () => {
  
  const [post, setPost] = useState({});
  const { id } = useParams();
  const {account} = useContext(DataContext);

  const url = post.picture ? post.picture :"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
  useEffect(()=>{
       const fetchData = async ()=>{
        let response = await API.getPostById(id);
        if(response.isSuccess){
          setPost(response.data);
        }
       }
       fetchData()
  }, [])
  return (
    <>

      <div className="container pt-10">
    <div className="card  p-0 w-80 mx-auto">
        <div className="row ">
            <div className="col-md-6 flex  col-sm-12">
                <img  className="img-fluid" src={url} alt="Blog" />
            </div>
            <div className="col-md-6 col-sm-12  relative">
                <div className=" absolute top-1/2 transform -translate-y-1/2">
                    <p className="product-category mb-0">{post.category}</p>
                    <h3 className="text-2xl">{post.username}</h3>
                    <hr className="my-4"/>
                    <p className="product-price text-2xl">{post.title}</p>
                    <div className="clear-both"></div>

                    <hr className="my-4"/>

                    <p className=" mt-4 mb-1"> {post.description}</p>

                    <hr className="my-4"/>

                    <p className="mt-4 mb-1">{new Date(post.createdDate).toDateString()}</p>

                    <div className='flex gap-7'>
                  {account.username === post.username && <> 
                    <Link className="button primary delete">❌ Delete</Link>

                    <Link className="button primary edit">✏️ Edit</Link>
                    </>}
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
</div>



      {/* <div className = 'container my-5'>

        <div className='card detail-card p-0 '>
         <img src={url} alt="Blog" />
         <h1>{post.title}</h1>
         <h2>{post.username}</h2>
         <p>{new Date(post.createdDate).toDateString()}</p>
         <p>{post.description}</p>

         </div>
      </div> */}
    </>
  )
}

export default DetailView ;