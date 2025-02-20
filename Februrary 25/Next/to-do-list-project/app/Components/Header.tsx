'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();

    return (
        <div className="bg-blue-900 text-gray-100 p-8 text-center text-4xl font-sans shadow-md">
            <h1>Welcome to My Website</h1>
            <p className="text-xl mt-2">Explore and enjoy your experience</p>
            <div className="mt-6">
                <button
                    className="bg-blue-500 text-white py-2 px-6 mx-2 rounded-md text-lg hover:bg-blue-400 transition-colors"
                    onClick={() => router.push('/')}
                >
                    Home
                </button>
                <button
                    className="bg-blue-500 text-white py-2 px-6 mx-2 rounded-md text-lg hover:bg-blue-400 transition-colors"
                    onClick={() => router.push('/addMission')}
                >
                    Add
                </button>
                <button
                    className="bg-blue-500 text-white py-2 px-6 mx-2 rounded-md text-lg hover:bg-blue-400 transition-colors"
                    onClick={() => router.push('/list')}
                >
                    List
                </button>
            </div>
        </div>
    );
};

export default Header;
