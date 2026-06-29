"use client"
import { Badge } from './ui/badge'
import { ShieldCheckIcon, TrendUpIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import { Button } from './ui/button'
const Home = () => {
  return (
    <div className='p-6 grid grid-cols-1 items-center max-w-8xl mx-auto gap-0 md:gap-12 md:grid-cols-2  min-h-[calc(100vh-80px)]'>
      <div className="items-center justify-center md:pl-14">
        <div>
          <Badge className=' bg-[#40392E] text-white border-2 border-[#EB9A02] font-black p-3 tracking-widest my-4'>
            <ShieldCheckIcon weight="bold" className='text-[#FFB958] ' />
            TERDAFTAR & DIAWASI OLEH OJK
          </Badge>
        </div>
        <h1 className='py-4 text-4xl md:text-8xl font-bold '>Trading Saham </h1>
        <h1 className='text-4xl md:text-8xl font-bold text-[#FFB958]'>dengan KB ARA</h1>
        <div className=" my-6 md:my-8 px-2 max-w-xl ">
          <p className='text-xl md:text-2xl dark:text-[#aa9e89] text-[#77736b]'>Lakukan investasi saham kamu hanya di Valbury Sekuritas Indonesia & download KB ARA. Trading saham dengan KB ARA sekarang juga!</p>
        </div>
        <div className="">
          <a href="https://regol.kbvalbury.com/#/register/MM03" className='font-bold p-5 px-7 bg-[#f7b335] text-black rounded-xl inline-flex items-center gap-2 hover:bg-[#3d311d]'>Join now! <TrendUpIcon /></a>
          <Button className='p-7 border border-white mx-3'>Pelajari Fitur</Button>

        </div>
      </div>

      <div className="justify-center items-center md:pt-20 pt-10">
        <Image src={"/images/Promo.jpg"} width={700} height={300} alt="Promo" loading='eager' className='max-w-full h-auto'></Image>
      </div>

    </div>
  )
}

export default Home