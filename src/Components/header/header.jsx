import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const header = () => {
    const [isMenu, setIsMenu] = useState("hidden")
    const openMenu = () =>{
       if(isMenu === ""){
        setIsMenu("hidden")
       }
       else{
        setIsMenu("")
       }
    }
  return (
    <>
     <nav className="flex flex-wrap z-10 fixed w-screen h-20 items-center justify-end md:justify-center p-5 bg-slate-700">  

     <div onClick={openMenu} className="flex md:hidden">
        <button id="hamburger">
          <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
          <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
        </button>
      </div>      
          
      <div className={`toggle ${isMenu} w-full md:w-auto font-semibold md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-slate-900 md:border-none`}>        
        <Link to="/" className="block md:inline-block text-slate-300 hover:text-slate-500 px-3 py-3 border-b-2 border-slate-300 md:border-none">Home</Link>
        <Link to="/about" className="block md:inline-block text-slate-300 hover:text-slate-500 px-3 py-3 border-b-2 border-slate-300 md:border-none">About</Link>
        <Link to="/contact" className="block md:inline-block text-slate-300 hover:text-slate-500 px-3 py-3 border-b-2 border-slate-300 md:border-none">Contact</Link>
        <Link to="/login" className="block md:inline-block text-slate-300 hover:text-slate-500 px-3 py-3 border-b-2 border-slate-300 md:border-none">Logout</Link>
      </div>      
    </nav>  
    
    </>
  )
}

export default header;


