import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="text-lg font-bold">MyApp</div>
            <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-gray-400">Home</a></li>
                <li><a href="/gallery" className="hover:text-gray-400">Gallery</a></li>
                <li><a href="/ppr" className="hover:text-gray-400">PPR Test</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
