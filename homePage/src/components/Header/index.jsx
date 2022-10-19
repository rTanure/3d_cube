import { useRef } from 'react'
import './style.css'

export default function Header({atualPage}) {

    let mobileMenu = useRef()

    function closeMobileMenu() {
        mobileMenu.current.classList.add("hidden")
    }

    function openMobileMenu() {
        mobileMenu.current.classList.remove("hidden")
    }

    

    return (
        <header>
            <div className="content-limiter">
                <a href="/"><h1>Richardy Tanure</h1></a>

                <nav className={atualPage + " desktop"}>
                    <ul>
                        <li><a href="/" className='home'>Home</a></li>
                        <li><a href="/projects" className='projects'>Projetos</a></li>
                        <li><a href="/about" className='about'>Sobre mim</a></li>
                        <li><a href="/contact" className='contact'>Contato</a></li>
                    </ul>
                </nav>

                <nav className={atualPage + " mobile"} >
                    <div className="closed-menu">
                        <img
                            onClick={()=>{openMobileMenu()}}
                            src="svg/closed-menu.svg" 
                            alt="closed menu" 
                        />
                    </div>
                    <div className="opened-menu hidden" ref={mobileMenu}>
                        <div className="menu-header">
                            <img 
                                onClick={()=>{closeMobileMenu()}}
                                src="svg/close-icon.svg" 
                                alt="closed menu" 
                            />
                        </div>
                        <ul>
                            <li><a href="/" className='home'>Home</a></li>
                            <li><a href="/projects" className='projects'>Projetos</a></li>
                            <li><a href="/about" className='about'>Sobre mim</a></li>
                            <li><a href="/contact" className='contact'>Contato</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}