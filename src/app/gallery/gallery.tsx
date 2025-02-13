'use client'

import { useState } from 'react'

export default function Gallery() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      {count}
      </div>
  )
}