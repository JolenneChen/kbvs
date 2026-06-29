
export interface WawasanProps {
    id: number,
    slug: string,
    badges: string,
    image: string,
    topic: string,
    description: string,
    featured: boolean
}
export const wawasans: WawasanProps[] = [
    {
        id: 1,
        slug: "Tips-dan-Spesifikasi-Komputer-untuk-Trading-Forex",
        badges: "TIPS",
        image: "/images/blog1.jpg",
        topic: "Tips dan Spesifikasi Komputer untuk Trading Forex",
        description: "Trading forex semakin populer di Indonesia, terutama di kalangan mereka yang ingin mendapatkan penghasilan tambahan. Namun, untuk sukses dalam trading forex, memiliki strategi dan pengetahuan saja tidak cukup. Penting untuk memiliki perangkat keras yang mendukung, terutama komputer dengan spesifikasi yang sesuai. Artikel ini akan membahas spesifikasi komputer yang ideal untuk trading forex agar Anda dapat trading dengan lancar dan menghindari masalah teknis.",
        featured: true
    },
    {
        id: 2,
        slug: "Rekomendasi-Komputer-untuk-Trading-Saham",
        badges: "REKOMENDASI",
        image: "/images/blog2.jpg",
        topic: "Rekomendasi Komputer untuk Trading Saham: Desktop vs Laptop, Mana yang Lebih Baik?",
        description: "Trading saham adalah aktivitas jual beli saham yang bertujuan untuk mendapatkan keuntungan dari fluktuasi harga. Untuk melakukan trading saham dengan efektif, komputer yang mumpuni sangat dibutuhkan. Komputer yang digunakan harus memiliki performa yang cepat dan...",
        featured: true
    },
    {
        id: 3,
        slug: "Cara-Trading-Saham-Online-Bagi-Pemula",
        badges: "PEMULA",
        image: "/images/blog3.jpg",
        topic: "Cara Trading Saham Online Bagi Pemula",
        description: "Trading saham online adalah salah satu cara yang populer untuk berinvestasi di pasar saham. Bagi pemula, trading saham online bisa menjadi langkah awal yang menarik untuk memulai karir investasi mereka. Namun, sebelum memulai trading saham online, ada beberapa hal...",
        featured: false
    },
    {
        id: 4,
        badges: "EDUKASI",
        slug: "tahui-Istilah-dalam-Dunia-Trading-Saham-Online",
        image: "/images/blog4.jpg",
        topic: "Mengetahui Istilah dalam Dunia Trading Saham Online",
        description: "Terdapat berbagai istilah dalam dunia trading online yang perlu dipahami agar dapat sukses dalam berinvestasi. Istilah-istilah ini sering digunakan oleh para trader saham untuk berkomunikasi dan memahami situasi pasar dengan lebih baik. Salah satu istilah yang sering...",
        featured: false
    },
    {
        id: 5,
        slug: "How-to-Trade-Stocks-for-Beginners",
        badges: "BEGINNER GUIDE",
        image: "/images/blog5.jpg",
        topic: "How to Trade Stocks for Beginners",
        description: "Trading stocks can be a lucrative way to grow your wealth, but it can also be overwhelming for beginners. If you're new to the world of stock trading, it's important to educate yourself on the basics before diving in. Here are some tips on how to trade stocks for...",
        featured: false
    }

]
