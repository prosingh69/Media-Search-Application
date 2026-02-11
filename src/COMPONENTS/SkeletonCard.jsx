import React from 'react'

const SkeletonCard = () => {
  return (
    <div className='relative w-60 h-60 overflow-hidden m-3 rounded-xl cursor-pointer bg-white shadow-lg animate-pulse '>
      <div className='w-full h-full bg-white'></div>
    </div>
  )
}

export default SkeletonCard
