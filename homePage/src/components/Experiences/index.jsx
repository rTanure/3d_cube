import './style.css'

export default function Experiences() {
  return (
    <div className="experiences-box">
      <div className="content-limiter">
        <h2>Experiências</h2>
        <div className="experiences-list">
          <div className="experience-box">
            <img src="svg/books.svg" alt="" />
            <div className="description">
              <h4>Acadêmico</h4>
              <a href="/academic"><button>Acessar</button></a>
            </div>
          </div>
          <div className="experience-box">
            <img src="svg/computer.svg" alt="" />
            <div className="description">
              <h4>Certificados</h4>
              <a href="/certificates"><button>Acessar</button></a>
            </div>
          </div>
          <div className="experience-box">
            <img src="svg/employer.svg" alt="" />
            <div className="description">
              <h4>Trabalhos</h4>
              <a href="/works"><button>Acessar</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}