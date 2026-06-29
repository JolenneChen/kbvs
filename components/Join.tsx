import Image from "next/image"
import { Badge } from "./ui/badge"

const Join = () => {
    return (
        <div className=' w-full md:p-10 p-2 bg-black'>
            <div className="bg-[#EB9A02]  md:p-14 justify-center text-center md:rounded-2xl md:py-10 pt-8 pb-12 ">
                <Badge className='bg-black text-[#e9ae40] border-2 border-[#e9ae40] md:text-md md:p-3'>KOLABORASI</Badge>
                <Badge className='bg-black text-[#e9ae40] border-2 border-[#e9ae40] md:text-md md:p-3'>EDUKASI</Badge>
                <Badge className='bg-black text-[#e9ae40] border-2 border-[#e9ae40] md:text-md md:p-3'>INVESTASI</Badge>

                <div className="grid md:grid-cols-2 ">
                    <div className=" justify-center items-center md:pt-8 pt-10">
                        <Image src={"/Images/NewPromo.png"} alt={"promo"} width={850} height={300} className="max-w-full h-auto width-auto rounded-4xl"></Image>
                    </div>
                    <div className="max-w-3xl">
                        <h1 className='md:text-4xl text-xl font-bold font-sans mx-auto pt-8 text-[#473d29]'>BUKA REKENING ONLINE UNTUK PERUSAHAAN, KOMUNITAS, UNIVERSITAS ATAU GRUP ANDA !</h1>
                        <p className='max-w-xl mx-auto py-8 px-2 md:px-0 md:text-2xl text-md text-[#473d29]'>Ajak karyawan, mahasiswa, atau anggota anda untuk mulai investasi di pasar modal bersama KB ARA</p>
                    </div>

                </div>


                <nav className=" mt-2">
                    <a href="https://regol.kbvalbury.com/#/register/MM03" className='font-bold md:p-5 p-2 bg-[#473d29] text-[#EB9A02] rounded-2xl text-md '>Buka Akun Sekarang</a>
                </nav>

            </div>

        </div>
    )
}

export default Join 