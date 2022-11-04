import './Option.css';

function Option({value, onSelect, children}) {
    return (
        <li className="option" onClick={() => onSelect(value)}>
            {children}
        </li>
    );
}

export default Option;
