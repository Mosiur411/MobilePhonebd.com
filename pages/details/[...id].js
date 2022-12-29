import { useRouter } from "next/router"
import ReactImageMagnify from "react-image-magnify"

export default function Details() {
    const router = useRouter()
    const imageBaseUrl = "https://www.mobiledokan.com/wp-content/uploads/2022/11/Symphony-Z47.jpg"
    return (
        <main className="p-5 bg-green-500">
            <section className="flex gap-5 justify-between">
                <section className="flex-1">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: "Mobile ",
                                isFluidWidth: true,
                                src: `${imageBaseUrl}`,
                                sizes:
                                    "(min-width: 1000px) 33.5vw, (min-width: 415px) 50vw, 100vw"

                            },
                            largeImage: {
                                alt: "Mobile",
                                src: `${imageBaseUrl}`,
                                width: 1200,
                                height: 1500
                            },
                            isHintEnabled: true
                        }}
                    />



                </section>
                <section className="flex-1">
                    <h1>Infinix Hot 20s (8+128GB)</h1>
                    <p>Supported Bands 2G 3G  4G </p>
                    <p>Brand:Infini || Modal</p>
                    <p>৳ 17,939</p>
                    <section className="flex gap-3">
                        <p>Color</p>
                        <section className="flex gap-2 items-center">
                            <h1 className="w-5 h-5 bg-green-500 rounded-full"></h1>
                            <h1 className="w-5 h-5 bg-white rounded-full"></h1>
                            <h1 className="w-5 h-5 bg-black rounded-full"></h1>
                        </section>
                    </section>
                    <aside className="grid grid-cols-3 gap-5">
                        <section className="bg-white text-black p-3 rounded-sm">
                            <h1>PROCESSOR</h1>
                            <p className="font-bold">Helio G37</p>
                        </section>
                        <section className="bg-white text-black p-3 rounded-sm">
                            <h1>SCREEN</h1>
                            <p className="font-bold">6.82"</p>
                        </section>
                        <section className="bg-white text-black p-3 rounded-sm">
                            <h1>BATTERY</h1>
                            <p className="font-bold">6000mAh</p>
                        </section>
                        <section className="bg-white text-black p-3 rounded-sm">
                            <h1>CAMERA</h1>
                            <p className="font-bold">13MP</p>
                        </section>
                        <section className="bg-white text-black p-3 rounded-sm">
                            <h1>MEMORY</h1>
                            <p className="font-bold">4GB, 64GB</p>
                        </section>
                        <section className="bg-white text-black p-3 rounded-sm">
                            <h1>PHYSICAL</h1>
                            <p className="font-bold">720x1640 pixels</p>
                        </section>
                    </aside>
                    <button className={`containerButton px-3 p-1 rounded-md text-white font-bold`}>Add to Card</button>

                </section>
            </section>
            {/* Table information  */}

            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 text-xl px-6 bg-gray-50 dark:bg-gray-800">
                                Product name
                            </th>
                            <th scope="col" class="py-3 text-xl px-6 bg-gray-50 dark:bg-gray-800">
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border border-gray-200 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 border-r font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                Apple MacBook Pro 17"
                            </th>
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                Apple MacBook Pro 17"
                            </th>

                        </tr>
                    </tbody>
                </table>
            </div>


        </main>
    )
}
