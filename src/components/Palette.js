import './Palette.css';
import Rectangle from "./Rectangle";
import {Link} from "react-router-dom";

function Palette({pallet, onClick}) {
    return (
        <li className="pallet-container__item">
            <Link to="#" className="pallet-container-link" onClick={onClick}>
                <div className="pallet">
                    {
                        pallet.colors.map(color =>
                            <Rectangle width="57px" height="38px" backgroundColor={color.color}></Rectangle>
                        )
                    }
                </div>
                <div className="pallet-info">
                    <h3 className="pallet-info__title">{pallet.paletteName}</h3>
                    <span className="pallet-info__emoji">{pallet.emoji}</span>
                </div>
            </Link>
        </li>
    );
}

export default Palette;
