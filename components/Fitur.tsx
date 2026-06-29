"use client"
import { IconProps, LightningIcon, HandTapIcon, ChartBarIcon } from "@phosphor-icons/react"
import Link from "next/link";
interface FiturProps {
    id: number,
    icon: React.ComponentType<IconProps>,
    title: string,
    description: string,
}
export const FiturInfo = ({ params }: { params: FiturProps }) => {
    const Icon = params.icon;
    return (
        <>
            <Link href={"https://regol.kbvalbury.com/#/register/MM03"}>
                <div className="grid grid-cols-1 hover:bg-[#242424] cursor-pointer bg-black rounded-xl overflow-hidden pb-5 border-2 border-[#4d4d4d]">
                    <div className="px-5 py-3 ">
                        <div className="flex items-center py-3">
                            <div className="bg-[#c99a43] rounded-xl p-3 w-fit shadow-2xl shadow-amber-200 ">
                                < Icon size={32} />
                            </div>
                            <h1 className="font-bold text-2xl py-4 justify-self-end pl-5">{params.title}</h1>
                        </div>

                        <p className="font-extralight dark:text-[#aa9e89] text-[#77736b] max-w-sm">{params.description}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

const Fitur = () => {
    const fitur: FiturProps[] = [
        {
            id: 1,
            icon: LightningIcon,
            title: "Buka Akun Cepat",
            description: "100% Online, Tanpa Minimum Deposit. Proses pendaftaran kami instant tanpa ribet."
        },
        {
            id: 2,
            icon: HandTapIcon,
            title: "Jual Beli Saham",
            description: "Hanya Dengan 1 Klik. Eksekusi cepat di pasar modal real-time untuk profit maksimal."
        },
        {
            id: 3,
            icon: ChartBarIcon,
            title: "Analisa Saham Mudah",
            description: "Dengan Chart yang Interaktif. Alat analisa teknikal profesional yang mudah dipahami pemula."
        }
    ]
    return (
        <div className="relative md:p-20 md:py-10 p-12 bg-[#252525]">
            <div className=" w-full pb-6" >
                <h1 className=" text-4xl font-bold text-white">Fitur Unggulan <span className="text-[#EB9A02]"><br /> KB ARA</span></h1>
                <p className="max-w-2xl py-5 text-[#aa9e89]  text-justify">Dilengkapi dengan fitur-fitur untuk membantu Anda mengambil keputusan investasi yang lebih baik dan lebih cepat.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-10 ">
                {fitur.map(item => (
                    <FiturInfo params={item} key={item.id} />
                ))}
            </div>



        </div>
    )
}

export default Fitur