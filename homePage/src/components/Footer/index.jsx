import './style.css'

export default function Footer() {
  return(
    <div className="footer-box">
      <div className="footer-header">
       <div className="content-limiter">
        <a href="/"><h2>Richardy R. Tanure</h2></a>
       </div>
      </div>
      <div className="footer-content">
        <div className="content-limiter">
          <div className="site-map">
            <div className="list">
              <div className="title">
                <span className='bold'>site</span>
              </div>
              <ul>
                <li><a href="/">home</a></li>
                <li><a href="/projects">projetos</a></li>
                <li><a href="/about">sobre mim</a></li>
                <li><a href="/contact">contato</a></li>
                <li><a href="/academic">acadêmico</a></li>
                <li><a href="/works">trabalhos</a></li>
                <li><a href="/certificates">certificados</a></li>
              </ul>
            </div>
          </div>
          <div className="social-map">
            <div className="list">
              <div className="title">
                <span className='bold'>social</span>
              </div>
              <ul>
                <li><a href="https://github.com/rTanure" target='blank'>GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/richardy-rodrigues-tanure-342a26207/" target='blank'>Linkedin</a></li>
              </ul>
            </div>
          </div>
          <div className="site-map">
            <div className="list">
              <div className="title">
                <span className='bold'>contato</span>
              </div>
              <ul>
                <li>richadry.tanure@hotmail.com</li>
                <li>+55 (31) 9 9867-4690</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-footer">
        <div className="content-limiter">
          <p>Desenvolvido por: <span className='bold'>Richardy Tanure</span></p>
          <a href="https://github.com/rTanure/homePage" target="blank"><p>Acessar repositório</p></a>
        </div>
      </div>
    </div>
  )
}