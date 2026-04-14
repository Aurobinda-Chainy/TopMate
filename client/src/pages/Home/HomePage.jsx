import BatchList from "./BatchList";
import FeatureCards from "./FeatureCards";
import Footer from "../Footer/Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";


const HomePage = () =>{
    return(
        <>
            <Navbar/>
            <Hero/>
            <BatchList/>
            <FeatureCards/>
            <Footer/>
        </>
    )
}

export default HomePage;