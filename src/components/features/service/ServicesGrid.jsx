// components/ServicesGrid.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import services from '../../../data/ServicesData'

const buildServiceBlocks = (services) => {
    const blocks = []

    services.forEach((service, index) => {
        if (index === 0) {
            blocks.push({
                type: 'image',
                imageSrc: service.image,
                colSpan: 'lg:col-span-2',
            })
            blocks.push({
                type: 'text',
                ...service,
                colSpan: 'lg:col-span-1',
                bgColor: 'bg-[var(--color-surface)]',
                textColor: 'text-[var(--color-dark)]',
            })
        } else if (index === 1 || index === 2) {
            blocks.push({
                type: 'image',
                imageSrc: service.image,
                colSpan: 'lg:col-span-1',
            })
            blocks.push({
                type: 'text',
                ...service,
                colSpan: 'lg:col-span-1',
                bgColor: 'bg-[var(--color-primary)]',
                textColor: 'text-white',
            })
        } else if (index === 3 || index === 4) {
            blocks.push({
                type: 'image',
                imageSrc: service.image,
                colSpan: 'lg:col-span-1',
            })
            blocks.push({
                type: 'text',
                ...service,
                colSpan: 'lg:col-span-1',
                bgColor: 'bg-secondary',
                textColor: 'text-white',
            })
        } else if (index === 5) {
            blocks.push({
                type: 'text',
                ...service,
                colSpan: 'lg:col-span-1',
                bgColor: 'bg-[var(--color-surface)]',
                textColor: 'text-[var(--color-dark)]',
            })
            blocks.push({
                type: 'image',
                imageSrc: service.image,
                colSpan: 'lg:col-span-2',
            })
        }
    })

    return blocks
}

const ServicesGrid = () => {
    const serviceBlocks = buildServiceBlocks(services)

    return (
        <div className="bg-[var(--color-background)]">
            <div className="bg-secondary uppercase py-12 text-center text-white text-2xl font-semibold px-4">
                Cutting-edge services for the industry
            </div>

            <div className="px-0 grid grid-cols-1 lg:grid-cols-3 gap-0">
                {serviceBlocks.map((block, index) => (
                    <div
                        key={index}
                        className={`relative w-full h-[400px] flex items-center justify-center p-0 ${block.bgColor || ''} ${block.colSpan || ''}`}
                    >
                        {block.type === 'image' && (
                            <img
                                src={block.imageSrc || '/placeholder.svg'}
                                alt={block.title || 'Service image'}
                                className="w-full h-full object-cover"
                            />
                        )}
                        {block.type === 'text' && (
                            <div
                                className={`flex p-8 flex-col items-start text-left ${block.textColor || ''} max-w-md`}
                            >
                                <h3 className="text-4xl font-bold leading-tight mb-4">
                                    {block.title}
                                </h3>
                                <p className="text-base leading-relaxed mb-6">{block.description}</p>
                                {block.slug && (
                                    <Link
                                        to={`/services/${block.slug}`}
                                        className={`px-6 py-3 rounded-sm font-semibold border-2 ${block.textColor === 'text-white'
                                                ? 'border-white text-white hover:bg-white hover:text-[var(--color-primary)]'
                                                : 'border-secondary text-secondary hover:bg-secondary hover:text-white'
                                            } transition ease-snappy`}
                                    >
                                    Learn More
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServicesGrid
