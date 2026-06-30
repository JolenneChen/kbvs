import Image from "next/image"


const Join = () => {
    return (
        <div className=' w-full bg-black flex justify-center md: py-4'>
            <div className="">
                <Image
                    src={'/images/FullPromo.jpg'}
                    alt={'Transttable'}
                    width={900}
                    height={300}
                    className="hidden md:block w-4xl " />
            </div>

            <div className="grid grid-cols-1 gap-5">
                <Image
                    src="/images/promo1.jpg"
                    alt="Hero"
                    loading="eager"
                    width={900}
                    height={1000}
                    className="block md:hidden w-full "
                />
                <Image
                    src="/images/promo2.jpg"
                    alt="Hero"
                    loading="eager"
                    width={900}
                    height={1000}
                    className="block md:hidden w-full "
                />
            </div>


        </div>
    )
}

export default Join 