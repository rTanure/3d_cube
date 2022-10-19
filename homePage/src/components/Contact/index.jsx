import "./style.css"

const contacts = {
    links: {
        "github": "https://github.com/rTanure",
        "linkedin": "https://www.linkedin.com/in/richardy-rodrigues-tanure-342a26207/",
        "linktree": "https://google.com"
    },
    contact: {
        "email" : "richardy.tanure@hotmail.com",
        "phoneNumber" : "+55 (33) 99867-4690"
    }
}

export default function Contact() {
    return (
        <div className="contact-box">
            <div className="content-limiter">
                <h2>Contato</h2>
                <div className="infos">
                    <div className="contact-links">
                        <a href={contacts.links.github} target="blank" className="github">
                            <button>
                                <div className="icon">
                                    <img src="svg/github.svg" alt="link image" />
                                </div>
                                <span>GitHub</span>
                            </button>
                        </a>
                        <a href={contacts.links.linktree} target="blank" className="linktree ">
                            <button>
                                <div className="icon">
                                    <img src="svg/linktree.svg" alt="link image" />
                                </div>
                                <span>Link Tree</span>
                            </button>
                        </a>
                        <a href={contacts.links.linkedin} target="blank" className="linkedin">
                            <button>
                                <div className="icon">
                                    <img src="svg/linkedin.svg" alt="link image" />
                                </div>
                                <span>Linkedin</span>
                            </button>
                        </a>
                    </div>
                    <span className="h-div" />
                    <span className="v-div" />
                    <div className="contact-infos">
                        <div className=" center-infos">
                            <div className="single-info email">
                                <div className="icon">
                                    <img src="svg/email.svg" alt="link image" />
                                </div>
                                <span>{contacts.contact.email}</span>
                            </div>
                            <div className="single-info phone">
                                <div className="icon">
                                    <img src="svg/phone.svg" alt="link image" />
                                </div>
                                <span>{contacts.contact.phoneNumber}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}