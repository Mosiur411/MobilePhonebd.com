import { useTheme } from 'next-themes'
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import profileImages from '../public/img/userImg.jpg'
import { FaShoppingCart } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import LoginModals from './auth/LoginModals';
import RegisterModals from './auth/RegisterModals';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
export default function Navbar({ setMenu, menu }) {
    const { scroll } = useSelector(state => state.scroll)
    const router = useRouter()
    const [user, loading, error] = useAuthState(auth);
    const { theme, setTheme } = useTheme()
    const [Login, setLogin] = useState(false)
    const [Register, setRegister] = useState(false)
    const handleAccount = (LoginInfo) => {
        if (LoginInfo) {
            setRegister(true)
            setLogin(!LoginInfo)
        }
        if (!LoginInfo) {
            setLogin(true)
            setRegister(LoginInfo)
        }

    }
    return (
        <div className={`sticky top-0 border-b-2 dark:border-[#0C0D21] shadow-md  bg-white z-50 dark:bg-slate-900 flex justify-between items-center ${user ? 'px-5' : 'p-4'}`}>
            <div className='flex items-center gap-3'>
                <AiOutlineMenuUnfold size={24} className="cursor-pointer" onClick={() => setMenu(!menu)} />
                <span className='text-xl font-bold cursor-pointer' onClick={() => router.push('/')}><span className='text-[#01BFCA] dark:text-[#762FE6]'>Mobile</span><span className='text-[#762FE6] dark:text-[#01BFCA]'>Phone</span></span>
            </div>
            {
                !scroll && <div className='flex justify-start items-center '>
                    <input type='text Mobile' className='border-2 outline-none shadow-md rounded-md  px-3 py-1 w-[320px] dark:bg-[#292938b9]' placeholder='search mobile' />
                    <BiSearchAlt2 className='ml-[-20px]' />
                </div>
            }

            <div className='flex  justify-center items-center gap-6'>
                {theme == "dark" ? <div>
                    <svg onClick={() => setTheme('light')}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 cursor-pointer"
                        viewBox="0 0 20 20"
                        fill="#9333ea"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div> : <div>
                    <svg onClick={() => setTheme('dark')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9333ea" className="w-6 h-6 cursor-pointer">
                        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                    </svg></div>}
                <div className='relative w-[33px]'>
                    <FaShoppingCart size={24} />
                    <span className='absolute top-[-10px] right-0 text-red-500 font-bold text-xl'>1</span>
                </div>
                {
                    user && <div>
                        {
                            user?.photoURL ? <img
                                className='w-16 h-16 p-2 rounded-full'
                                src={user.photoURL}
                                alt='profile images'

                            /> : <Image
                                className='w-16 h-16 p-2 rounded-full'
                                src={profileImages}
                                alt='profile images'

                            />
                        }
                    </div>
                }
                {!user && <button className='bg-[#762FE6] text-white font-bold text-center px-8 py-2 rounded-md' onClick={() => setLogin(!Login)}>Login</button>}
                {
                    Login && <LoginModals Login={Login} setLogin={setLogin} handleAccount={handleAccount} />
                }
                {
                    Register && <RegisterModals Register={Register} setRegister={setRegister} handleAccount={handleAccount} />
                }
            </div>
        </div>
    )
}
