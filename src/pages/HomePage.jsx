import DigitalSolutionsSection from '@/components/features/home/DigitalSolutionsSection'
import HomeHero from '@/components/features/home/HomeHero'
import HomeServicesSection from '@/components/features/home/HomeServicesSection'
import LatestBlog from '@/components/features/home/LatestBlog'
import MarqueeLogos from '@/components/features/home/MarqueeLogos'
import NewsletterSection from '@/components/features/home/NewsletterSection'
import OurExpertise from '@/components/features/home/OurExpertise'
import SupportGrid from '@/components/features/home/SupportGrid'
import WhyChooseKeystone from '@/components/features/home/WhyChooseKeystone'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <HomeHero />
      <>
        <DigitalSolutionsSection />
        <SupportGrid />
        {/* <OurExpertise /> */}
        
        <WhyChooseKeystone />
        <MarqueeLogos />
        <NewsletterSection />
        <LatestBlog />
      </>
    </div>
  )
}

export default HomePage
