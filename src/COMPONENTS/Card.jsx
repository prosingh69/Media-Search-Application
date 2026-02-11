import { useState } from 'react'
import { Heart, Download } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setWishlist } from '../STORE/FEATURES/WishlistSlice';



const Card = ({ data,onCardClick }) => {
  const [Toggle, setToggle] = useState(false)
  const Result = useSelector((state)=>state.like.likeResult);
  const Likecolor = Result.some((item)=>item.Id === data.Id)
  
  const dispatch = useDispatch()

  const setThing = (e)=>{
    e.preventDefault()
    e.stopPropagation()
    dispatch(setWishlist(data))
  }
  

  return (
    <div onMouseEnter={()=>setToggle(true)} onMouseLeave={()=>setToggle(false)} className='relative w-60 h-60 overflow-hidden m-3 rounded-xl cursor-pointer bg-white shadow-lg '>
      <div className='w-full h-full' >
       {(data.Type === "Videos" || data.Type === "gif") ? <video className="w-full h-full object-cover object-center" src={data.Src} autoPlay loop muted playsInline></video>: ""}
       {data.Type === "Pics" ? <img  className='w-full h-full object-cover object-top' loading="lazy" src={data.Thumbnail} alt="" /> : ""}
      </div>
      {Toggle && (<div onClick={onCardClick} className='absolute inset-0 flex flex-col justify-between bg-black/60 text-center transition p-6 font-bold'>
      <div className='flex justify-between items-start'>
        <Heart className={`${Likecolor ? "fill-amber-600" : "fill-amber-50"} active:scale-80`} onClick={setThing} color={`${Likecolor ? "#E17100" : "#ffff"}`} size={22} strokeWidth={3.5} />
        <Download  size={22} strokeWidth={3.5} />
      </div>
      <div className='flex items-center text-center pb-5 justify-center'>
        <h1 >{data.Title}</h1>
      </div>
        </div>)}
    </div>
  )
}

export default Card