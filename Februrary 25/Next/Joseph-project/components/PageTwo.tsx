import React, { useEffect, useState } from 'react';
import securityIcon from "../assets/encrypted.png";
import Image from 'next/image';

const PageTwo = () => {
    const [hoveredService, setHoveredService] = useState<number | null>(null);

    useEffect(() => {
        console.log(hoveredService);

    }, [])

    const services = [
        {
            id: 1,
            title: "תכנון אבטחה טכנולוגי",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 2,
            title: "ניתוח סיכונים ובניית",
            subtitle: "תוכנית אבטחה",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 3,
            title: "הרצאות והדרכות",
            subtitle: "לצוותי חירום",
            subtext: "(כיתות כוננות, צוות, רפואה, כיבוי)",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 4,
            title: "סדנאות מעשיות",
            subtitle: "להתנהגות תושבים",
            subtext: "ואימוני חירום במצבי חירום שונים",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 5,
            title: "כתיבת פק\"מ אבטחה",
            subtitle: "וניהול אבטחת אירועים",
            subtext: "תחת כיפת השמיים",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    const leftServices = [
        {
            id: 6,
            title: "כתיבת תיקי שטח",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 7,
            title: "ביצוע תרגילי תקיפה",
            subtitle: "לאתרים/יישובים",
            highlight: true,
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 8,
            title: "כתיבת תיקי נהלי",
            subtitle: "ביטחון וחירום",
            subtext: "לגופים/מוסדות",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 9,
            title: "מודיעין ומשימות",
            subtitle: "מיוחדות",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                <h1 className="text-5xl font-bold text-center mb-16 text-gray-800 tracking-tight">
                    שירותי המשרד
                </h1>

                <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                    {/* Main Services Section */}
                    <div className="w-full lg:w-1/3 space-y-6">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                className="group w-full bg-white hover:bg-blue-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-6 text-right relative overflow-hidden"
                                onMouseEnter={() => setHoveredService(service.id)}
                                onMouseLeave={() => setHoveredService(null)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-blue-200 group-hover:via-blue-100 group-hover:to-transparent transition-all duration-500" />
                                <div className="relative z-10">
                                    <div className="text-blue-600 transform group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-semibold text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    {service.subtitle && (
                                        <p className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
                                            {service.subtitle}
                                        </p>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Icon Section */}
                    <div className="w-full lg:w-1/3 flex justify-center items-center relative">
                        <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse" />
                        <Image
                            src={securityIcon.src}
                            alt="Security Icon"
                            className="w-72 h-72 transform transition-transform duration-500 hover:scale-110"
                            style={{ filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.2))' }}
                        />
                    </div>

                    {/* Left Services Section */}
                    <div className="w-full lg:w-1/3 space-y-6">
                        {leftServices.map((service) => (
                            <button
                                key={service.id}
                                className="group  justify-center w-full bg-white hover:bg-blue-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-6 text-right relative overflow-hidden"
                                onMouseEnter={() => setHoveredService(service.id)}
                                onMouseLeave={() => setHoveredService(null)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-blue-200 group-hover:via-blue-100 group-hover:to-transparent transition-all duration-500" />
                                <div className="relative z-10">
                                    <div className="text-blue-600 transform group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-semibold text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTwo;