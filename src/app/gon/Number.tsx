"use client"

import { useZustandDarkTheme as useDarkTheme } from "../../shared/store/zustand-theme-store";

export function Number({ number }: { number: number }) {
    const { isDarkTheme } = useDarkTheme();
    return <span className={isDarkTheme ? 'text-white bg-black' : 'text-black bg-white'}>{number}</span>
}