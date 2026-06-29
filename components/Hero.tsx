"use client"
import { Badge } from './ui/badge'
import { ShieldCheckIcon, HandshakeIcon } from '@phosphor-icons/react'

const Hero = () => {
return (
    <div className='p-6 grid grid-cols-1 justify-center items-center text-center mx-auto  gap-0 min-h-[calc(100vh-80px)]'>
      <div className="items-center justify-center">
        <div>
          <Badge className=' dark:bg-black bg-white text-[#EB9A02]  border-2 border-[#EB9A02] font-black p-3 tracking-widest my-4'>
            COMPANY OVERVIEW
          </Badge>
        </div>
        <h1 className='py-4 text-4xl md:text-7xl font-bold md:max-w-6xl mx-auto '>Layanan Investasi Keuangan Berkualitas Terbaik</h1>
        <div className=" max-w-4xl mx-auto md:py-9 py-5">
          <p className='text-md md:text-2xl dark:text-[#aa9e89] text-[#77736b]'>KB Valbury Sekuritas menawarkan layanan investasi dan solusi keuangan yang disesuaikan dengan beragam kebutuhan klien kami. Kami didukung oleh berbagai layanan bisnis yang berkaitan dengan pasar modal, serta tim profesional berpengalaman dan solusi IT.</p>
        </div>
        <div className="md:flex justify-center gap-8">
            <Badge className='p-5 px-10 my-2 md:my-0 dark:bg-[#201913] dark:text-white bg-white text-black border-2 border-[#EB9A02]' > <ShieldCheckIcon weight="bold" className='text-[#FFB958]' size={22} />OJK REGULATED</Badge>
            <Badge className='p-5 dark:bg-[#201913] dark:text-white text-black bg-white border-2 border-[#EB9A02]'><HandshakeIcon weight="bold" className='text-[#FFB958] ' size={22} />PARTNER OF KB VALBURY</Badge>
        </div>
      </div>

    </div>
  )}

export default Hero