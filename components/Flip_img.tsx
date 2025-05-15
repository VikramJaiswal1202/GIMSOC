'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Flip_img = () => {
    const [isFlipped, setIsFlipped] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFlipped(prev => !prev)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full flex justify-center">
            <div className="relative w-[500px] h-[300px] lg:w-[600px] lg:h-[400px] perspective">
                <div className={`flip-card w-full h-full ${isFlipped ? 'rotate-y-180' : ''}`}>
                    
                    {/* Front Image */}
                    <div className="absolute w-full h-full backface-hidden rounded-xl border-2 border-black overflow-hidden">
                        <Image
                            src="/team.jpeg"
                            alt="Front"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Back Image */}
                    <div className="absolute w-full h-full rotate-y-180 backface-hidden rounded-xl border-2 border-black overflow-hidden">
                        <Image
                            src="/gimsoc_logo.svg"
                            alt="Back"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flip_img
