"use client"
import Image from 'next/image'
import React from 'react'
import { Badge } from './ui/badge'
import { ArrowRightIcon } from '@phosphor-icons/react'
import Link from 'next/link'
import { WawasanProps, wawasans } from '@/app/data/wawasan'


interface WawasanInfoProps {
    params: WawasanProps
    compact?: boolean
    imageHeight?: string

}

export const WawasanInfo = ({
    params,
    compact = false,
    imageHeight = "h-55"
}: WawasanInfoProps) => {
    return (

        <>

            <div className="grid grid-cols-1 h-full rounded-xl overflow-hidden pb-2 border-2">
                <Image
                    src={params.image}
                    alt={params.topic}
                    width={800}
                    height={500}
                    loading='eager'
                    className={`w-full object-cover ${imageHeight}`} />
                <Badge className=" m-3 w-fit rounded-sm dark:bg-[#505042] bg-[#f5f5f5] dark:text-[#fdd283] text-[#644b2a] border border-[#EB9A02]">{params.badges}</Badge>
                <div className="px-5 py-3">
                    <h1 className={`font-bold pb-2 ${compact
                        ? "text-xl"
                        : params.featured
                            ? "text-base"
                            : "text-xl"
                        }`}>
                        {params.topic}
                    </h1>
                    {!compact && (
                        <p>
                            {params.description}
                        </p>
                    )}

                    <div className=" mt-6">
                        <Link href={`/ArticleBlog/${params.slug}`} className='font-bold hover:underline inline-flex text-[#f3c56f]'>
                            Read Report <ArrowRightIcon className='mt-1 ml-2' />
                        </Link>

                    </div>
                    
                </div>

            </div>

        </>
    )
}

const Wawasan = () => {


    const featured = wawasans.filter(wawasan => wawasan.featured)
    const others = wawasans.filter(wawasan => !wawasan.featured)
    return (

        <div className="relative p-12 ">
            <div className=" w-full pb-6" >
                <h1 className=" text-4xl font-serif font-bold">Wawasan & Layanan Terbaru</h1>
                <p className=" py-5 dark:text-[#dbd2bc] text-[#362f23]">Berinvestasi saham menjadi jauh lebih mudah dengan KB ARA.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
                {featured[0] && (
                    <div className="lg:col-span-2">
                        <WawasanInfo params={featured[0]} />
                    </div>
                )}

                {featured[1] && (
                    <WawasanInfo params={featured[1]} />
                )}
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
                {others.map(blog => (
                    <WawasanInfo key={blog.id} params={blog} />
                ))}
            </div>





        </div>
    )
}

export default Wawasan