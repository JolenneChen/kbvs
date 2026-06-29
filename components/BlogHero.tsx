import Image from 'next/image'
import React from 'react'
import { Badge } from './ui/badge'

const BlogHero = () => {
    return (
        <div className='w-full relative'>
            <Image src={"/Images/blog.jpg"} height={100} width={1920} alt='blog' className='min-h-[calc(100vh-80px)] md:w-full'></Image>
            <div className='absolute inset-y-0 flex flex-col justify-center px-12 md:pb-40 md:gap-5 gap-2 text-center md:text-left'>
                <Badge className='rounded-none bg-[#f3b440] text-black  mx-auto md:mx-0'>ARTIKEL TERBARU</Badge>
                <h1 className='md:text-7xl font-bold text-4xl text-white'>Blog</h1>
                <p className='max-w-150 text-[rgb(224,217,203)] md:text-xl text-[12px] bg-black/50'>Temukan wawasan terbaru mengenai pasar modal, tips trading, dan edukasi finansial untuk membantu perjalanan investasi Anda.</p>
            </div>
        </div>
    )
}

export default BlogHero