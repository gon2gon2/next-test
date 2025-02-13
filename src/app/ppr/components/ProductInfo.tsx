import Image from 'next/image'

async function getProductInfo() {
    // 실제로는 데이터베이스나 API에서 가져올 것입니다
    await new Promise(resolve => setTimeout(resolve, 2000)) // 로딩 시뮬레이션
    return {
        name: '최신 스마트폰',
        price: 1_000_000,
        description: '혁신적인 기능을 탑재한 최신형 스마트폰입니다.',
        specs: ['6.7인치 디스플레이', '256GB 저장공간', '5G 지원'],
        imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop'
    }
}

export async function ProductInfo() {
    const product = await getProductInfo()

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
            <div className="relative w-full h-64 mb-4">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />
            </div>
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-xl text-blue-600 mb-4">{product.price.toLocaleString()}원</p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <ul className="list-disc list-inside text-gray-700">
                {product.specs.map((spec, index) => (
                    <li key={index}>{spec}</li>
                ))}
            </ul>
        </div>
    )
} 