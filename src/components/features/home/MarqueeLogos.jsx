import React from 'react'
import { motion } from 'framer-motion';
import { adrollSVG, airtaskerSVG, bugherdSVG, circleciSVG, dellComputerSVG, staplesSVG } from '@/assets/svg';

const MarqueeLogos = () => {

    const logos = [adrollSVG, dellComputerSVG, staplesSVG, circleciSVG, airtaskerSVG];


    return (
        <section className='w-full py-[10px] bg-transparent overflow-hidden'>
            <div>
                <div className='relative w-full flex overflow-hidden'>
                    <motion.div
                        className='flex space-x-14'
                        animate={{ x: ['0%', '-20%'] }}
                        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                        style={{ display: 'flex', whiteSpace: 'nowrap' }}
                    >
                        {[...logos, ...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className='size-20 flex items-center justify-center'
                                style={{ flex: '0 0 auto' }}
                            >
                                <img
                                    src={logo}
                                    alt='Partner Logo'
                                    className='w-full grayscale-100 h-full object-contain'
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default MarqueeLogos

