"use client"
import { Badge } from './ui/badge'
import { ShieldCheckIcon, TrendUpIcon } from '@phosphor-icons/react'
import Image from 'next/image'
const Home = () => {
  return (
    <div className='grid grid-cols-1 px-6 items-center max-w-8xl mx-auto gap-0 md:gap-12 md:grid-cols-2 bg-black pb-12'>
      <div className="flex flex-col md:pl-14 inset-y-0 h-full md:pt-20">
        <div>
          <Badge className=' bg-[#40392E] text-white text-xs md:text-xl border-2 border-[#EB9A02] font-black p-4 md:p-5  tracking-widest my-7 md:my-10'>
            <ShieldCheckIcon weight="bold" className='text-[#FFB958] ' />
            ONLINE TRADING APPLICATION
          </Badge>
        </div>
        <Image src={'/images/smart.png'} alt={'Logo'} width={550} height={400} className='h-auto'></Image>
        <div className=" my-6 md:my-8 px-2 max-w-2xl ">
          <p className='text-[15px] md:text-2xl dark:text-[#aa9e89] text-[#77736b]'>
            Your Tools for Better Investment Decision <br />
            Let&apos;s Get on Board! Start your investing journey with us ! <br />
          </p>
        </div>

        <Image src={"/images/Mudah.png"} width={1000} height={300} alt="Promo" loading='eager' className='max-w-full h-auto width-auto md:pt-10 '></Image>
        <div className="pt-20 text-center md:text-left md:pl-5 mt-auto">
         <a href="https://regol.kbvalbury.com/#/register/MM03" className='font-bold p-2 px-5 md:p-4 md:px-20 bg-[#f7b335] text-black rounded-xl inline-flex items-center gap-2 hover:bg-[#3d311d]'>Register now! <TrendUpIcon /></a>
        </div> 
      </div>

      <div className="justify-self-end items-center md:pt-20 pt-10">
        <Image src={"/images/Promo.png"} width={700} height={300} alt="Promo" loading='eager' className='max-w-full h-auto w-auto'></Image>
      </div>

    </div>
  )
}

export default Home