import React from 'react'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import HowItWorks from './HowItWorks'
import WhyDifferent from './WhyDifferent'
import Testimonials from './Testimonials'
import PricingSection from './PricingSection'
import CTASection from './CTASection'
import Navbar from '../../pages/Home/Navbar'
import Footer from '../../pages/Footer/Footer'

function AboutPage() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <FeaturesSection/>
        <HowItWorks/>
        <WhyDifferent/>
        <Testimonials/>
        <PricingSection/>
        <CTASection/>
        <Footer/>
    </div>
  )
}

export default AboutPage
