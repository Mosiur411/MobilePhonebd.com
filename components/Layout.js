import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function Layout({ children }) {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <div className="">
                <Navbar setMenu={setMenu} menu={menu} />
                <div className="flex ">
                    {!menu && <Sidebar  />}
                    <div className="flex-1">
                        <main>{children}</main>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
