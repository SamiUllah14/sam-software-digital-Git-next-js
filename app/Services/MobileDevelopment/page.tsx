import HeroSectionNavBar from '@/app/components/HeroSection/HeroSectionNavBar';
import React from 'react';
import TestimonialsComponent from '../TestimonialItem';

const Page = () => {
    const testimonialsData = [
        {
            name: 'Emily Chen',
            role: 'Flutter Developer at NewYorkSoftwares',
            imgSrc: 'https://randomuser.me/api/portraits/women/44.jpg', // Placeholder image
            quote: 'Flutter has transformed the way we build mobile apps. It allows for rapid development and beautiful UI.',
            title: 'Powerful Cross-Platform Development',
            description: 'Expert in building responsive and high-performance applications using Flutter.',
            bgColor: 'bg-purple-100',
            link: '/flutter-development',
        },
        {
            name: 'Daniel Smith',
            role: 'Native Android Developer at NewYorkSoftwares',
            imgSrc: 'https://randomuser.me/api/portraits/men/45.jpg', // Placeholder image
            quote: 'Working with native Android technologies allows us to tap into the full power of the platform.',
            title: 'Robust Native Apps',
            description: 'Specializing in creating efficient and scalable Android applications.',
            bgColor: 'bg-blue-100',
            link: '/android-development',
        },
        {
            name: 'Sofia Ramirez',
            role: 'UX/UI Designer at NewYorkSoftwares',
            imgSrc: 'https://randomuser.me/api/portraits/women/46.jpg', // Placeholder image
            quote: 'User experience is at the heart of what we do. Our designs resonate with users.',
            title: 'Intuitive User Experiences',
            description: 'Focused on crafting user-centric designs that enhance engagement.',
            bgColor: 'bg-green-100',
            link: '/ui-ux-design',
        },
        {
            name: 'Michael Johnson',
            role: 'iOS Developer at NewYorkSoftwares',
            imgSrc: 'https://randomuser.me/api/portraits/men/47.jpg', // Placeholder image
            quote: 'iOS development with Swift provides a powerful and seamless experience.',
            title: 'Elegant iOS Applications',
            description: 'Expert in developing high-quality iOS applications tailored to client needs.',
            bgColor: 'bg-yellow-100',
            link: '/ios-development',
        },
        {
            name: 'Olivia Lee',
            role: 'Mobile App Architect at NewYorkSoftwares',
            imgSrc: 'https://randomuser.me/api/portraits/women/48.jpg', // Placeholder image
            quote: 'Building scalable mobile architectures is essential for long-term success.',
            title: 'Strategic Mobile Solutions',
            description: 'Expertise in architecting mobile solutions that scale with your business.',
            bgColor: 'bg-red-100',
            link: '/mobile-architecture',
        },
        {
            name: 'James Brown',
            role: 'QA Engineer at NewYorkSoftwares',
            imgSrc: 'https://randomuser.me/api/portraits/men/49.jpg', // Placeholder image
            quote: 'Quality assurance ensures that our applications are bug-free and ready for launch.',
            title: 'Quality-Centric Approach',
            description: 'Specializing in testing mobile applications for optimal performance.',
            bgColor: 'bg-orange-100',
            link: '/quality-assurance',
        },
    ];

    return (
        <>
            <div className='bg-[#F0EC74]'>
                <HeroSectionNavBar />
            </div>

            <TestimonialsComponent
                title="Meet Our Mobile App Development Team"
                subtitle="Innovative Minds Crafting Cutting-Edge Mobile Solutions"
                testimonials={testimonialsData}
            />
        </>
    );
}

export default Page;
