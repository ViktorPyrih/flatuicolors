import './Rectangle.css';
import {Link} from "react-router-dom";

function Rectangle({width, height, backgroundColor, copy = false, onClick, children}) {
    const style = {
        width, height, backgroundColor};
    return (
        <div className="rectangle" style={style} onClick={onClick}>
            {
                copy && <Link to="#" className="align-center rectangle__link" onClick={e => e.preventDefault()}>
                    <span className="align-center">
                        COPY
                    </span>
                </Link>
            }
            <span className="rectangle__text">{children}</span>
        </div>
    );
}

export default Rectangle;
