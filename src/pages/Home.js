import Navbar from "../components/Navbar";
import {Link, Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <div style={{textAlign:"center"}}>
                <Header/>
                <Navbar></Navbar>
                <hr/>
            </div>
            <div style={{textAlign:'left'}}>
                <Link to={'/'}> List Student </Link> |
                <Link to={'/create-student/'}> Create Student </Link> |
            </div>
            <hr/>
            <Outlet></Outlet>
            <hr/>
            <div style={{textAlign:"center"}}><Footer/></div>
        </div>
    )
}