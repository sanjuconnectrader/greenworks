import Navbar from '../components/Navbar/Navbar'
import AboutHeader from '../components/About/Aboutheader'
import Aboutdetails from '../components/About/Aboutdetails'
import Owner from '../components/About/Owner'
import Meetteam from '../components/About/Meetteam'
import Footer from '../components/Footer/Footer'

const Aboutpage = () => {
    return (
        <div>
            <Navbar />
            <AboutHeader />
            <Owner/>
            <Meetteam/>
            <Aboutdetails/>
            <Footer/>
        </div>
    )
}

export default Aboutpage