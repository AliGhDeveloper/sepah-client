import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import { useLocation } from "react-router-dom"


export default function Layout() {
    const location  = useLocation();

    return (
        <>
            <Header />
            <Outlet />
            {
                location.pathname !== '/aboutme' && location.pathname !== '/contactus' && 
            <Footer />
            }
        </>
    )
}