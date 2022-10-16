import './Option.css';

function Option({index, onSelect, children}) {
    return (
        <li className="option" onClick={() => onSelect(index)}>
            {children}
        </li>
    );
}

export default Option;
