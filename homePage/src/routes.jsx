import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home"
import Projects from "./pages/Projects";
import Academic from "./pages/Academic"
import Works from "./pages/Works"
import Certificates from './pages/Certificates'


export default function RoutedPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/projects" element={ <Projects/> } />
                <Route path="/about" element={ <About/> } />
                <Route path="/contact" element={ <ContactPage/> } />
                <Route path="/academic" element={ <Academic/> }/>
                <Route path="/certificates" element={ <Certificates/> }/>
                <Route path="/works" element={ <Works/> }/>
            </Routes>
        </BrowserRouter>
    )
}