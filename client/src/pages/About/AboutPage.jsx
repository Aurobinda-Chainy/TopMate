import React from 'react'
import HeroSection from '../../components/About/HeroSection'
import FeaturesSection from '../../components/About/FeaturesSection'
import HowItWorks from '../../components/About/HowItWorks'
import WhyDifferent from '../../components/About/WhyDifferent'
import Testimonials from '../../components/About/Testimonials'
import PricingSection from '../../components/About/PricingSection'
import CTASection from '../../components/About/CTASection'
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
