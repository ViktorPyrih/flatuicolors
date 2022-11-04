import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="layout">
            <div className="footer wrapper">
                <Link to="/" className="link logo">FLAT UI COLORS 2</Link>
                <p className="footer__info">&copy; Powered by Viktor Pyrih, EPAM Software Engineer</p>
            </div>
        </footer>
    );
}

export default Footer;
