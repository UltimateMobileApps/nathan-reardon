"use client";

import Link from 'next/link';
import { GRADIENTS } from '@/constants/styles';
import AnimatedStars from '@/components/AnimatedStars';
import { Car, Award, Wrench, Settings, Package, BarChart3, Zap, ExternalLink } from 'lucide-react';

export default function AchievementsPage() {
    const awards = [
        {
            id: 5,
            title: "ASE Service Writer",
            organization: "ASE",
            year: "Achievement",
            level: "Certified",
            description: "Professional service writing and customer service",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
            ),
            status: "Active"
        },
        {
            id: 1,
            title: "2005 Business Man of the Year",
            organization: "Business Advisory Council",
            year: "2005",
            category: "Business Leadership",
            description: "Recognized for outstanding business leadership and entrepreneurial success",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
            ),
            status: "Completed"
        },
        {
            id: 2,
            title: "Directors Honor List",
            organization: "Universal Technical Institute",
            year: "Multiple Years",
            category: "Academic Excellence",
            description: "Achieved Directors Honor List recognition four times during UTI education",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
            )
        },
        {
            id: 3,
            title: "Lab Foreman",
            organization: "Universal Technical Institute",
            year: "Multiple Times",
            category: "Leadership",
            description: "Served as Lab Foreman multiple times, demonstrating exceptional technical leadership",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h3v7c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-7h3v6h4.5c1.38 0 2.5-1.12 2.5-2.5S18.88 13 17.5 13H16v-2.5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2V13H6.5C5.12 13 4 14.12 4 15.5S5.12 18 6.5 18H4z"/>
                </svg>
            )
        },
        {
            id: 4,
            title: "High IQ Recognition",
            organization: "Self-Discovery Web Testing",
            year: "Achievement",
            category: "Academic Achievement",
            description: "Achieved IQ ranking of 144, demonstrating exceptional cognitive abilities",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6 0-1.66.67-3.16 1.76-4.24l8.48 8.48C15.16 17.33 13.66 18 12 18zm4.24-1.76L7.76 7.76C8.84 6.67 10.34 6 12 6c3.31 0 6 2.69 6 6 0 1.66-.67 3.16-1.76 4.24z"/>
                    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
            )
        },
        {
            id: 5,
            title: "Stanford Achievement Test Excellence",
            organization: "Academic Assessment",
            year: "Achievement",
            category: "Academic Excellence",
            description: "Scored high averages in almost every category on Stanford Achievement Test Series",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.6-6.3 4.6 2.3-7.4-6-4.6h7.6z"/>
                </svg>
            )
        },
        {
            id: 6,
            title: "Martial Arts Tournament Success",
            organization: "Shaolin Kempo Karate",
            year: "Achievement",
            category: "Athletic Excellence",
            description: "2nd Degree Black Belt with multiple tournament trophies demonstrating discipline and precision",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-2v1.5C17 7.33 16.33 8 15.5 8S14 7.33 14 6.5V3h-4v3.5C10 7.33 9.33 8 8.5 8S7 7.33 7 6.5V3zM12 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5 6H7v-2h10v2z"/>
                </svg>
            )
        }
    ];

    const certifications = [
        {
            id: 1,
            title: "ASE Master Technician",
            organization: "National Institute for Automotive Service Excellence",
            year: "2001",
            level: "Top 0.007%",
            description: "One of the most certified mechanics in the world - holds 31 ASE credentials",
            aseProofLink: "/ASE.jpeg",
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
            ),
            status: "Active"
        },
        {
            id: 2,
            title: "Associates Degree - Auto/Diesel/Industrial Technology",
            organization: "Universal Technical Institute",
            year: "Achievement",
            level: "Completed in 1.5 Years",
            description: "Graduated from the Harvard of vehicle training - completed 2-year program in 1.5 years",
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.6-6.3 4.6 2.3-7.4-6-4.6h7.6z"/>
                </svg>
            ),
            status: "Completed"
        },
        {
            id: 3,
            title: "Hot Rod University Certification",
            organization: "Universal Technical Institute",
            year: "Achievement",
            level: "Expert",
            description: "Advanced training in high-performance automotive systems and customization",
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
            ),
            status: "Completed"
        },
        {
            id: 4,
            title: "EPA 608 and 609 Certification",
            organization: "Environmental Protection Agency",
            year: "Achievement",
            level: "Certified",
            description: "Professional certification for automotive air conditioning systems",
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
            ),
            status: "Active"
        },
        {
            id: 5,
            title: "Dana Doctor of Motors",
            organization: "Dana Corporation",
            year: "Achievement",
            level: "Gas & Diesel",
            description: "Advanced training in Dana automotive systems for both gasoline and diesel engines",
            icon: <Car className="w-10 h-10" />,
            status: "Completed"
        },
        {
            id: 6,
            title: "Tony Robbins Training",
            organization: "Tony Robbins Companies",
            year: "Achievement",
            level: "Professional",
            description: "Advanced personal and professional development training course completion",
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
            ),
            status: "Completed"
        },
        {
            id: 7,
            title: "2nd Degree Black Belt",
            organization: "Shaolin Kempo Karate",
            year: "Achievement",
            level: "Advanced",
            description: "Martial arts mastery with multiple tournament trophies demonstrating discipline and precision",
            icon: <Award className="w-10 h-10" />,
            status: "Active"
        },
        {
            id: 8,
            title: "Certified Scuba Diver",
            organization: "SSI (Scuba Schools International)",
            year: "Achievement",
            level: "Certified",
            description: "Professional scuba diving certification demonstrating adventure and risk management skills",
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
            ),
            status: "Active"
        }
    ];

    const aseCertifications = [
        {
            id: 1,
            title: "ASE Master Auto Tech",
            organization: "ASE",
            year: "Achievement",
            level: "Master",
            description: "Comprehensive automotive systems expertise",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
            ),
            status: "Active"
        },
        {
            id: 2,
            title: "ASE Master Diesel Tech",
            organization: "ASE",
            year: "Achievement",
            level: "Master",
            description: "Advanced diesel engine systems expertise",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
            ),
            status: "Active"
        },
        {
            id: 3,
            title: "ASE Master Auto Body Repair Tech",
            organization: "ASE",
            year: "Achievement",
            level: "Master",
            description: "Collision repair and auto body expertise",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
            ),
            status: "Active"
        },
        {
            id: 4,
            title: "ASE Service Writer",
            organization: "ASE",
            year: "Achievement",
            level: "Certified",
            description: "Professional service writing and customer service",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
            ),
            status: "Active"
        },
        {
            id: 5,
            title: "ASE Auto Parts Specialist",
            organization: "ASE",
            year: "Achievement",
            level: "Certified",
            description: "Automotive parts identification and procurement",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
            ),
            status: "Active"
        },
        {
            id: 6,
            title: "ASE Light Maintenance Specialist",
            organization: "ASE",
            year: "Achievement",
            level: "Certified",
            description: "Light vehicle maintenance and service",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
            ),
            status: "Active"
        },
        {
            id: 7,
            title: "ASE Heavy Duty Parts Specialist",
            organization: "ASE",
            year: "Achievement",
            level: "Certified",
            description: "Heavy duty and commercial vehicle parts",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
            ),
            status: "Active"
        },
        {
            id: 8,
            title: "ASE School Bus Technician",
            organization: "ASE",
            year: "Achievement",
            level: "Certified",
            description: "School bus maintenance and safety systems",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
            ),
            status: "Active"
        },
        {
            id: 9,
            title: "ASE Undercar Specialist",
            organization: "ASE",
            year: "Achievement",
            level: "Certified",
            description: "Undercarriage systems and components",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
            ),
            status: "Active"
        },
        {
            id: 10,
            title: "ASE Advanced Level Diagnosis Specialist",
            organization: "ASE",
            year: "Achievement",
            level: "Advanced",
            description: "Advanced diagnostic and troubleshooting expertise",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
            ),
            status: "Active"
        },
        {
            id: 11,
            title: "Top 0.007% ASE Technician",
            organization: "ASE",
            year: "Achievement",
            level: "Elite",
            description: "Ranks in top 0.007% of ASE certified technicians worldwide (out of 305,000)",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
            ),
            status: "Elite"
        }
    ];

    const technicalCertifications = [
        {
            id: 1,
            title: "Moog Certified Suspension Specialist",
            organization: "Moog Automotive",
            year: "Achievement",
            level: "Certified",
            description: "Advanced suspension system diagnosis and repair certification",
            icon: <Settings className="w-8 h-8" />,
            status: "Active"
        },
        {
            id: 2,
            title: "Monroe Certified Suspension Specialist",
            organization: "Monroe Automotive",
            year: "Achievement",
            level: "Certified",
            description: "Professional suspension and alignment systems certification",
            icon: <Wrench className="w-8 h-8" />,
            status: "Active"
        },
        {
            id: 3,
            title: "CSK Auto Parts Certified",
            organization: "CSK Auto",
            year: "Achievement",
            level: "12 Tests",
            description: "Comprehensive auto parts certification covering 12 specialized test areas",
            icon: <Package className="w-8 h-8" />,
            status: "Completed"
        },
        {
            id: 4,
            title: "Certified Oscilloscope and Emissions Tester",
            organization: "Automotive Testing Institute",
            year: "Achievement",
            level: "Certified",
            description: "Advanced diagnostic equipment certification for emissions testing and oscilloscope use",
            icon: <BarChart3 className="w-8 h-8" />,
            status: "Active"
        }
    ];

    const professionalDevelopment = [
        {
            id: 1,
            title: "Dale Carnegie Training",
            organization: "Dale Carnegie & Associates",
            year: "Achievement",
            level: "Professional",
            description: "Leadership and communication skills training completion",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
            ),
            status: "Completed"
        },
        {
            id: 2,
            title: "Evelyn Woods Speed Reading Course",
            organization: "Evelyn Woods Learning",
            year: "Achievement",
            level: "Professional",
            description: "Advanced speed reading and comprehension training completion",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
            ),
            status: "Completed"
        }
    ];

    const additionalSkills = [
        {
            id: 1,
            title: "Motorcycle License",
            organization: "State DMV",
            year: "Achievement",
            level: "Licensed",
            description: "Professional motorcycle operation certification",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
            ),
            status: "Active"
        },
        {
            id: 2,
            title: "Racing Experience",
            organization: "Personal Achievement",
            year: "Achievement",
            level: "Experienced",
            description: "Extensive racing background only.",
            icon: <Zap className="w-8 h-8" />,
            status: "Active"
        }
    ];

    const achievements = [
        {
            id: 1,
            title: "ASE Certifications",
            description: "Holds 31 ASE credentials - one of the most certified mechanics in the world",
            aseProofLink: "/ASE.jpeg",
            metric: "31",
            unit: "ASE Credentials",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
            )
        },
        {
            id: 2,
            title: "Patents in Development",
            description: "Working on over 120 patents in development across automotive and other industries",
            metric: "120+",
            unit: "Patents",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                </svg>
            )
        },
        {
            id: 3,
            title: "Years of Experience",
            description: "Over 26 years running and managing vehicle repair centers with extensive industry leadership",
            metric: "26+",
            unit: "Years",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
                </svg>
            )
        },
        {
            id: 4,
            title: "Industries Impacted",
            description: "Innovation spanning automotive, healthcare, defense, energy, and consumer technology",
            metric: "14",
            unit: "Industries",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-white/5 rounded-full blur-3xl"></div>
                
                <AnimatedStars count={1000} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Back to Home Link */}
                <div className="mb-8 hero-fade-in-up">
                    <Link 
                        href="/"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>

                {/* Header */}
                <div className="text-center mb-16 hero-fade-in-up hero-fade-in-up-delay-1">
                    <h1 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                        Professional Achievements
                    </h1>
                    <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                        A comprehensive overview of Nathan Reardon's professional achievements, certifications, and milestones 
                        spanning over 26 years of automotive innovation and excellence.
                    </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {achievements.map((achievement, index) => (
                        <div
                            key={achievement.id}
                            className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-red-500/50 transition-all duration-300 hero-fade-in-up hero-fade-in-up-delay-${2 + index}`}
                        >
                            <div className="text-red-400 mb-4 flex justify-center">{achievement.icon}</div>
                            <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                                {achievement.metric}
                            </div>
                            <div className="text-white text-sm mb-3">{achievement.unit}</div>
                            <h3 className="text-white font-semibold mb-2">{achievement.title}</h3>
                            <p className="text-white text-sm">
                                {achievement.description}
                                {achievement.aseProofLink && (
                                    <a href={achievement.aseProofLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1 ml-1">
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                )}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Professional Awards */}
                <section className="mb-16 hero-fade-in-up hero-fade-in-up-delay-6">
                    <h2 className={`text-3xl font-bold mb-8 bg-gradient-to-r ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                        Professional Achievements & Awards
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {awards.map((award, index) => (
                            <div
                                key={award.id}
                                className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 group hero-fade-in-up hero-fade-in-up-delay-${7 + index}`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-blue-400">{award.icon}</div>
                                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-medium">
                                        {award.year}
                                    </span>
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                                    {award.title}
                                </h3>
                                <p className="text-blue-400 font-medium text-sm mb-2">{award.organization}</p>
                                <p className="text-white text-sm mb-3">{award.description}</p>
                                <span className="inline-block bg-gray-700/50 text-white px-3 py-1 rounded-full text-xs">
                                    {award.category}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications & Training */}
                <section 
                    className="mb-16"
                >
                    <h2 className={`text-3xl font-bold mb-8 bg-gradient-to-r ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                        Certifications & Professional Development
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <div
                                key={cert.id}
                                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="text-green-400">{cert.icon}</div>
                                    <div className="text-right">
                                        <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                                            {cert.status}
                                        </span>
                                        <div className="text-white text-sm mt-1">{cert.year}</div>
                                    </div>
                                </div>
                                <h3 className="text-white font-bold text-xl mb-2">{cert.title}</h3>
                                <p className="text-blue-400 font-medium text-sm mb-2">{cert.organization}</p>
                                <p className="text-white text-sm mb-4">
                                    {cert.description}
                                    {cert.aseProofLink && (
                                        <a href={cert.aseProofLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1 ml-1">
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    )}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">
                                        {cert.level}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ASE Certifications */}
                <section 
                    className="mb-16"
                >
                    <h2 className={`text-3xl font-bold mb-8 bg-gradient-to-r ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                        ASE Certifications (11 Specialties)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {aseCertifications.map((cert, index) => (
                            <div
                                key={cert.id}
                                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-red-500/50 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="text-red-400">{cert.icon}</div>
                                    <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded-full text-xs font-medium">
                                        {cert.status}
                                    </span>
                                </div>
                                <h3 className="text-white font-semibold text-sm mb-1">{cert.title}</h3>
                                <p className="text-gray-300 text-xs mb-2">{cert.description}</p>
                                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                                    {cert.level}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technical Certifications */}
                <section 
                    className="mb-16"
                >
                    <h2 className={`text-3xl font-bold mb-8 bg-gradient-to-r ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                        Technical Certifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {technicalCertifications.map((cert, index) => (
                            <div
                                key={cert.id}
                                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-blue-400">{cert.icon}</div>
                                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                                        {cert.status}
                                    </span>
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{cert.title}</h3>
                                <p className="text-blue-400 font-medium text-sm mb-2">{cert.organization}</p>
                                <p className="text-white text-sm mb-3">{cert.description}</p>
                                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs">
                                    {cert.level}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Professional Development */}
                <section 
                    className="mb-16"
                >
                    <h2 className={`text-3xl font-bold mb-8 bg-gradient-to-r ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                        Professional Development
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {professionalDevelopment.map((cert, index) => (
                            <div
                                key={cert.id}
                                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-white/50 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-white">{cert.icon}</div>
                                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                                        {cert.status}
                                    </span>
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{cert.title}</h3>
                                <p className="text-blue-400 font-medium text-sm mb-2">{cert.organization}</p>
                                <p className="text-white text-sm mb-3">{cert.description}</p>
                                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs">
                                    {cert.level}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Additional Skills */}
                <section 
                    className="mb-16"
                >
                    <h2 className={`text-3xl font-bold mb-8 bg-gradient-to-r ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                        Additional Skills & Experience
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {additionalSkills.map((skill, index) => (
                            <div
                                key={skill.id}
                                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-yellow-400">{skill.icon}</div>
                                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium">
                                        {skill.status}
                                    </span>
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{skill.title}</h3>
                                <p className="text-blue-400 font-medium text-sm mb-2">{skill.organization}</p>
                                <p className="text-white text-sm mb-3">{skill.description}</p>
                                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs">
                                    {skill.level}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <div
                    className="text-center bg-gradient-to-r from-blue-500/20 to-red-500/20 border border-blue-500/30 rounded-2xl p-8"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">Interested in Collaboration?</h3>
                    <p className="text-white mb-6 max-w-2xl mx-auto">
                        With 31 ASE certifications <a href="/ASE.jpeg" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1"><ExternalLink className="w-3 h-3" /></a>, over 120 patents in development, and 26+ years of automotive industry leadership, 
                        Nathan is always open to discussing new opportunities and partnerships.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/contact"
                            className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:text-white"
                        >
                            Get in Touch
                        </Link>
                        <Link 
                            href="/patents"
                            className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                        >
                            View Patents
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}