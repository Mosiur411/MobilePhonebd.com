import Link from "next/link";

export default function CardMobile() {

    return (
        <div className="p-3 rounded-md shadow-lg border-2 overflow-hidden">
            <Link href={`/details/${12}`}>
                <img className="images p-3" src="https://www.mobiledokan.com/wp-content/uploads/2022/11/Symphony-Z47.jpg" />
                <h1 className="font-bold text-xl">Vivo Y02</h1>
            </Link>
            <div className="flex items-center gap-2">
                <h1>Ram/2</h1>
                <h1>Rom/32</h1>
            </div>
            <h1 >৳ <span>20034</span></h1>
            <div className="flex justify-between items-center gap-2">
                <span>*****</span>
                <button className={`containerButton px-3 p-1 rounded-md text-white font-bold`}>Add to Card</button>
            </div>

        </div>


    )
}
