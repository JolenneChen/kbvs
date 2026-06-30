import Image from 'next/image'
import React from 'react'
import { Badge } from './ui/badge'

const BlogHero = () => {
    return (
        <div className='w-full py-20 bg-black'>
            <div className=' flex flex-col justify-center px-12 md:gap-5 gap-2  md:text-left '>
                <h1 className='md:text-5xl font-bold text-4xl text-white'>REGULAR ACCOUNT</h1>
                <h1 className='text-3xl text-[#e9ae40] font-bold py-5'>Online Trading</h1>
                <p className='pb-5 text-white'>Online trading lets customers easily transact anywhere and anytime via the internet.

                    With our HTS (Home Trading System) and MTS (Mobile Trading System), customers can easily and securely trade while simultaneously monitoring real-time capital market conditions online.

                    For online trading account holders, KB Valbury Sekuritas does not set a minimum deposit for opening an account.

                    Transaction fees for Online Trading are as follows:
                </p>
                <div className="items-center justify-center ">
                    <Image
                        src={'/images/Transaction.png'}
                        alt={'Transttable'}
                        width={900}
                        height={300}
                        className="hidden md:block w-4xl " />
                    <Image
                        src="/images/Phone1.png"
                        alt="Hero"
                        loading="eager"
                        width={900}
                        height={1000}
                        className="block md:hidden w-full "
                    />

                </div>
                <h1 className='text-3xl text-[#e9ae40] font-bold pt-10 py-5'>Remote Trading</h1>
                <p className='pb-5 text-white'>Remote trading enables our investors to easily trade with the support from our experienced brokers&apos; assistance.

                    With over 20 years of experience in the industry, KB Valbury Sekuritas trained our brokers to provide investors with expert insights and analysis.

                    To open a remote trading account at KB Valbury Sekuritas, we set a minimum initial deposit of IDR 25 million.

                    Transaction fees for Remote Trading are as follows:</p>
                <div className="items-center justify-center ">
                    
                    <Image
                        src={'/images/Transaction1.png'}
                        alt={'Transttable'}
                        width={900}
                        height={300}
                        className="hidden md:block w-4xl " />
                    <Image
                        src="/images/Phone2.png"
                        alt="Hero"
                        loading="eager"
                        width={900}
                        height={1000}
                        className="block md:hidden w-full "
                    />

                </div>
                <h1 className='md:text-5xl font-bold text-4xl text-white md:pt-40 py-5'>Margin Account</h1>
                <h1 className='text-3xl text-[#e9ae40] font-bold py-5'>Maximize your investment with Margin account ! </h1>
                <p className='pb-5 text-white'>
                    Margin account is a type of brokerage account in which investor receive lending from their broker to purchase securities.

                    KB Valbury Sekuritas offers our customers a chance to buy shares in quantities larger than their current capital. The main features of the margin account include a loan interest rate of 0.033% per day (11.9% p.a.) and a credit limit up to 1.5x from the portfolio!

                    The margin account is only available for transactions included in the list for the category of securities companies with MKBD above IDR 250 billion released by IDX.</p>

            </div>
        </div>
    )
}

export default BlogHero