import ServiceDetailsSection from '@/components/features/serviceDetails/ServiceDetailsSection'
import ServiceLayout from '@/components/features/serviceDetails/ServiceLayout'
import ServicesDetailsBanner from '@/components/features/serviceDetails/ServicesDetailsBanner'
import services from '@/data/ServicesData'
import React from 'react'
import { useParams } from 'react-router-dom'

const ServiceDetailsPage = () => {
    const { slug } = useParams()
    const service = services.find((s) => s.slug === slug)

    if (!service) return <p>Service not found</p>
    return (
        <div>
            <ServicesDetailsBanner service={service} />
            <ServiceLayout currentService={slug}>
                <ServiceDetailsSection service={service} />
            </ServiceLayout>
        </div>
    )
}

export default ServiceDetailsPage
