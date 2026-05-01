import React from 'react'
import HeroSection from '../../components/Product/HeroSection'
import Navbar from '../Home/Navbar'
import MentorPreview from '../../components/Product/MentorPreview'
import LongTermPrograms from '../../components/Product/LongTermPrograms'
import InstantMentorship from '../../components/Product/InstantMentorship'
import Footer from '../Footer/Footer'

const ProductsPage =()=> {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <InstantMentorship/>
       <MentorPreview/>
       <LongTermPrograms/>
       <Footer/>
    </div>
  )
}

export default ProductsPage
