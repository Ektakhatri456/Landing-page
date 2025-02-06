import Navbar from "@/app/components/Navbar";
import Gallery from "@/app/components/Gallery";
import Footer from "@/app/components/Footer";
export default function Home() {
    return (
        <div className="bg-grey-200 h-screen">
            <Navbar/>
            <Gallery/>
            <Footer/>
        </div>
    )
}
