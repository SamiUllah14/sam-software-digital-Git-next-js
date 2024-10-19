import HeroSectionNavBar from '@/app/components/HeroSection/HeroSectionNavBar';
import React from 'react';
import TestimonialsComponent from '../TestimonialItem';

const Page = () => {
    const testimonialsData = [
        {
            name: 'Alice Johnson',
            role: 'Marketing Specialist at NewYorkSoftwares',
            imgSrc: 'https://randomuser.me/api/portraits/women/52.jpg', // New image
            quote: 'Marketing is not just about selling; it’s about understanding our customers.',
            title: 'Strategic Marketing Insights',
            description: 'Expert in developing campaigns that resonate with target audiences.',
            bgColor: 'bg-purple-100',
            link: '/marketing-strategies',
        },
        {
            name: 'Robert Smith',
            role: 'SEO Expert at NewYorkSoftwares',
            imgSrc: 'https://randomuser.me/api/portraits/men/53.jpg', // New image
            quote: 'Search engine optimization is crucial for our online visibility.',
            title: 'Enhanced Online Presence',
            description: 'Specializing in strategies to boost search rankings and drive traffic.',
            bgColor: 'bg-blue-100',
            link: '/seo-services',
        },
        {
            name: 'Maria Garcia',
            role: 'Content Strategist at NewYorkSoftwares',
            imgSrc: 'https://randomuser.me/api/portraits/women/54.jpg', // New image
            quote: 'Great content can build lasting relationships with customers.',
            title: 'Compelling Content Creation',
            description: 'Focused on crafting content that informs and engages users.',
            bgColor: 'bg-green-100',
            link: '/content-strategy',
        },
        {
            name: 'David Lee',
            role: 'Social Media Manager at NewYorkSoftwares',
            imgSrc: 'https://randomuser.me/api/portraits/men/55.jpg', // New image
            quote: 'Social media is where our brand connects with its audience.',
            title: 'Engaging Social Media Campaigns',
            description: 'Expert in creating content that sparks conversation and engagement.',
            bgColor: 'bg-yellow-100',
            link: '/social-media-marketing',
        },
        {
            name: 'Laura Brown',
            role: 'Brand Manager at NewYorkSoftwares',
            imgSrc: 'https://randomuser.me/api/portraits/women/56.jpg', // New image
            quote: 'A strong brand is the foundation of our marketing success.',
            title: 'Building Brand Loyalty',
            description: 'Expertise in developing strategies that resonate with our audience.',
            bgColor: 'bg-red-100',
            link: '/brand-strategy',
        },
        {
            name: 'Michael White',
            role: 'Data Analyst at NewYorkSoftwares',
            imgSrc: 'https://randomuser.me/api/portraits/men/57.jpg', // New image
            quote: 'Data-driven decisions are key to effective marketing.',
            title: 'Data Analytics for Marketing',
            description: 'Specializing in analyzing data to inform marketing strategies.',
            bgColor: 'bg-orange-100',
            link: '/data-analytics',
        },
    ];

    return (
        <>
            <div className='bg-[#F0EC74]'>
                <HeroSectionNavBar />
            </div>

            <TestimonialsComponent
                title="Meet Our Marketing Team"
                subtitle="Creative Minds Driving Business Growth"
                testimonials={testimonialsData}
            />
        </>
    );
}

export default Page;
