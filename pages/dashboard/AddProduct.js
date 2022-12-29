import AllInput from "../../components/shared/AllInput";

export default function AddProduct() {
    return (
        <div className="p-2 bg-gray-200 ">
            <form>
                <div className="grid grid-cols-2  items-center gap-4">
                    <AllInput placeholder="Your Product Names" info="Title" type="text" />
                    <AllInput placeholder="Your Brand Names" info="Brand" type="text" />
                    <AllInput placeholder="Your Product Names" info="Images" type="file" />
                    <AllInput placeholder="Your Product Price" info="Price" type="number" />
                    <AllInput placeholder="Your Product release date" info="Release" type="text" />
                    <AllInput placeholder="Your Product Color Names " info="Color" type="text" />
                </div>

                {/* connectivity  */}
                <div className="my-3">
                    <h1 className="text-xl text-black dark:text-white font-bold py-2">Connectivity</h1>
                    <div className="grid grid-cols-2  items-center gap-4">
                        <AllInput placeholder="Your Product Network" info="Network" type="text" />
                        <AllInput placeholder="Your Product Sim" info="Sim" type="text" />
                        <AllInput placeholder="Your Product Wlan" info="Wlan" type="text" />
                        <AllInput placeholder="Your Product bluetooth" info="Bluetooth" type="text" />
                        <AllInput placeholder="Your Product gPS" info="GPS" type="text" />
                        <AllInput placeholder="Your Product radio" info="Radio" type="text" />
                        <AllInput placeholder="Your Product usb" info="USB" type="text" />
                        <AllInput placeholder="Your Product otg" info="OTG" type="text" />
                        <AllInput placeholder="Your Product usbTypeC" info="USB Type" type="text" />
                        <AllInput placeholder="Your Product nfc" info="NFC" type="text" />
                    </div>
                </div>

                {/* body  */}
                <div className="my-3">
                    <h1 className="text-xl text-black dark:text-white font-bold py-2">Body</h1>
                    <div className="grid grid-cols-2  items-center gap-4">
                        <AllInput placeholder="Your Product style" info="Style" type="text" />
                        <AllInput placeholder="Your Product material" info="Material" type="text" />
                        <AllInput placeholder="Your Product waterProve" info="WaterProve" type="text" />
                        <AllInput placeholder="Your Product dimensions" info="Dimensions" type="text" />
                        <AllInput placeholder="Your Product weight" info="Weight" type="text" />
                    </div>
                </div>
                {/* Display  */}
                <div className="my-3">
                    <h1 className="text-xl text-black dark:text-white font-bold py-2">Body</h1>
                    <div className="grid grid-cols-2  items-center gap-4">
                        <AllInput placeholder="Your Product size" info="size" type="text" />
                        <AllInput placeholder="Your Product resolution" info="Resolution" type="text" />
                        <AllInput placeholder="Your Product technology" info="Technology" type="text" />
                        <AllInput placeholder="Your Product protection" info="Protection" type="text" />
                        <AllInput placeholder="Your Product features" info="Features" type="text" />
                    </div>
                </div>
                {/* backCamera  */}
                <div className="my-3">
                    <h1 className="text-xl text-black dark:text-white font-bold py-2">BackCamera</h1>
                    <div className="grid grid-cols-2  items-center gap-4">
                        <AllInput placeholder="Your Product backResolution" info="BackResolution" type="text" />
                        <AllInput placeholder="Your Product backFeatures" info="BackFeatures" type="text" />
                        <AllInput placeholder="Your Product backVideoRecording" info="BackVideoRecording" type="text" />
                    </div>
                </div>
                {/* FrontCamera  */}
                <div className="my-3">
                    <h1 className="text-xl text-black dark:text-white font-bold py-2">BackCamera</h1>
                    <div className="grid grid-cols-2  items-center gap-4">
                        <AllInput placeholder="Your Product frontResolution" info="FrontResolution" type="text" />
                        <AllInput placeholder="Your Product frontFeatures" info="FrontFeatures" type="text" />
                        <AllInput placeholder="Your Product frontVideoRecording" info="FrontVideoRecording" type="text" />
                    </div>
                </div>
                {/* battery  */}
                <div className="my-3">
                    <h1 className="text-xl text-black dark:text-white font-bold py-2">Battery</h1>
                    <div className="grid grid-cols-2  items-center gap-4">
                        <AllInput placeholder="Your Product typeCapacity" info="TypeCapacity" type="text" />
                        <AllInput placeholder="Your Product fastCharging" info="FastCharging" type="text" />
                    </div>
                </div>
                {/* Performance  */}
                <div className="my-3">
                    <h1 className="text-xl text-black dark:text-white font-bold py-2">Performance</h1>
                    <div className="grid grid-cols-2  items-center gap-4">
                        <AllInput placeholder="Your Product operatingSystem" info="OperatingSystem" type="text" />
                        <AllInput placeholder="Your Product chipset" info="Chipset" type="text" />
                        <AllInput placeholder="Your Product ram" info="Ram" type="text" />
                        <AllInput placeholder="Your Product processor" info="Processor" type="text" />
                        <AllInput placeholder="Your Product gpu" info="GPU" type="text" />
                    </div>
                </div>
                {/* storage  */}
                <div className="my-3">
                    <h1 className="text-xl text-black dark:text-white font-bold py-2">Storage</h1>
                    <div className="grid grid-cols-2  items-center gap-4">
                        <AllInput placeholder="Your Product rom" info="Rom" type="text" />
                        <AllInput placeholder="Your Product microSDSlot" info="MicroSDSlot" type="text" />
                    </div>
                </div>
                {/* Sound  */}
                <div className="my-3">
                    <h1 className="text-xl text-black dark:text-white font-bold py-2">Sound</h1>
                    <div className="grid grid-cols-2  items-center gap-4">
                        <AllInput placeholder="Your Product jack" info="Jack" type="text" />
                        <AllInput placeholder="Your Product features" info="Features" type="text" />
                    </div>
                </div>
                {/* security  */}
                <div className="my-3">
                    <h1 className="text-xl text-black dark:text-white font-bold py-2">Sound</h1>
                    <div className="grid grid-cols-2  items-center gap-4">
                        <AllInput placeholder="Your Product fingerprint" info="Fingerprint" type="text" />
                        <AllInput placeholder="Your Product faceUnlock" info="FaceUnlock" type="text" />
                        <AllInput placeholder="Your Product voiceUnlock" info="VoiceUnlock" type="text" />
                    </div>
                </div>
                {/* Others  */}
                <div className="my-3">
                    <h1 className="text-xl text-black dark:text-white font-bold py-2">Others</h1>
                    <div className="grid grid-cols-2  items-center gap-4">
                        <AllInput placeholder="Your Product notificationLight" info="NotificationLight" type="text" />
                        <AllInput placeholder="Your Product sensors" info="Sensors" type="text" />
                        <AllInput placeholder="Your Product manufactured" info="Manufactured" type="text" />
                        <AllInput placeholder="Your Product madeIn" info="MadeIn" type="text" />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
