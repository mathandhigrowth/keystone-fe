import { servicesBannerImage } from '@/assets/images'
import React from 'react'
import { Link } from 'react-router-dom'

const NewsBanner = () => {
    return (
        <div className="h-[384px] relative overflow-hidden">
            <img
                alt="Industrial factory interior with pipes and machinery"
                className="absolute inset-0 object-cover w-full h-full"
                src={servicesBannerImage}
                priority
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex flex-col justify-center h-full container">
                <h1 className="text-white text-7xl font-bold mb-4">
                    Explore Our News
                </h1>
                <div className="flex items-center space-x-2 text-white text-base">
                    <span className="font-medium">
                        <Link to="/">Home</Link>
                    </span>
                    <span className="text-[var(--color-secondary)] font-black">-</span>
                    <span>
                        News
                    </span>
                </div>
            </div>
        </div>)
}

export default NewsBanner