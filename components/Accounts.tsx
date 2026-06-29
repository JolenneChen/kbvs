"use client"
import { IconProps, DevicesIcon, HeadsetIcon, TrendUpIcon} from '@phosphor-icons/react';
import React from 'react'
import { Badge } from './ui/badge';

interface accountsProps {
    id: number,
    icon: React.ComponentType<IconProps>,
    num: number,
    title: string,
    description: string,
    badge1: string,
    badge2: string,
    badge3: string
}
export const AccountsInfo = ({ params }: { params: accountsProps }) => {
    const Icon = params.icon;
    return (
        <>
            <div className=" bg-[#141313]  hover:bg-[#2c2c2c] rounded-xl overflow-hidden md:pb-5 md:py-10 border-2 border-[#e9ae40] max-w-xs md:max-w-2xl ">
                <div className="px-5 py-3 ">
                    <div className="flex items-center justify-between p-3 ">
                        <div className="bg-[#836733] text-white rounded-xl p-3 w-fit">
                            < Icon size={32} />
                        </div>

                        <div className="text-2xl text-[#7e7261] font-bold">
                            <p>0{params.num}</p>
                        </div>

                    </div>
                    <h1 className="font-bold md:text-2xl text-xl md:py-8 text-white">{params.title}</h1>
                    <p className="font-extralight text-[#aa9e89] md:pr-15 md:text-lg text-[12px] text-justify">{params.description}</p>
                    <div className="md:flex gap-5 py-10 rounded-xs">
                        <Badge className='bg-black text-[#e9ae40] border-2 border-[#e9ae40] p-3'>{params.badge1}</Badge>
                        <Badge className='bg-black text-[#e9ae40] border-2 border-[#e9ae40] p-3'>{params.badge2}</Badge>
                        <Badge className='bg-black text-[#e9ae40] border-2 border-[#e9ae40] p-3'>{params.badge3}</Badge>
                    </div>

                </div>
            </div>
        </>
    )
}
const Accounts = () => {
    const Accounts: accountsProps[] = [
        {
            id: 1,
            icon: DevicesIcon,
            num: 1,
            title: "Regular Account",
            description: "Perdagangan daring memungkinkan nasabah bertransaksi dengan mudah di mana saja dan kapan saja melalui internet. Dengan HTS (Home Trading System) dan MTS (Mobile Trading System) kami, nasabah dapat bertransaksi dengan mudah dan aman sambil memantau kondisi pasar modal secara real-time secara daring. Bagi pemegang rekening perdagangan daring, KB Valbury Sekuritas tidak menetapkan setoran minimum untuk pembukaan rekening.",
            badge1: "HTS / MTS",
            badge2: "NO MINIMUM DEPOSIT",
            badge3: "REAL-TIME MONITORING"

        },
        {
            id: 2,
            icon: HeadsetIcon,
            num: 2,
            title: "Remote Trading",
            description: "Remote trading memungkinkan investor kami untuk bertransaksi dengan mudah dengan dukungan dari para broker kami yang berpengalaman. Dengan pengalaman lebih dari 20 tahun di industri ini, KB Valbury Sekuritas melatih para broker kami untuk memberikan wawasan dan analisis ahli kepada investor. Untuk membuka akun remote trading di KB Valbury Sekuritas, kami menetapkan setoran awal minimum sebesar Rp25 juta.",
            badge1: "EXPERT BROKERS",
            badge2: "20+ YEARS EXPERIENCE",
            badge3: "ANALISIS AHLI"
        },
        {

            id: 3,
            icon: TrendUpIcon,
            num: 3,
            title: "Margin Account",
            description: "Akun margin adalah jenis akun pialang di mana investor menerima pinjaman dari pialang mereka untuk membeli sekuritas. KB Valbury Sekuritas menawarkan kepada pelanggan kami kesempatan untuk membeli saham dalam jumlah yang lebih besar daripada modal mereka saat ini. Fitur utama akun margin meliputi suku bunga pinjaman sebesar 0,033% per hari (11,9% per tahun) dan batas kredit hingga 1,5 kali portofolio!",
            badge1: "LOAN INTEREST 0.033%",
            badge2: "CREDIT LIMIT 1.5X",
            badge3: "LEVERAGE TRADING"

        }

    ]
    return (
        <div className='w-full px-12 bg-black'>
            <h1 className='text-4xl font-bold font-serif text-center text-white'>Investment Accounts</h1>
            <div className="grid lg:grid-cols-3 gap-10 justify-items-center py-20  ">
                {Accounts.map(item => (
                    <AccountsInfo params={item} key={item.id} />
                ))}
            </div>
        </div>

    )
}

export default Accounts