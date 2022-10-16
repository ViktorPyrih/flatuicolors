import './OptionList.css';

import {useState} from "react";
import Option from "./Option";
import {ARROW_DOWN, ARROW_UP} from "../data/Constants";

function OptionList({title, options, onSelect}) {
    const [isOpen, setIsOpen] = useState(false);

    const listTitle = isOpen ? `${title} ${ARROW_DOWN}` : `${title} ${ARROW_UP}`;

    return (
        <div className="list-container" onClick={() => setIsOpen(!isOpen)}>
            <h3 className="list-container__title">{listTitle}</h3>
            {
                isOpen && <ul className="list-container__options">
                    {
                        options.map((option, i) => <Option index={i} key={i} onSelect={onSelect}>{option}</Option>)
                    }
                </ul>
            }
        </div>
    );
}

export default OptionList;
