import './style.css'

const projects = [
    {
        "github": "https://github.com/rTanure/GameOfLife",
        "project": "https://rtanure.github.io/GameOfLife/",
        "title": "Game Of Life",
        "description": "Inicialmente desenvolvido pelo matemático britânico John Horton Conway, o jogo da vida é a simulação de como um sistema complexo pode ser formado a partir de elementos mais simples organizados de uma forma expecifica."
    },
    {
        "github": "https://github.com/rTanure/SnakeGame",
        "project": "https://rtanure.github.io/SnakeGame/",
        "title": "Snake Game",
        "description": "Usando as setas direcionais do teclado, movimente a cobra em direção às comidas espalhadas pelo mapa evitando de chocar contra o seu proprio corpo."
    }
]

export default function PersonalProjects() {
    return (
        <div className="personal-projects content-limiter">
            <h2>Projetos Pessoais</h2>
            <div className="project-list">
                <div className="project-card">
                    <div className="links">
                        <a href={projects[0].github} target="blank" className='github'><img  src="svg/github.svg"/></a>
                        <a href={projects[0].project} target="blank" className='site'><img  src="svg/site.svg"/></a>
                    </div>
                    <div className="description">
                        <h4>{projects[0].title}</h4>
                        <p className='small'>{projects[0].description}</p>
                    </div>
                </div>
                <div className="project-card">
                    <div className="links">
                        <a href={projects[1].github} target="blank" className='github'><img  src="svg/github.svg"/></a>
                        <a href={projects[1].project} target="blank" className='site'><img  src="svg/site.svg"/></a>
                    </div>
                    <div className="description">
                        <h4>{projects[1].title}</h4>
                        <p className='small'>{projects[1].description}</p>
                    </div>
                </div>
            </div>
            <div className="see-more">
                <a href="/projects"><button>Mais projetos</button></a>
            </div>
            
        </div>
    )
}