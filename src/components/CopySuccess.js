import './CopySuccess.css';
import Animation from "./animation/Animation";

const MIN_FONT_SIZE = "50px";
const MAX_FONT_SIZE = "110px";

function CopySuccess(props) {
    return (
        <div className="background copy-success-container" style={props}>
            <div className="copy-success-container-layout"/>
            <Animation propertyName="fontSize" from={MIN_FONT_SIZE} to={MAX_FONT_SIZE}>
                <h1 className="align-center copy-success-container__title animated_700ms">DONE!</h1>
            </Animation>
            <p className="align-center copy-success-container__color">{props.backgroundColor}</p>
        </div>
    );
}

export default CopySuccess;
