import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'

const Services = () => {

    const servicesData = [
        {
            title: 'Website Development',
            description: 'We design and develop modern, responsive websites that help businesses establish a strong online presence and connect with customers.',
            icon: assets.ads_icon
        },
        {
            title: 'Software Development',
            description: 'We build custom software solutions, web applications, and management systems that automate processes and improve business efficiency.',
            icon: assets.marketing_icon
        },
        {
            title: 'IT Support & Consultancy',
            description: 'We provide professional IT support, system troubleshooting, technology consulting, and maintenance services to keep your business running smoothly.',
            icon: assets.content_icon,
        },
        {
            title: 'CCTV & Security Solutions',
            description: 'We provide CCTV installation, electric fence solutions, access control systems, and security technologies to protect your home and business.',
            icon: assets.social_icon,
        },
        {
            title: 'Networking & Infrastructure',
            description: 'We design and install secure computer networks, Wi-Fi solutions, office infrastructure, and communication systems for organizations.',
            icon: assets.networking_icon,
        },
        {
            title: 'Digital Marketing & Branding',
            description: 'We help businesses grow online through social media management, digital marketing strategies, branding, and creative content solutions.',
            icon: assets.digital_icon,
        },
    ]

    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            
            id='services' 
            className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
        >
            
            <img 
                src={assets.bgImage2} 
                alt="" 
                className='absolute -top-110 -left-70 -z-1 dark:hidden'
            />

            <Title 
                title='How Can We Help?' 
                desc='From strategy to execution, BOK TECH SOLUTIONS delivers innovative digital solutions that help businesses grow, improve productivity, and secure their operations.'
            />

            <div className='flex flex-col md:grid grid-cols-2 gap-6'>
                {servicesData.map((service, index) => (
                    <ServiceCard 
                        key={index} 
                        service={service} 
                        index={index}
                    />
                ))}
            </div>

        </motion.div>
    )
}

export default Services