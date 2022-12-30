import Head from "next/head";
import Link from "next/link";

export default function CardMobile() {

    return (
        <>
            <Head>
                <title>MobilePhone-Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name='description' content='Programming Articles' />
            </Head>
            <div className="p-3 bg-white dark:bg-[#2c2c44] rounded-md shadow-lg border-2 overflow-hidden">
                <Link href={`/details/${12}`}>
                    <img className="images p-3 rounded-2xl" src="https://www.mobiledokan.com/wp-content/uploads/2022/11/Symphony-Z47.jpg" />
                    <h1 className="font-bold text-xl">Vivo Y02</h1>
                </Link>
                <div className="flex items-center gap-2">
                    <h1>Ram/2</h1>
                    <h1>Rom/32</h1>
                </div>
                <h1 className="text-xl mb-2">৳ <span>20034</span></h1>
                <div className="">
                    <button className={`containerButton px-2 p-1 rounded-md text-white font-bold`}>Add to Card</button>
                </div>

            </div>

        </>


    )
}
