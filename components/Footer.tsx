"use client"
import Link from 'next/link'
import React from 'react'
import { InstagramLogoIcon ,TiktokLogoIcon, WhatsappLogoIcon, EnvelopeIcon} from '@phosphor-icons/react'


const Footer = () => {
    return (
        <div className='border-2'>
            <div className="grid md:grid-cols-4 p-9 md:p-3 py-5 md:py-12 gap-5 md:gap-0 ">
                <div className=" max-w-xs ">
                    <h1 className='font-bold text-xl md:text-2xl'>TradingViaMini</h1>
                    <p className='md:py-5 dark:text-[#a0947b] text-[#362f23]' >Platform edukasi dan fasilitasi investasi saham terpercaya di Indonesia.</p>
                </div>
                <div className="grid grid-cols-1 gap-2">
                    <h1 className='text-xs md:text-md font-bold'>Quick Links</h1>
                    <Link href="/" className='dark:text-[#a0947b] text-[#362f23]'>Home</Link>
                    <Link href="/AboutUs" className='dark:text-[#a0947b] text-[#362f23]'>About Us</Link>
                    <Link href="/ContactUs" className='dark:text-[#a0947b] text-[#362f23]'>Contact Us</Link>
                    <Link href="/ArticleBlog" className='dark:text-[#a0947b] text-[#362f23]'>Article Blog</Link>
                </div>
                <div className="grid grid-cols-1 ">
                    <h1 className='text-xs md:text-md font-bold mb-3'>Socials</h1>
                    <Link href="https://www.instagram.com/mini_kbvs?igsh=enN6eGQ5Mzdoa2pm&utm_source=qr" className='dark:text-[#a0947b] text-[#362f23] flex '><InstagramLogoIcon size={32} className='pb-1 mr-4'/>Instagram</Link>
                    <Link href="https://www.tiktok.com/@mini_kbvs?_r=1&_t=ZS-97CFrezkXcf" className='dark:text-[#a0947b] text-[#362f23] flex'><TiktokLogoIcon size={32} className='pb-1 mr-4'/>Tiktok</Link>
                    <Link href="tel:+6281269937992" className='dark:text-[#a0947b] text-[#362f23] flex'><WhatsappLogoIcon size={32} className='pb-1 mr-4'/>Whatsapp</Link>
                    <Link href="mailto:miniwati@valbury.com" className='dark:text-[#a0947b] text-[#362f23] flex'><EnvelopeIcon size={32} className='pb-1 mr-4'/>Gmail</Link>
                </div>
                <div className="max-w-md">
                    <h1 className='text-xs md:text-md  font-bold'>Regulatory</h1>
                    <p className='bg-[#d8d3c8] dark:bg-[#49442f] p-2 dark:text-[#a0947b] text-[#362f23]'>PT. KB Sekuritas terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK). Seluruh transaksi pasar modal memiliki risiko.</p>
                </div>
            </div>
            <div className="border-2 py-5 dark:text-[#a0947b] text-[#362f23]">
                <h1>&copy; 2024 TradingViaMini. Terdaftar dan diawasi oleh OJK.</h1>
            </div>
        </div>
    )
}

export default Footer