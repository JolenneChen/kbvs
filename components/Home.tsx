"use client"
import React from 'react'
import { Badge } from './ui/badge'
import { ShieldCheckIcon , TrendUpIcon} from '@phosphor-icons/react'
import Image from 'next/image'
import { Button } from './ui/button'
const Home = () => {
  return (
    <div className='grid grid-cols-1 items-center max-w-8xl mx-auto gap-0 md:gap-12 md:grid-cols-2'>
      <div className="items-center justify-center">
        <div>
          <Badge className=' bg-[#40392E] text-white border-1 border-[#EB9A02] font-black p-3 tracking-widest my-4'>
            <ShieldCheckIcon weight="bold" className='text-[#FFB958] w-12 h-12' />
            TERDAFTAR & DIAWASI OLEH OJK
          </Badge>
        </div>
        <h1 className='py-4 text-4xl md:text-8xl font-bold md:text-2xl'>Trading Saham </h1>
        <h1 className='text-4xl md:text-8xl font-bold text-[#FFB958]'>dengan KB ARA</h1>
        <div className=" my-6 md:my-8 px-2 max-w-xl ">
          <p className='text-xl md:text-2xl'>Lakukan investasi saham kamu hanya di Valbury Sekuritas Indonesia & download KB ARA. Trading saham dengan KB ARA sekarang juga!</p>
        </div>
        <div className="">
          <Button> Join now!<TrendUpIcon/></Button>
          <Button>Pelajari Fitur</Button>
          
        </div>
      </div>

      <div className="justify-center items-center md:pt-20">
        <Image src={"/images/Promo.png"} width={700} height={300} alt="Promo" className='max-w-full h-auto'></Image>
      </div>
      
    </div>
  )
}

export default Home