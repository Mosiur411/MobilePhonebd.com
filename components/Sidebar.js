import Image from "next/image"
import logo from '../public/img/logo.png'
import { ImMobile } from "react-icons/im";
import { AiOutlineHome } from "react-icons/ai";
export default function Sidebar() {
  const price = [
    {
      _id: 1,
      price: "0-1k",
      value: "1-1k"
    },
    {
      _id: 2,
      price: "1k-5k",
      value: "1k-5k"
    },
    {
      _id: 3,
      price: "5k-10k",
      value: "5k-10k"
    },
    {
      _id: 4,
      price: "10k-15k",
      value: "10k-15k"
    },
    {
      _id: 5,
      price: "15k-20k",
      value: "15k-20k"
    },
    {
      _id: 6,
      price: "20k-25k",
      value: "20k-25k"
    },
    {
      _id: 7,
      price: "25k-30k",
      value: "25k-30k"
    },
    {
      _id: 8,
      price: "30k-35k",
      value: "30k-35k"
    },
    {
      _id: 9,
      price: "35k-40k",
      value: "35k-40k"
    },
    {
      _id: 10,
      price: "40k-45k",
      value: "40k-45k"
    },
    {
      _id: 11,
      price: "45k-50k",
      value: "45k-50k"
    },
    {
      _id: 12,
      price: "50k-60k",
      value: "50k-60k"
    },
    {
      _id: 13,
      price: "60k-70k",
      value: "60k-70k"
    },
    {
      _id: 14,
      price: "70k-100k",
      value: "70k-100k"
    },
    {
      _id: 15,
      price: "100k-200k",
      value: "100k-200k"
    }
  ]
  const Brand = [
    {
      _id: 1,
      Names: "samsung",
      value: "samsung"
    },
    {
      _id: 2,
      Names: "xiaomi",
      value: "xiaomi"
    },
    {
      _id: 3,
      Names: "realme",
      value: "realme"
    },
    {
      _id: 4,
      Names: "vivo",
      value: "vivo"
    },
    {
      _id: 5,
      Names: "oppo",
      value: "oppo"
    },
    {
      _id: 6,
      Names: "apple",
      value: "apple"
    },
    {
      _id: 7,
      Names: "symphony",
      value: "symphony"
    },
    {
      _id: 8,
      Names: "techno",
      value: "techno"
    },
    {
      _id: 9,
      Names: "walton",
      value: "walton"
    },
    {
      _id: 10,
      Names: "iter",
      value: "iter"
    },
    {
      _id: 11,
      Names: "infinix",
      value: "infinix"
    },
    {
      _id: 12,
      Names: "onePlus",
      value: "onePlus"
    },
    {
      _id: 13,
      Names: "motorola",
      value: "motorola"
    },
    {
      _id: 14,
      Names: "Nokia",
      value: "Nokia"
    }
  ]
  return (
    <div className="px-5 shadow-2xl">
      <ImMobile />
      <div>
        <label htmlFor="brand" className="font-medium">Mobile's Brand </label> <br />
        <select id="brand" className="border outline-none  shadow w-[200px] px-2 py-1 rounded-lg mt-2">
          <option defaultValue className="">selected</option>
          {
            Brand.map(brand => <option value={brand.value} key={brand._id}>{brand.Names}</option>)
          }
        </select>
      </div>
      <div className="mt-2">
        <label htmlFor="price" className="font-medium ">Mobile's Price ৳</label> <br />
        <select id="price" className="border outline-none  shadow w-[200px] px-2 py-1 rounded-lg mt-2">
          <option defaultValue >selected</option>
          {
            price.map(pc => <option value={pc.value} key={pc._id}>{pc.price}</option>)
          }
        </select>
      </div>
      {/* ================ menu styles ============  */}
      <div className="flex gap-5 items-center">
        <AiOutlineHome size={25}/>
        <span className="text-[20px]">Home</span>
      </div>






    </div >
  )
}
