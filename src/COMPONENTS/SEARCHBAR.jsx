import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../STORE/FEATURES/SearchSlice';
import { Images } from 'lucide-react';
import { LogIn } from 'lucide-react';
const SEARCHBAR = () => {

    const [text, setText] = useState("");
    const dispatch = useDispatch()

    const [Show, setShow] = useState(false)



    function fetchText(e){
        setText(e.target.value);
    }

    function submitForm(e){
        e.preventDefault();
        console.log("Form Submit")
        dispatch(setQuery(text))
        setText("")
    }

    
  return (
    <div className="">
      <nav className='flex justify-between items-center p-4 mb-4 font-bold text-2xl bg-gray-900'>
        <div className='flex '>
        <span>MEDIA SEARCH </span>
        <Images strokeWidth={2.5} size={35} />
        </div>
        
        <div onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} className='flex border border-gray-600 items-center px-3 py-2 rounded-xl cursor-pointer hover:border-white transition-all duration-300 active:scale-95 bg-gray-800'>
          <div className={`
              overflow-hidden transition-all duration-500 ease-in-out flex items-center
              ${Show ? "max-w-20 opacity-100 mr-2 translate-x-0" : "max-w-0 opacity-0 mr-0 translate-x-5"}
          `}>
             <span className='text-[16px] whitespace-nowrap font-medium'>Sign Up</span>
          </div>

          <LogIn strokeWidth={1.5} className="text-white" />
        </div>
      </nav>
      <form className='flex mx-2' onSubmit={(e)=>{submitForm(e)}} >
        <input required value={text} onChange={(e)=>{fetchText(e)}} className='border border-gray-500 rounded-[5px] px-4 py-2 mx-2 w-full ' type="text" placeholder='SEARCH ANYTHING... ' />
        <button className='border border-gray-400 rounded-[5px] active:scale-85 hover:border-amber-50 px-4 py-2 mx-2 '>SUBMIT</button>
      </form>
    </div>
  )
}

export default SEARCHBAR
