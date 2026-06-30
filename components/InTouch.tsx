"use client"
import {  PaperPlaneRightIcon, ChartLineUpIcon } from '@phosphor-icons/react'
import Image from 'next/image'
const InTouch = () => {
    return (
        <div className=' w-full p-5 md:p-12 md:pt-3 bg-black'>
            <div className="">
                <h1 className=" md:text-5xl text-4xl font-bold py-3 text-white">Get In  <span className="text-[#EB9A02]">Touch</span></h1>
                <p className='pb-7 max-w-xl text-white'>Nikmati layanan konsultasi dan dukungan profesional dari tim kami untuk memastikan pengalaman investasi yang lebih nyaman dan terpercaya.</p>
            </div>
            <div className="grid md:grid-cols-[40%_60%] md:gap-20 items-start ">
                <div className=" justify-center text-center bg-linear-to-br from-[#966d35] to-[#2e1f03]  rounded-2xl">
                    <div className="md:max-w-md  max-w-xs mx-auto my-10 ">
                        <div className="bg-[#634910]  text-[#f1bc5a] rounded-xl justify-center inline-flex p-3 mb-5 border w-auto border-[#EB9A02]">
                            <Image src={'/images/wa.png'} alt={'qrcode'} width={300} height={300} className='w-40'></Image>
                        </div>

                        <h1 className='md:text-3xl text-xl font-bold text-white'>Akses Dukungan Langsung</h1>
                        <p className='my-7 text-[#beb7a9] md:text-md text-xs'>Klik tombol di bawah untuk diarahkan langsung ke meja dukungan institusional kami melalui WhatsApp untuk bantuan berkecepatan tinggi.</p>
                        <a href="https://wa.me/+6281269937992" className='font-bold md:mt-5 p-2 md:px-15 bg-[#f5b11d] hover:bg-[#c78800] text-black inline-flex text-xs md:text-xl'><span><PaperPlaneRightIcon className='mt-1 mr-2' /></span> HUBUNGI VIA WHATSAPP</a>

                    </div>
                </div>
                <div className="grid grid-cols-1 md:max-w-3xl gap-8 my-12 md:my-0">
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                        <div className="flex items-start gap-6">

                            {/* Icon */}
                            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-[#EB9A02] bg-[#40392E] text-[#FFB958] shrink-0">
                                <ChartLineUpIcon size={30} weight="bold" />
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="md:text-3xl text-xl font-bold pt-4 md:pt-0 text-white">Trading Via Mini</h2>

                                <div className="mt-6 space-y-4">
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-[#B89D6B] font-semibold">Mobile</p>
                                        <p className="md:text-lg text-md font-semibold text-white">+62 812 6993 7992</p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-[#B89D6B] font-semibold">Jam Operasional</p>
                                        <p className="md:text-lg text-md font-semibold text-white">08:00 AM – 17:00 PM</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 grid grid-cols-1 gap-6 ">
                        <div className="">
                            <h1 className='text-[#EB9A02] font-bold text-xl'>Mini Chen</h1>
                            <p className='text-xs text-[#948b7e]'>EQUITY SALES</p>
                        </div>
                        <div className="max-w-2xs">
                            <h1 className='text-[13px] text-[#b9afa1] font-bold '>ALAMAT KANTOR</h1>
                            <p className='text-white'>Komplek Golden Trade Center,
                                <br />Jl. Jendral Gatot Subroto No. 19-20,
                                Medan 20112
                            </p>
                        </div>
                        <div className="">
                                <h1 className='text-[13px] text-[#b9afa1] font-bold'>WEBSITE</h1>
                                <p className='text-[#EB9A02]'>www.minisaham.com</p>
                            </div>
                        <div className="">
                            <h1  className='text-[13px] text-[#b9afa1] font-bold'>EMAIL</h1>
                            <p className='text-white'>miniwati@kbvalbury.com</p>
                        </div>
                    
                    </div>
                </div>

            </div>


        </div>
    )
}

export default InTouch