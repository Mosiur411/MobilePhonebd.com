import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export function Layout({ children }) {
    return (
        <>
            <div className="overflow-hidden">
                <Navbar/>
                <div className="h-screen flex flex-row justify-start mt-5">
                    <Sidebar />
                    <div className="bg-primary flex-1 ">
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </>
    )
}
