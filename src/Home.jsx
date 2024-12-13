import React from 'react'
import Header from './Header'
import Carlogo from './assest/carlogo.png'
import Search from './Search'
const Home = () => {
  return (
    <div>
      <div className='h-[390px] flex flex-col  border-black text-center bg-slate-300'>
        <h2 className='text-xl mt-3'>Find Cars for sale  and for rent near you</h2>
        <h1 className='text-5xl font-bold mt-4'>Find Your Dream Car</h1>
        <Search/>
        <div className=''>
        <img className=' border-black m-auto h-[350px]' src={Carlogo} alt="car logo" />
      </div>
      </div>
     
       
    </div>
  )
}

export default Home
