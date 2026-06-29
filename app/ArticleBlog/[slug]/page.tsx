import { wawasans } from "@/app/data/wawasan";
import { WawasanInfo } from "@/components/wawasan";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BlogPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const blog = wawasans.find(
        (item) => item.slug === slug
    );
    const otherBlogs = wawasans.filter(
        item => item.slug !== slug
    )

    if (!blog) {
        notFound();
    }

    return (
        <>
            <div className="grid lg:grid-cols-4 gap-10 p-12">
                <div className="lg:col-span-3 bg-white">
                    <h1>{blog.topic}</h1>
                    <Image
                        src={blog.image}
                        alt={blog.topic}
                        width={1200}
                        height={500}
                        className=" "
                    />

                    <p>{blog.description}</p>
                </div>
                <div className="lg:col-span-1 space-y-14 bg-amber-500">
                    <h2 className="text-xl font-bold">
                        Lihat Artikel Lainnya
                    </h2>

                    {otherBlogs.map((item) => (
                        <WawasanInfo
                            key={item.id}
                            params={item}
                            compact
                        />
                    ))}
                </div>

            </div>

        </>
    );
}