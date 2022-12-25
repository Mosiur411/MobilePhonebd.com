import Image from "next/image"
import { useState } from 'react'
import logo from '../public/img/logo.png'
import { ImMobile } from "react-icons/im";
import { AiOutlineHome } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import auth from "../firebase.init";
import { useSignOut } from "react-firebase-hooks/auth";
import Modal from "./shared/Modals";
export default function Sidebar() {
  const [Delete, setDelete] = useState(false)
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
      value: "samsung",
      img: 'https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/300_186_1.png'
    },
    {
      _id: 2,
      Names: "xiaomi",
      value: "xiaomi",
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/2048px-Xiaomi_logo.svg.png'
    },
    {
      _id: 3,
      Names: "realme",
      value: "realme",
      img: 'https://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/11/16/Photos/Home%20Page/GO%20(77)-kjmB--621x414@LiveMint.png'
    },
    {
      _id: 4,
      Names: "vivo",
      value: "vivo",
      img: 'https://cdn.freebiesupply.com/logos/large/2x/vivo-1-logo-png-transparent.png'
    },
    {
      _id: 5,
      Names: "oppo",
      value: "oppo",
      img: ''
    },
    {
      _id: 6,
      Names: "apple",
      value: "apple",
      img: ''
    },
    {
      _id: 7,
      Names: "symphony",
      value: "symphony",
      img: ''
    },
    {
      _id: 8,
      Names: "techno",
      value: "techno",
      img: ''
    },
    {
      _id: 9,
      Names: "walton",
      value: "walton",
      img: ''
    },
    {
      _id: 10,
      Names: "iter",
      value: "iter",
      img: ''
    },
    {
      _id: 11,
      Names: "infinix",
      value: "infinix",
      img: ''
    },
    {
      _id: 12,
      Names: "onePlus",
      value: "onePlus",
      img: ''
    },
    {
      _id: 13,
      Names: "motorola",
      value: "motorola",
      img: ''
    },
    {
      _id: 14,
      Names: "Nokia",
      value: "Nokia",
      img: ''
    }
  ]
  return (
    <>
      {/* {ModalShow} */}
      {Delete && <Modal Delete={Delete} setDelete={setDelete} />}

      <div className="h-[89.7vh] px-5 shadow-2xl ">
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
          <AiOutlineHome size={25} />
          <span className="text-[20px]">Home</span>
        </div>
        <div onClick={() => setDelete(!Delete)} className="flex gap-5 items-center cursor-pointer">
          <FiLogOut size={25} />
          <span className="text-[20px]">Log out</span>
        </div>
      </div >
    </>

  )
}
