import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Admin() {
    return (
        <>
            <div style={{textAlign: "center"}}>
                <Header/>
                <Navbar></Navbar>
                <hr/>
                <h1>Admin Page</h1>
                <hr/>
            </div>
        </>
    )
}