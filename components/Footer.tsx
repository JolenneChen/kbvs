"use client"
import Link from 'next/link'
import React from 'react'
import { InstagramLogoIcon, TiktokLogoIcon, WhatsappLogoIcon, EnvelopeIcon, MapPinIcon } from '@phosphor-icons/react'
import Image from 'next/image'


const Footer = () => {
    return (
        <div className='border-2 border-[#333333] bg-black'>
            <div className="grid md:grid-cols-3 p-9 md:p-3 py-5 md:pt-12 gap-15 md:gap-0 md:ml-30">
                <div className=" max-w-xs ">
                    <h1 className='font-bold text-xl md:text-2xl  '><Image src={"/images/kbval.png"} alt={"kbval"} width={300} height={100}></Image></h1>

                    <p className='text-[#bdb7aa] inline-flex md:pl-3 pl-4' ><MapPinIcon className='mt-1 mr-2' size={26} /> Komplek Golden Trade Center <br /> No. 19-20 Petisah Tengah <br />Medan Petisah - Medan 20111 <br /> Sumatra Utara</p>
                </div>
                <div className="">
                    <h1 className='text-md md:text-md font-bold pt-5 text-white'>Person In Charge</h1>
                    <p className='text-[#c99a43] font-bold text-xl pt-2'>Mini Chen</p>
                    <Link href="https://wa.me/+6281269937992" className='text-[#a0947b] flex pt-3'><WhatsappLogoIcon size={32} className='pb-1 mr-4' />+62 812 6993 7992</Link>
                    <Link href="https://www.instagram.com/mini_kbvs?igsh=enN6eGQ5Mzdoa2pm&utm_source=qr" className='text-[#a0947b] flex '><InstagramLogoIcon size={32} className='pb-1 mr-4' />mini_kbvs</Link>
                    <Link href="https://www.tiktok.com/@mini_kbvs?_r=1&_t=ZS-97CFrezkXcf" className='text-[#a0947b] flex'><TiktokLogoIcon size={32} className='pb-1 mr-4' />mini_kbvs</Link>
                    <Link href="mailto:miniwati@kbvalbury.com" className='text-[#a0947b] flex'><EnvelopeIcon size={32} className='pb-1 mr-4' />miniwati@kbvalbury.com</Link>

                </div>
                <div className="">
                    <div className="">
                        <h1 className='text-md md:text-md font-bold md:pt-5 md:pl-5 text-white'>Download</h1>

                    </div>
                    <div className="md:grid md:grid-cols-1 flex "></div>
                    <Link href={'https://play.google.com/store/apps/details?id=com.ara.kbvalbury'} > <Image src={'/images/Google.png'} alt={'google'} width={150} height={200} className='w-auto'></Image></Link>
                    <Link href={'https://apps.apple.com/id/app/kb-ara/id1668965822'} > <Image src={'/images/AppStore.png'} alt={'google'} width={150} height={200} className='w-auto'></Image></Link>
                    <Link href={'https://files.kbvalbury.com/KB%20ARA.rar'} > <Image src={'/images/Windows.png'} alt={'google'} width={150} height={200} className='w-auto'></Image ></Link>


                </div>

            </div>
            <div className="md:inline-flex md:justify-between w-full border-2 border-[#333333] md:px-15">
                <div className="px-2">
                    <p className='md:pt-8 md:text-xs text-[8px] text-center text-white'>PT KB Valbury Sekuritas is licensed and supervised by the Financial Services Authority</p>
                </div>

                <div className="flex gap-2 md:gap-6 items-center justify-center width-auto">
                    <Link href={"https://www.ojk.go.id/id/Default.aspx"}> <Image src="/images/cover_w80_h80_logo-instansi-1.png" alt='OJK' height={80} width={80} loading="eager" className='w-12 md:w-20'></Image> </Link>
                    <Link href={"https://www.idx.co.id/id"}> <Image src="/images/cover_w80_h80_logo-instansi-2.png" alt='IDX' height={80} width={80} loading="eager" className='w-12  md:w-20'></Image> </Link>
                    <Link href={"https://www.ksei.co.id/id"}> <Image src="/images/cover_w80_h80_logo-instansi-3.png" alt='KSEI' height={80} width={80} loading="eager" className='w-12  md:w-20'></Image> </Link>
                    <Link href={"https://www.idclear.co.id/id"}> <Image src="/images/cover_w80_h80_logo-instansi-4.png" alt='IDClear' height={80} width={80} loading="eager" className='w-12  md:w-20'></Image> </Link>
                    <Link href={"https://www.indonesiasipf.co.id/"}> <Image src="/images/cover_w80_h80_logo-instansi-5.png" alt='SIPF' height={80} width={80} loading="eager" className='w-12  md:w-20'></Image> </Link>
                </div>

            </div>
            <div className="border-2 border-[#333333] py-5 text-[#a0947b] text-center">
                <h1 className='text-xs'>&copy; 2023 KB Valbury Sekuritas. All rights reserved.</h1>
            </div>
        </div>
    )
}

export default Footer