import React from 'react';
import { useParams } from 'react-router-dom';
import BlogDetailsBanner from '@/components/features/blogDetails/BlogDetailsBanner';
import BlogDetailsSection from '@/components/features/blogDetails/BlogDetailsSection';
import BlogData from '@/data/BlogData';

const BlogDetailsPage = () => {
    const { slug } = useParams();
    const blog = BlogData.find((item) => item.slug === slug);

    if (!blog) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-red-500">Blog post not found</h2>
            </div>
        );
    }

    return (
        <div>
            <BlogDetailsBanner blog={blog} />
            <BlogDetailsSection blog={blog} />
        </div>
    );
};

export default BlogDetailsPage;
