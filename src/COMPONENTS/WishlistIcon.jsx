import React, { useState } from 'react'
import { HeartPlus } from 'lucide-react';
import { useSelector } from 'react-redux';
import { BookmarkX } from 'lucide-react';
import Card from './Card';
const WishlistIcon = () => {
    const {likeResult} = useSelector((store)=>store.like); 
    const [Show, setShow] = useState(false)
    function Wishclicks(){
        console.log("key click")
        setShow(true)
    }
  return (
    <div>
      <HeartPlus onClick={Wishclicks} size={35} strokeWidth={2.5} className='cursor-pointer' />
      {Show && (
        <div className='fixed inset-0 bg-black z-50 overflow-y-auto p-10'>
            <div className='flex justify-between'>
              <span className='font-bold text-3xl '>LIKED CARDS <span className='text-amber-400'>{likeResult.length}</span></span>
            <BookmarkX className='cursor-pointer' size={40} strokeWidth={2.5} onClick={()=>setShow(false)}/>
            </div>
            <div className='flex flex-wrap m-3 items-center justify-center'>
              {likeResult.map((data)=>{
              return <Card key={data.Id} data={data}/>
              })}
            </div>
        </div>
      )}
    </div>
  )
}

export default WishlistIcon
