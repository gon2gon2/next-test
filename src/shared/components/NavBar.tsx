'use client'
import React from 'react';
import { useDarkTheme } from '../contexts/dark-theme-context';

export function NavBar() {
    const { isDarkTheme, toggleTheme } = useDarkTheme();

    return (
        <nav className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800">
            <div className="text-xl font-bold">MyApp</div>
            <button
                onClick={toggleTheme}
                className="px-3 py-1 bg-blue-500 text-white rounded"
            >
                {isDarkTheme ? '라이트 모드' : '다크 모드'}
            </button>
        </nav>
    );
} 