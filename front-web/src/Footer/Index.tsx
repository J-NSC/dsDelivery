import './styles.css';
import {ReactComponent as YouTubeicon} from './youtube (2).svg'
import {ReactComponent as LinkedinIcon} from './linkedin.svg'
import {ReactComponent as IntragramIcon} from './instagram.svg'

function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className = "foote-icons">
                <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new">
                    <YouTubeicon />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig/?hl=pt" target="_new">
                    <IntragramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;