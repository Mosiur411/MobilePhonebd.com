import { useState } from 'react'
import { AiOutlineHome, AiFillSetting,AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import Modal from "./shared/Modals";
import { useRouter } from 'next/router';
export default function Sidebar() {
  const router = useRouter()
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
      {Delete && <Modal Delete={Delete} setDelete={setDelete} />}
      <main  data-aos="fade-right" className="min-w-fit sliderHeight sticky  dark:bg-slate-900  top-[74px] p-5 shadow-2xl rounded-sm flex flex-col justify-between ">
        <section >
          <div>
            <label htmlFor="brand" className="text-md font-medium">Mobile's Brand</label> <br />
            <select id="brand" className="border outline-none  bg-white z-40 dark:bg-[#292938b9] shadow w-[200px] px-2 py-1 rounded-lg mt-2">
              <option defaultValue className="">selected</option>
              {
                Brand.map(brand => <option value={brand.value} key={brand._id}>{brand.Names}</option>)
              }
            </select>
          </div>
          <div className="mt-2">
            <label htmlFor="price" className="text-mc font-medium ">Mobile's Price ৳</label> <br />
            <select id="price" className="border outline-none z-40  bg-white  dark:bg-[#292938b9] shadow w-[200px] px-2 py-1 rounded-lg mt-2">
              <option defaultValue >selected</option>
              {
                price.map(pc => <option value={pc.value} key={pc._id}>{pc.price}</option>)
              }
            </select>
          </div>
        </section>
        {/* ================ menu styles ============  */}
        <section className="flex flex-col gap-4">
          {/* admin control  website  start*/}
          <div onClick={() => router.push('/dashboard/AddProduct')} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white" >
            <MdOutlineProductionQuantityLimits size={20} />
            <span className="text-[20px]">Add Product</span>
          </div>
          <div onClick={() => router.push('/dashboard/User')} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white" >
            <AiOutlineUsergroupAdd size={20} />
            <span className="text-[20px]">User</span>
          </div>


          {/* admin control  website   ent */}
          <div className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white" >
            <AiOutlineHome size={20} />
            <span className="text-[20px]">Buy </span>
          </div>
          <div className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white">
            <RiSendPlaneFill size={20} />
            <span className="text-[20px]">Request</span>
          </div>
          <div className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white">
            <MdManageAccounts size={20} />
            <span className="text-[20px] ">Profile</span>
          </div>
          <div className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white">
            <AiFillSetting size={20} />
            <span className="text-[20px] cursor-pointer">Setting</span>
          </div>
          <div className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white">
            <IoIosColorPalette size={20} />
            <span className="text-[20px]">Theme</span>
          </div>

          <div onClick={() => setDelete(!Delete)} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white">
            <FiLogOut size={20} />
            <span className="text-[20px]">Log out</span>
          </div>
        </section>
      </main >
    </>

  )
}
