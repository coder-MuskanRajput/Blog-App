import React, { useState ,useEffect ,useContext } from 'react'
import { useLocation ,useNavigate, useParams } from 'react-router-dom';
import { DataContext } from "../../Context/DataProvider";
import { API } from "../../Service/api"
import { toast } from 'react-toastify';

const updatePost = () => {

const initialPost = {
  title:"",
  description: "",
  picture:"",
  username:"",
  categories:"",
  createdDate:new Date()
}

const [post, setPost] = useState(initialPost);
const [file, setFile] = useState("");

const { account } = useContext(DataContext);

const location = useLocation();
const navigate  = useNavigate();
const {id} = useParams();

// let url2 = post.picture ? post.picture : "https://st3.depositphotos.com/3268541/16034/v/450/depositphotos_160348548-stock-illustration-blogging-round-colorful-vector-illustration.jpg"

const [url, setUrl] = useState(post?.picture?.url ? post.picture.url : "https://st3.depositphotos.com/3268541/16034/v/450/depositphotos_160348548-stock-illustration-blogging-round-colorful-vector-illustration.jpg")

useEffect(() =>{
      const fetchData = async () =>{
         let response = await API.getPostById(id);
         if(response.isSuccess){
            setPost(response.data);

          //  post.picture = response.data.picture
           setUrl(response.data.picture?.url);
         }
      }
      fetchData();
}, [file])

useEffect(()=>{
   const getImage = async() =>{
     if(file){
      const data = new FormData();
      data.append("name" , file.name);
      data.append("file" , file);

      //Api call
      const response =  await API.uploadFile(data);
      post.picture.url = response.data.url
      post.picture.fileId = response.data.fileId
      setPost({...post , picture : response.data})
      setUrl(response.data.url);
     }
   }
   getImage();
   post.categories = location.search?.split("=")[1] || "All";
   post.username = account.username;
},[file])

const handleChange = (e)=>{
  setPost({...post ,[e.target.name]: e.target.value})
}

const updateBlogPost = async () =>{
  
  let response =  await  API.updatePost(post);
   if(response.isSuccess){
     navigate(`/details/${id}`);
     toast.success("Post Updated")
   }
}
  return (
    <>
    <div className="bg-green-100 flex-col items-center">

    <div className=" w-[100%] bg-cover  h-[500px] text-center overflow-hidden">
      <img src={url}  className='h-[500px] object-cover w-screen bg-center bg-no-repeat'  alt="" />
    </div>

    <div className="flex px-10 w-full items-center  bg-grey-lighter">
        
        <label className="w-64 flex flex-col items-center px-4 py-4 bg-white text-blue-800 rounded-lg shadow-lg tracking-wide uppercase border  mt-2 border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2 text-base leading-normal">Select a file</span>
            <input type='file'  onChange={(e)=>setFile(e.target.files[0])} className="hidden" />
        </label>
     </div>

   <div className="bg-white  p-2 md:w-2/3 lg:w-1/2 mx-auto rounded">
     <form onSubmit={(e) => e.preventDefault() }>

       <div className="flex items-center mb-5">
         <label htmlFor="Title" className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Title</label>
         <input onChange = {(e) => handleChange(e)} name="title" value={post.title}  type="text" placeholder="Title for the Blog" className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"/>
       </div>

       <div className="flex items-center mb-10">
         <label htmlFor="Textarea" className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Description</label>
         <textarea onChange={(e) => handleChange(e)} name="description" value={post.description} placeholder="Enter Description Here..........." className="border-none flex-1 py-3 placeholder-gray-300 outline-none"/>
       </div>

       <div className="text-right">
    <button onClick={() =>updateBlogPost()} className="col-start-11 col-end-13 rounded-lg px-8 py-3 bg-blue-500 text-blue-100 hover:bg-blue-800 duration-300">Update Blog</button>

         {/* <button className="py-3 px-8 bg-green-500 text-green-100 font-bold rounded">Submit</button> */}
       </div>
     </form>
   </div>

</div>
    </>
  )
}

export default updatePost;