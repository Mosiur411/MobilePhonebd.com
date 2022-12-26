import styles from '../styles/color.module.css'
import CardMobile from '../components/shared/CardMobile'
import apple from '../public/img/mobile/apple.png'
import infinix from '../public/img/mobile/infinix.png'
import iter from '../public/img/mobile/iter.png'
import motorola from '../public/img/mobile/motorola.png'
import Nokia from '../public/img/mobile/Nokia.png'
import onePlus from '../public/img/mobile/onePlus.png'
import oppo from '../public/img/mobile/oppo.png'
import realme from '../public/img/mobile/realme.png'
import snmsung from '../public/img/mobile/snmsung.webp'
import symphony from '../public/img/mobile/symphony.jpg'
import techno from '../public/img/mobile/techno.png'
import vivo from '../public/img/mobile/VIVO-icon.png'
import walton from '../public/img/mobile/walton.png'
import Xiaomi from '../public/img/mobile/Xiaomi_logo.svg.png'
import Image from 'next/image';
export default function Home() {
  const Brand = [
    {
      _id: 1,
      Names: "samsung",
      value: "samsung",
      img: snmsung
    },
    {
      _id: 2,
      Names: "xiaomi",
      value: "xiaomi",
      img: Xiaomi,
    },
    {
      _id: 3,
      Names: "realme",
      value: "realme",
      img: realme
    },
    {
      _id: 4,
      Names: "vivo",
      value: "vivo",
      img: vivo
    },
    {
      _id: 5,
      Names: "oppo",
      value: "oppo",
      img: oppo
    },
    {
      _id: 6,
      Names: "apple",
      value: "apple",
      img: apple
    },
    {
      _id: 7,
      Names: "symphony",
      value: "symphony",
      img: symphony
    },
    {
      _id: 8,
      Names: "techno",
      value: "techno",
      img: techno
    },
    {
      _id: 9,
      Names: "walton",
      value: "walton",
      img: walton
    },
    {
      _id: 10,
      Names: "iter",
      value: "iter",
      img: iter
    },
    {
      _id: 11,
      Names: "infinix",
      value: "infinix",
      img: infinix
    },
    {
      _id: 12,
      Names: "onePlus",
      value: "onePlus",
      img: onePlus
    },
    {
      _id: 13,
      Names: "motorola",
      value: "motorola",
      img: motorola
    },
    {
      _id: 14,
      Names: "Nokia",
      value: "Nokia",
      img: Nokia
    }
  ]
  return (
    < >
      <div className='px-5'>
        <div className={`${styles.container} p-5 rounded-md`} >
          <h1 className="text-2xl font-extrabold text-[#EAF2FA] text-center"> Site last updated on December 22, 2022</h1>
          <div className='w-[50%] z-40 mx-auto py-4'>
            <input type='text Mobile' className='w-full border-2 px-5 py-1 rounded outline-none' placeholder='search mobile' />
          </div>
          <div className='flex justify-center'>
            {
              Brand.map((img) => <Image
                key={img?._id}
                className='w-16 h-16 p-2 rounded-full cursor-pointer'
                src={img?.img}
                alt='profile images'
              />)
            }
          </div>
        </div>
        {/*  ============= product card ============= */}
        <div className='grid md:grid-cols-4 gap-7 py-2'>
          <CardMobile />
          <CardMobile />
          <CardMobile />
          <CardMobile />
          <CardMobile />
          <CardMobile />
          <CardMobile />
        </div>
      </div>
    </>
  )
}
