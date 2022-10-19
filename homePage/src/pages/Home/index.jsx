import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Contact from "../../components//Contact"
import Experiences from "../../components//Experiences"
import PersonalProjects from "../../components//PersonalProjects"
import Tecnologies from "../../components//Tecnologies"
import Footer from "../../components/Footer"

export default function Home() {
    return(
        <div>
            <Header atualPage="home"/>
            <Banner />
            <PersonalProjects/>
            <Contact/>
            <Tecnologies/>
            <Experiences />
            <Footer/>
        </div>
    )
}