import './CopySuccess.css';
import Animation from "./animation/Animation";

const MIN_FONT_SIZE = "50px";
const MAX_FONT_SIZE = "110px";

function CopySuccess({color: {backgroundColor, formattedColor}}) {
    const style = {backgroundColor};
    return (
        <div className="background copy-success-container" style={style}>
            <div className="copy-success-container-layout"/>
            <Animation propertyName="fontSize" from={MIN_FONT_SIZE} to={MAX_FONT_SIZE}>
                <h1 className="align-center copy-success-container__title animated_700ms">DONE!</h1>
            </Animation>
            <p className="align-center copy-success-container__color">{formattedColor}</p>
        </div>
    );
}

export default CopySuccess;
