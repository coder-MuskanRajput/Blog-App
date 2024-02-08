import React, { useEffect, useState ,useContext } from 'react' 
 
import {Link, useParams , useNavigate} from "react-router-dom" 
 
import {API} from "../../Service/api"; 
import { DataContext } from '../../Context/DataProvider'; 


import Comments from './comments/Comments';


import './Style.css' 
 
const DetailView = () => { 
   
  const [post, setPost] = useState({}); 
  const { id } = useParams(); 
  const {account} = useContext(DataContext); 
  const [isImageAvailable, setIsImageAvailable] = useState(true) 
  const navigate = useNavigate();
  const [isUserTrue, setIsUserTrue] = useState(false)

  const url = post.picture ? post.picture :"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" 
  useEffect(()=>{ 
       const fetchData = async ()=>{ 
        let response = await API.getPostById(id); 
        if(response.isSuccess){ 
         setPost(response.data); 

          if(account.username === response.data.username){
           setIsUserTrue(true);
            console.log(isUserTrue)
        }
        // console.log(account)
          if(post.picture == '' && !post.picture){ 
            setIsImageAvailable(false) 
          }  
        } 
       } 
       fetchData() 
  }, []) 
 
  // delete button animation 
  const [isSuccessTrue, setIsSuccessTrue] = useState(false)

  useEffect(() => { 
    // Ensure that DeleteButton class is defined 
    class DeleteButton { 
      isRunning = false; 
 
      constructor(el) { 
        this.el = document.querySelector(el); 
        this.init(); 
      } 
 
      init() { 
        // Attach event listener on button click 
        this.el?.addEventListener("click", this.delete.bind(this)); 
 
        const resetTrigger = this.el?.querySelector("[data-anim]"); 
        resetTrigger?.addEventListener("animationend", this.reset.bind(this)); 
      } 
 
      delete() { 
        this.isRunning = true; 
        this.displayState(); 
      } 
 
      displayState() { 
        this.el.disabled = this.isRunning; 
        this.el.setAttribute("data-running", this.isRunning); 
      } 
 
      reset() { 
        this.isRunning = false; 
        this.displayState(); 
        
          navigate("/") 
        
      
        
      } 
    } 
 
    // Create an instance of DeleteButton class when the component mounts 
    const deleteButtonInstance = new DeleteButton(".delBtn"); 
 
    // Cleanup by removing the event listener when the component unmounts 
    return () => { 
      const buttonElement = document.querySelector(".delBtn"); 
      buttonElement?.removeEventListener("click", deleteButtonInstance.delete); 
    }; 
  }, []); 
 
  const deleteHandler = async () => { 
    // Handle delete button click 
    let response  = await API.deletePost(post._id);
    if(response.isSuccess){
      setIsSuccessTrue(true)
    }
  console.log("Button clicked!"); 
  }; 
 
  return ( 
    <> 

<div className='w-full h-full flex flex-col bg-slate-100 p-2 pt-[12vh] gap-3 items-center'> 
   
  <div className='text-gray-600 text-sm flex items-center justify-between w-full'><span>Author :<span className='font-bold'> {post.username}</span> , { new Date(post.createdDate).toDateString()}</span> <span>Category : {post.categories}</span></div> 
  <span className='text-3xl w-full'>{post.title}</span> 
  <div className='w-full md:w-[80%] h-[45vh] flex flex-col items-center justify-center bg-gray-200 gap-2'> 
  <img className='min-h-[80%] h-full' src={isImageAvailable ? post.picture:'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' } alt="here is image of post" /> 
  
   <div className={`flex gap-2 ${isUserTrue ? "" : "hidden"}`}> 
  <button onClick={()=>{deleteHandler()}} className={`delBtn bg-red-700`} type="button" aria-label="Delete"> 
  <svg className="delBtnIcon" viewBox="0 0 48 48" width="48px" height="48px" aria-hidden="true"> 
    <clipPath id="canClip"> 
      <rect className="delBtnIconCanFill" x="5" y="24" width="14" height="11" /> 
    </clipPath> 
    <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(12,12)"> 
      <g className="delBtnIconLid"> 
        <polyline points="9,5 9,1 15,1 15,5" /> 
        <polyline points="4,5 20,5" /> 
      </g> 
      <g className="delBtnIconCan"> 
        <g strokeWidth="0"> 
          <polyline id="canFill" points="6,10 7,23 17,23 18,10" /> 
          <use clipPath="url(#canClip)" href="#canFill" fill="#fff" /> 
        </g> 
        <polyline points="6,10 7,23 17,23 18,10" /> 
      </g> 
    </g> 
  </svg> 
  <span className="delBtnLetters" aria-hidden="true" data-anim> 
    <span className="delBtnLetterBox"> 
      <span className="delBtnLetter">D</span> 
    </span> 
    <span className="delBtnLetterBox"> 
      <span className="delBtnLetter">e</span> 
    </span> 
    <span className="delBtnLetterBox"> 
      <span className="delBtnLetter">l</span> 
    </span> 
    <span className="delBtnLetterBox"> 
      <span className="delBtnLetter">e</span> 
    </span> 
    <span className="delBtnLetterBox"> 
      <span className="delBtnLetter">t</span> 
    </span> 
    <span className="delBtnLetterBox"> 
      <span className="delBtnLetter">e</span> 
    </span> 
  </span> 
   </button> 
  <Link to={`/update/${post._id}`} className='flex gap-1 px-5 hover:bg-blue-500 active:scale-95 bg-blue-700 w-fit text-white min-w-[120px] items-center justify-center h-[48px] rounded-md'> 
<svg className='text-sm h-[70%] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="currentColor"><path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path></svg> 
Edit 
  </Link>
  </div>
  </div> 
  <p className='text-base'>{post.description}</p> 
  <Comments post={post}/>
</div> 
    </> 
  ) 
} 
 
export default DetailView ;