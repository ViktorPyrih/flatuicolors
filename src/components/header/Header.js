import './Header.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="layout">
            <header className="header wrapper">
                <div className="header-logo">
                    <Link to="/" className="link logo">FLAT UI COLORS 2</Link>
                </div>
            </header>
        </div>
    );
}

export default Header;
