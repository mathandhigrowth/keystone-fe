import React from 'react'
import { Link } from 'react-router-dom'

const ContactBanner = () => {
    return (
        <div className="h-[384px] relative overflow-hidden">
            <img
                alt="Industrial factory interior with pipes and machinery"
                className="absolute inset-0 object-cover w-full h-full"
                src="https://industrie.peacefulqode.co.in/wp-content/uploads/2020/09/pf-6-1140x549.jpg"
                priority
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex flex-col justify-center h-full container">
                <h1 className="text-white text-7xl font-bold mb-4">Get In Touch</h1>
                {/* <p className="text-white max-w-2xl text-base md:text-lg mb-6">
                    Ready to start a project or have questions about our solutions? Contact Keystone’s expert team for prompt and professional support.
                </p> */}

                <div className="flex items-center space-x-2 text-white text-base">
                    <span className="font-medium">
                        <Link to="/">Home</Link>
                    </span>
                    <span className="text-[var(--color-secondary)] font-black">-</span>
                    <span>
                        Contact
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ContactBanner
