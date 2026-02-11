import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../STORE/FEATURES/SearchSlice'
import WishlistIcon from './WishlistIcon';
const Button = () => {
    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>state.search.activeTab)

    function Active(elem){
      dispatch(setActiveTab(elem)) ; 
    }

    function WishClick(){
      console.log("clicked")
    }
    


    const btns = ["Pics","Videos","GIF"];
  return (
    <div className=' flex justify-between items-center px-8'>
      <WishlistIcon />
      <div>
        {btns.map(function(item,index){
            return <button key={index} onClick={()=>Active(item)} className={`${(activeTab == item ? "bg-white text-black shadow-[0_0_10px_rgba(255,255,255,0.5)]": "bg-transparent text-white border border-gray-600 hover:border-white hover:bg-gray-900" )} font-bold px-5 py-2 m-2 rounded-[7px] outline-none cursor-pointer`}  >{item}</button>
        })}
      </div>
    </div>
  )
}

export default Button
