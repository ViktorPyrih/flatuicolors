import {useState} from "react";
import executeAsync from "../../utils/executeAsync";

function Animation({propertyName, from, to, children}) {
    const [propertyValue, setPropertyValue] = useState(from);
    const style = {[propertyName]: propertyValue};
    if (propertyValue === from) {
        executeAsync(() => setPropertyValue(to));
    }

    return (
        <div style={style}>{children}</div>
    );
}

export default Animation;
