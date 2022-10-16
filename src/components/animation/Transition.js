import './Transisition.css';
import {useState} from "react";
import {MIN_WIDTH, MAX_WIDTH} from "../../data/Constants";

const DURATION_MILLIS = 400;

function Transition({duration = DURATION_MILLIS, reverse = false, redirect = false, children}) {
    let from = MIN_WIDTH;
    let to = MAX_WIDTH;
    if (reverse) {
        from = MAX_WIDTH;
        to = MIN_WIDTH;
    }

    const [inProgress, setInProgress] = useState(true);
    const [width, setWidth] = useState(from);
    if (width === from) {
        if (!redirect) {
            setTimeout(() => setInProgress(false), duration);
        }
        setTimeout(() => setWidth(to), 0);
    }

    const style = {width};
    if (inProgress) {
        return (
            <>
                <div className="background background_color_white transition-background animated_400ms" style={style}/>
                {children}
            </>
        )
    }

    return (
        <>{children}</>
    );
}

export {DURATION_MILLIS};
export default Transition;
