import ContactBanner from '@/components/features/contact/ContactBanner'
import ContactDetails from '@/components/features/contact/ContactDetails'
import ContactSection from '@/components/features/contact/ContactSection'
import React from 'react'

const ContactPage = () => {
    return (
        <div>
            <ContactBanner />
            <ContactSection />
            <ContactDetails />
        </div>
    )
}

export default ContactPage
