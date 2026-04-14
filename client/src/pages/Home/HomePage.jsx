import BatchList from "./BatchList";
import Footer from "../Footer/Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";


const HomePage = () =>{
    return(
        <>
            <Navbar/>
            <Hero/>
            <BatchList/>
            <Footer/>
        </>
    )
}

export default HomePage;