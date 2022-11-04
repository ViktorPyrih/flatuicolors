import './Header.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="layout">
            <div className="header wrapper">
                <div className="header-logo">
                    <Link to="/" className="link logo">FLAT UI COLORS 2</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
