"use client"
import React from 'react'
import { Badge } from "@/components/ui/badge"
import { ChatTextIcon, PaperPlaneRightIcon, ChartLineUpIcon } from '@phosphor-icons/react'
const InTouch = () => {
    return (
        <div className=' w-full p-2 md:p-12 md:pt-3'>
            <div className="">
                <Badge >• Contact Us</Badge>
                <h1 className=" text-5xl font-bold py-3">Get In  <span className="text-[#EB9A02]">Touch</span></h1>
                <p className='pb-7 max-w-xl'>Nikmati layanan konsultasi dan dukungan profesional dari tim kami untuk memastikan pengalaman investasi yang lebih nyaman dan terpercaya.</p>
            </div>
            <div className="grid md:grid-cols-[40%_60%] md:gap-20 items-start ">
                <div className=" justify-center text-center bg-linear-to-br dark:from-[#966d35] dark:to-[#2e1f03] from-[#e7b876] to-[#1d1911] rounded-2xl">
                    <div className="md:max-w-md  max-w-xs mx-auto my-15 md:my-25">
                        <div className="bg-[#634910]  text-[#f1bc5a] rounded-xl justify-center inline-flex p-3 mb-5 border border-[#EB9A02]">
                            <ChatTextIcon size={40} />
                        </div>

                        <h1 className='md:text-3xl text-2xl font-bold text-white'>Akses Dukungan Langsung</h1>
                        <p className='my-7 text-[#beb7a9] text-md'>Klik tombol di bawah untuk diarahkan langsung ke meja dukungan institusional kami melalui WhatsApp untuk bantuan berkecepatan tinggi.</p>
                        <a href="https://regol.kbvalbury.com/#/register/MM03" className='font-bold md:mt-5 p-5 md:px-15 bg-[#f5b11d] hover:bg-[#c78800] text-black inline-flex '><span><PaperPlaneRightIcon className='mt-1 mr-2' /></span> HUBUNGI VIA WHATSAPP</a>

                    </div>
                </div>
                <div className="grid grid-cols-1 md:max-w-3xl gap-8 my-12 md:my-0">
                    <div className="bg-[#f8f8f8] dark:bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                        <div className="flex items-start gap-6">

                            {/* Icon */}
                            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-[#EB9A02] dark:bg-[#40392E] bg-[#9e7f50] text-[#FFB958] shrink-0">
                                <ChartLineUpIcon size={30} weight="bold" />
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="text-3xl font-bold ">TradingViaMini</h2>

                                <div className="mt-6 space-y-4">
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-[#B89D6B] font-semibold">Telepon</p>
                                        <p className="text-lg font-semibold ">+62 812 6993 7992</p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-[#B89D6B] font-semibold">Jam Operasional</p>
                                        <p className="text-lg font-semibold">09:00 AM – 16:30 PM</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="bg-[#f8f8f8] dark:bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 grid grid-cols-1 gap-6 ">
                        <div className="">
                            <h1 className='text-[#EB9A02] font-bold text-xl'>Mini Chen</h1>
                            <p className='text-xs text-[#948b7e]'>DETAIL KANTOR</p>
                        </div>
                        <div className="max-w-2xs">
                            <h1 className='text-[13px] text-[#b9afa1] font-bold'>ALAMAT KANTOR</h1>
                            <p>Komplek Golden Trade Center,
                                Jl. Jendral Gatot Subroto No. 19-20,
                                Medan 20112
                            </p>
                        </div>
                        <div className="inline-flex  justify-between max-w-xl">
                            <div className="">
                                <h1 className='text-[13px] text-[#b9afa1] font-bold'>T(TELEPON)</h1>
                                <p>62 61 50339090</p>
                            </div>
                            <div className="">
                                <h1 className='text-[13px] text-[#b9afa1] font-bold'>M(PONSEL)</h1>
                                <p>+62 812 6993 7992</p>
                            </div>
                        </div>
                        <div className="">
                            <h1  className='text-[13px] text-[#b9afa1] font-bold'>E(EMAIL)</h1>
                            <p>miniwati@kbvalbury.com</p>
                        </div>
                        <div className="">
                            <h1  className='text-[13px] text-[#b9afa1] font-bold'>SITUS WEB</h1>
                            <a href="www.kbvalbury.com" className='text-[#e6ae47]'>www.kbvalbury.com</a>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default InTouch