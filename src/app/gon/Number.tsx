"use client"

import { useDarkTheme } from "../../shared/contexts/dark-theme-context";

export function Number({ number }: { number: number }) {
    const { isDarkTheme } = useDarkTheme();
    return <span className={isDarkTheme ? 'text-white bg-black' : 'text-black bg-white'}>{number}</span>
}