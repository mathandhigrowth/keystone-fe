import React from 'react'
import { Link, Links } from 'react-router-dom'

const BlogDetailsBanner = ({ blog }) => {

    const { title, bannerImg, thumbnailImage } = blog

    return (
        <div className="h-[384px] relative overflow-hidden">
            <img
                alt="Industrial factory interior with pipes and machinery"
                className="absolute inset-0 object-cover w-full h-full"
                src={bannerImg || thumbnailImage}
                priority
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex flex-col justify-center h-full container">
                <h1 className="text-white text-4xl md:text-7xl font-bold mb-4">
                    {title.length > 50 ? `${title.slice(0, 50)}...` : title}
                </h1>
                <div className="flex items-center space-x-2 text-white text-base">
                    <span className="font-medium">
                        <Link to="/">Home</Link>
                    </span>
                    <span className="text-[var(--color-secondary)] font-black">-</span>
                    <Link to="/blog">
                        Blog
                    </Link>
                    <span className="text-[var(--color-secondary)] font-black">-</span>
                    <span className='line-clamp-1'>
                        {title}
                    </span>
                </div>
            </div>
            
        </div>
    )
}

export default BlogDetailsBanner
