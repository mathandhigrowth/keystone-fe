import AboutOurIndustrySection from '@/components/features/about/AboutOurIndustrySection'
import AboutUsBanner from '@/components/features/about/AboutUsBanner'
import AboutUsSection from '@/components/features/about/AboutUsSection'
import WhatWeOfferSection from '@/components/features/about/WhatWeOfferSection'
import OurExpertise from '@/components/features/home/OurExpertise'
import React from 'react'

const AboutPage = () => {
    return (
        <div>
            <AboutUsBanner />
            <AboutUsSection />
            <AboutOurIndustrySection />
            <WhatWeOfferSection />
            {/* <OurExpertise /> */}
        </div>
    )
}

export default AboutPage
