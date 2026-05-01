import React from 'react'
import HeroSection from '../../components/Product/HeroSection'
import Navbar from '../Home/Navbar'
import MentorPreview from '../../components/Product/MentorPreview'
import LongTermPrograms from '../../components/Product/LongTermPrograms'
import InstantMentorship from '../../components/Product/InstantMentorship'

const ProductsPage =()=> {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <InstantMentorship/>
       <MentorPreview/>
       <LongTermPrograms/>
       
    </div>
  )
}

export default ProductsPage
