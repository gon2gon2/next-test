import { Suspense } from 'react'
import { Cart } from './components/Cart'
import { ProductInfo } from './components/ProductInfo'
import { Recommended } from './components/Recommended'
import Navbar from './components/NavBar'

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <Cart />

            <main className="container mx-auto py-8 px-4">
                <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
                    <ProductInfo />
                </Suspense>

                <Suspense fallback={<div className="animate-pulse bg-gray-200 h-64 mt-8 rounded-lg"></div>}>
                    <Recommended />
                </Suspense>
            </main>
        </div>
    );
}

