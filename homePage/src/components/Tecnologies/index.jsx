import { useEffect, useState } from 'react'
import './style.css'

const techs = [
    {
        name: "HTML",
        id: 0,
        icon: "svg/html.svg",
        color: "#f24d07",
        description: "HyperText Markup Language (HTML) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.",
        level: 5
    },
    {
        name: "CSS",
        id: 1,
        icon: "svg/css.svg",
        color: "#2760e5",
        description: "Cascading Style Sheets (CSS) é um mecanismo para adicionar estilo a um documento web.   ",
        level: 5
    },
    {
        name: "JavaScript",
        id: 2,
        icon: "svg/javascript.svg",
        color: "#ead41c",
        description: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica e é uma das três principais tecnologias da World Wide Web.",
        level: 5
    },
    {
        name: "TypeScript",
        id: 3,
        icon: "svg/typescript.svg",
        color: "#2f72bc",
        description: "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
        level: 5
    },
    {
        name: "React.js",
        id: 4,
        icon: "svg/react.svg",
        color: "#5ccfee",
        description: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
        level: 5
    },
    {
        name: "Git",
        id: 5,
        icon: "svg/git.svg",
        color: "#e44c30",
        description: "Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software,",
        level: 5
    },
    {
        name: "GitHub",
        id: 6,
        icon: "svg/github.svg",
        color: "#1e81f2",
        description: "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.",
        level: 5
    },
    {
        name: "Python",
        id: 7,
        icon: "svg/python.svg",
        color: "#edc932",
        description: "Python, lançada por Guido van Rossum em 1991, é uma linguagem de programação de alto nível, interpretada , imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.",
        level: 5
    },
    {
        name: "C++",
        id: 8,
        icon: "svg/cpp.svg",
        color: "#005494",
        description: "C++ é uma linguagem de programação de uso geral. Desde os anos 1990 é uma das linguagens comerciais mais populares, sendo bastante usada também na academia por seu grande desempenho e base de utilizadores.",
        level: 5
    },
    {
        name: "Node.js",
        id: 9,
        icon: "svg/node.svg",
        color: "#89bb3c",
        description: "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.",
        level: 5
    }
]

export default function Tecnologies() {
    const [selected, setSelected] = useState(1)

    useEffect(()=>{

    }, [selected])
    

    return (
        <div className="box-tecnologies">
            <div className="content-limiter">
                <h2>Tecnologias</h2>
                <div className="tech-painel">
                    <div className="tech-list">
                        <div className="content">
                            <div className="list-box">
                                <div className="single-list">
                                    {
                                        techs.map(({ name, icon, color , id })=>{
                                            let mem = undefined
                                            if(id === selected) {
                                                mem = "selected"
                                            }

                                            return (
                                                <div 
                                                    className={"icon " + name + " " + id + " " + mem} 
                                                    style={{backgroundColor: color}}
                                                    onClick={()=>{ setSelected(id) }}
                                                >
                                                    <img src={icon} alt="" />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <span className="v-div"></span>
                    <span className='h-div'></span>
                    <div className="tech-description">
                        <div className="container">
                            <div className="header">
                                <div className="icon" style={{backgroundColor: techs[selected].color}}>
                                    <img src={techs[selected].icon} alt="" />
                                </div>
                                <h4>{techs[selected].name}</h4>
                            </div>
                            <span className='divider'></span>
                            <p className='big'>{techs[selected].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}