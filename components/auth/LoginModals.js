import Head from "next/head";
import { useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
export default function LoginModals({ Login, setLogin, handleAccount }) {
    const [email, setUserName] = useState('')
    const [password, setUserPassword] = useState('')
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    if (user?.user?.uid) {
        setLogin(!Login)
        toast("Successful Login");
    }
    if (error) {
        toast("error Login");
    }
    const handelLogin = async (event) => {
        event.preventDefault()
        if (email && password) {
            await signInWithEmailAndPassword(email, password)
            try {
                setLogin(!Login)
                toast("Successful Login");
            } catch (error) {
                toast("error Login");
            }
        }
    }
    return (
        <>
            <Head>
                <title>MobilePhone-Login</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name='description' content='Programming Articles' />
            </Head>
            <main className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity 50">
                <main className='w-full h-[100vh] flex justify-center items-center  '>
                    <div data-aos="zoom-in" className="relative w-[400px] flex flex-col min-w-0 break-words mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                        <div className="rounded-t mb-0 px-6 py-6">
                            <div className="text-right mb-3">
                                <button className="text-right" onClick={() => setLogin(!Login)}><AiOutlineCloseCircle size={20} /></button>
                                <h6 className="text-gray-600 text-sm font-bold text-center">
                                    Sign in with
                                </h6>
                            </div>
                            <div className="btn-wrapper text-center">
                                <button
                                    className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                    type="button"
                                    style={{ transition: "all .15s ease" }}
                                    onClick={() => signInWithGoogle()}
                                >
                                    <img
                                        alt="..."
                                        className="w-5 mr-1"
                                        src='https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/google.svg'
                                    />
                                    Google
                                </button>
                                <button
                                    className="bg-white active:bg-gray-100 text-gray-800  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                    type="button"
                                    style={{ transition: "all .15s ease" }}
                                >
                                    <img
                                        alt="..."
                                        className="w-5 mr-1"
                                        src='https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/github.svg'
                                    />

                                    Github
                                </button>
                            </div>
                            <hr className="mt-6 border-b-1 border-gray-400" />
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <div className="text-gray-500 text-center mb-3 font-bold">
                                <small>Or sign in with credentials</small>
                            </div>
                            <form onSubmit={handelLogin}>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        onChange={(e) => setUserName(e.target.value)}
                                        required
                                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                        placeholder="Email"
                                        style={{ transition: "all .15s ease" }}
                                    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">

                                    />
                                </div>

                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                        placeholder="Password"
                                        style={{ transition: "all .15s ease" }}
                                        name="password"
                                        pattern=".{8,}" title="Eight or more characters"
                                        onChange={(e) => setUserPassword(e.target.value)}
                                        /* 
                                         pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more
                                        */
                                        required
                                    />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                id="customCheckLogin"
                                                type="checkbox"
                                                className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                                                style={{ transition: "all .15s ease" }}
                                                required
                                            />
                                            <span className="ml-2 text-sm font-semibold text-gray-700">
                                                Remember me
                                            </span>
                                        </label>
                                    </div>
                                    <div>
                                        <small>Forgot password?</small>
                                    </div>
                                </div>
                                <div className="text-center mt-6">
                                    <button
                                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                        type="submit"
                                        style={{ transition: "all .15s ease" }}
                                    >
                                        Sign In
                                    </button>
                                </div>
                                <h1 className='text-center cursor-pointer' onClick={() => handleAccount(Login)}>Create new account ?</h1>
                            </form>
                        </div>
                    </div>
                </main>
            </main>
        </>
    )
}
