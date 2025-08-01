import ContactBanner from '@/components/features/contact/ContactBanner'
import ContactSection from '@/components/features/contact/ContactSection'
import HelpCenterSection from '@/components/features/contact/HelpCenterSection'
import React from 'react'

const ContactPage = () => {
    return (
        <div>
            <ContactBanner />
            <ContactSection />
            <HelpCenterSection />
        </div>
    )
}

export default ContactPage
