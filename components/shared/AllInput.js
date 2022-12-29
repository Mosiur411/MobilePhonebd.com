export default function AllInput({ placeholder, info,type }) {
    return (
        <div className="relative w-full mb-3">
            <label className="block  text-gray-700 text-xs font-bold mb-2" htmlFor={info}> {info}</label> <input type={type} required id={info} className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder={placeholder}
                style={{ transition: "all .15s ease" }}
            />
        </div>
    )
}
