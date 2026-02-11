import React from 'react'
import SEARCHBAR from './COMPONENTS/SEARCHBAR'
import Button from './COMPONENTS/Button'
import ResultGrid from './COMPONENTS/ResultGrid'


const App = () => {
  
  return (
    <div className='text-amber-50 bg-black min-h-screen'>
      <SEARCHBAR/>
      <Button/>
      <ResultGrid/>
    </div>
  )
}

export default App