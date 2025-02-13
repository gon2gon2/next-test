import Image from 'next/image'

async function getRecommendedProducts() {
    await new Promise(resolve => setTimeout(resolve, 1500)) // 로딩 시뮬레이션
    const images = [
        'https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?q=80&w=800&auto=format&fit=crop',
    ]

    return Array(5).fill(null).map((_, i) => ({
        id: i + 1,
        name: `추천 상품 ${i + 1}`,
        price: Math.floor(Math.random() * 500000) + 500000,
        imageUrl: images[i]
    }))
}

export async function Recommended() {
    const products = await getRecommendedProducts()

    return (
        <div className="mt-8 w-full max-w-6xl mx-auto">
            <h3 className="text-xl font-bold mb-4">추천 상품</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {products.map(product => (
                    <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
                        <div className="relative w-full h-40 mb-2">
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                fill
                                className="rounded-lg object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 20vw"
                            />
                        </div>
                        <h4 className="font-semibold">{product.name}</h4>
                        <p className="text-blue-600">{product.price.toLocaleString()}원</p>
                    </div>
                ))}
            </div>
        </div>
    )
} 