import NewsBanner from '@/components/features/news/NewsBanner'
import NewsListing from '@/components/features/news/NewsListing'
import React from 'react'

const NewsPage = () => {
    return (
        <div>
            <NewsBanner />
            <NewsListing/>
        </div>
    )
}

export default NewsPage