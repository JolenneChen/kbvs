import Image from 'next/image'
import React from 'react'

const VisiMisi = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-[50%_50%] justify-center items-center md:p-4 gap-20 bg-black'>
            <div className="justify-center items-center py-12 justify-self-center">
                <Image
                    src="/images/PcStocks.jpg"
                    alt="Hero"
                    loading="eager"
                    width={1000}
                    height={1080}
                    className="hidden md:block w-xl "
                />

                {/* Mobile */}
                <Image
                    src="/images/mbStocks.jpg"
                    alt="Hero"
                    loading="eager"
                    width={750}
                    height={1000}
                    className="block md:hidden w-full "
                />

            </div>
            <div className="grid grid-cols-1 gap-10 max-w-2xl px-12 md:px-0 pb-20 md:pb-0">
                <h1 className='md:text-5xl text-2xl font-bold text-[#e6ab3f] '>Kekuatan Merek yang Kuat dan Stabilitas Keuangan</h1>
                <p className='text-[#aa9e89] md:text-xl text-[15px]'>Didukung oleh pengakuan merek KB Financial Group yang kuat serta stabilitas keuangan yang tinggi. Kami selalu berupaya memberikan yang terbaik untuk menciptakan nilai bagi pelanggan, bekerja sama dengan penyedia layanan keuangan afiliasi kami.</p>
                <div className="text-[#aa9e89] border-l-2 border-l-[#e6ab3f] pl-3">
                    <h1 className='text-2xl'>Visi</h1>
                    <p className='md:text-xl text-[15px]'>Untuk menjadi partner investasi terpercaya dengan kompetensi kelas dunia dan inovasi kreatif</p>
                </div>               
                 <div className="text-[#aa9e89] border-l-2 border-l-[#e6ab3f] pl-3">
                    <h1 className='text-2xl'>Misi</h1>
                    <p className='md:text-xl text-[15px]'>Kami selalu berusaha untuk memberikan solusi keuangan yang akan mendukung Nasabah untuk mencapai tujuan investasinya serta menciptakan dunia yang lebih baik</p>
                </div>
                <div className="text-[#aa9e89] border-l-2 border-l-[#e6ab3f] pl-3">
                    <h1 className='text-2xl'>Our Service</h1>
                    <p className='md:text-xl text-[15px]'>Memberikan solusi investasi terbaik yang disesuaikan dengan kebutuhan Nasabah kami <br />Dengan tujuan menjadi &quot;mitra investasi seumur hidup&quot; Anda, KB Valbury Sekuritas selalu berupaya memberikan layanan dan solusi investasi terbaik melalui jaringan cabang dan layanan online kami di Indonesia.</p>
                </div>
            </div>
        </div>
    )
}

export default VisiMisi