import Footer from "./Footer";
import Navbar from "./Navbar";
import {Outlet} from 'react-router-dom'
import Nav from "./Nav";

function Layout(){
    return (
        <>
        {/* <Navbar/> */}
        <Nav/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout