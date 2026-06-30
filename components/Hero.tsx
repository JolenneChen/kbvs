"use client"
import Image from 'next/image'
import { Badge } from './ui/badge'
import { ShieldCheckIcon, HandshakeIcon } from '@phosphor-icons/react'

const Hero = () => {
  return (
    <div className='p-6 grid grid-cols-1 justify-center  text-center mx-auto bg-black min-h-[calc(100vh-80px)]'>
      <div className="flex justify-center">
        <Image src={'/images/FullPromo.jpg'} alt={'promo'} width={820} height={600}  className='w-auto'></Image>
      </div>
      <div className="pt-8">
        <h1 className=' text-2xl md:text-7xl font-bold md:max-w-6xl mx-auto text-white '>Layanan Investasi Keuangan Berkualitas Terbaik</h1>
        <div className=" max-w-4xl mx-auto py-5">
          <p className='text-[15px] md:text-2xl text-[#aa9e89] '>KB Valbury Sekuritas menawarkan layanan investasi dan solusi keuangan yang disesuaikan dengan beragam kebutuhan klien kami. Kami didukung oleh berbagai layanan bisnis yang berkaitan dengan pasar modal, serta tim profesional berpengalaman dan solusi IT.</p>
        </div>
        <div className="md:flex justify-center gap-8">
          <Badge className='p-5 px-10 my-2 md:my-0 bg-[#201913] text-white border-[#EB9A02]' > <ShieldCheckIcon weight="bold" className='text-[#FFB958]' size={22} />OJK REGULATED</Badge>
          <Badge className='p-5 bg-[#201913] text-white border-[#EB9A02]'><HandshakeIcon weight="bold" className='text-[#FFB958] ' size={22} />PARTNER OF KB VALBURY</Badge>
        </div>
      </div>

    </div>
  )
}

export default Hero