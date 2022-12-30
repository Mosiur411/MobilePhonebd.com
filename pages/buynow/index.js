import { AiOutlineCloseCircle } from "react-icons/ai";
export default function buyNow() {
    const imageBaseUrl = "https://www.mobiledokan.com/wp-content/uploads/2022/11/Symphony-Z47.jpg"
    const quantity = 0

    return (
        <>
            <section className="py-10 pl-10">
                <section className="flex justify-between gap-5">
                    <div className="flex-1">
                        <div className="flex gap-6 p-2 shadow justify-between ">
                            <div className="flex gap-5">
                                <img src={imageBaseUrl} className='w-20 h-20 rounded' alt='img' />
                                <div>
                                    <p>Infinix Hot 20s (8+128GB)</p>
                                    <p className="text-bold text-2xl ">৳ 17,939</p>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xl cursor-pointer">+</span>
                                        <span className="px-3 py-1  border">{quantity}</span>
                                        <span className="text-xl cursor-pointer">-</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="text-right"><AiOutlineCloseCircle size={20} /></button>
                            </div>
                        </div>

                    </div>

                    <div className="w-[300px] h-[500px] rounded  sticky  top-[74px] bg-red-600 p-2">
                        <h1 className="text-white  text-center font-bold text-xl">Buy Now</h1>

                    </div>
                </section>




            </section>



        </>
    )
}
