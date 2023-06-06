/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Searchbar from './Components/SearchDiv/Searchbar'
import Jobs from './Components/Jobs/Jobs'
import Value from './Components/ValueDiv/Value'
import Footer from './Components/FooterDiv/footer'



const App = () => {
  return (
    <div className='w-[85%]  m-auto bg-white'>
      <Navbar/>
      <Searchbar/>
      <Jobs/>
      <Value/>
      <Footer/>
    </div>
  )
}

export default App
