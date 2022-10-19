import './style.css'


export default function Banner() {
    return (
        <div className="banner">
            <div className="content-limiter">
                <div className="description">
                    <h3>Richardy Tanure</h3>
                    <p className='big'>Estudante de Eng. da Computação</p>
                    <p className='big'>Desenvolvedor FullStack</p>
                </div>
                <div className="avatar">
                    <img src="images/avatar.png" /> 
                </div>
            </div>
        </div>
    )
}