import styles from '../styles/color.module.css'
import { BiSearchAlt2 } from "react-icons/bi";
export default function Home() {
  return (
    < >
      <div className='px-5'>
        <div className={`${styles.container} p-2`} >
          <h1 className="text-xl font-extrabold text-[#EAF2FA] text-center"> What will you Mobile  Today ?</h1>
          <div className='relative w-[50%]  mx-auto py-4'>
            <BiSearchAlt2 className='absolute top-7 left-1' />
            <input type='text Mobile' className='w-full border-2 px-5 py-1 ' placeholder='search mobile' />
          </div>
        </div>
      </div>
    </>
  )
}
