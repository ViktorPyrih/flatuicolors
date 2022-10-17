import './PalettePage.css';
import notifySound from '../assets/audio/notify_sound.mp3';
import {Link, useLoaderData} from "react-router-dom";
import Rectangle from "../components/Rectangle";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {useState} from "react";
import CopySuccess from "../components/CopySuccess";
import TransitionProvider from "../components/animation/TransitionProvider";
import OptionList from "../components/OptionList";
import {rgb, rgba} from "../utils/ColorUtils";

const options = ["HEX (#AA1923)", "HEX (AA1923)", "RGBA - (1,2,3,1.0)", "RGB - (1,2,3)"];
const ANIMATION_MILLIS = 700;

function PalettePage() {
    const [soundOn, setSoundOn] = useState(true);
    const [selectedColor, setSelectedColor] = useState(undefined);
    const [selectedColorFormat, setSelectedColorFormat] = useState(0);

    const pallet = useLoaderData();

    if (selectedColor) {
        return (
            <CopySuccess color={selectedColor}/>
        );
    }

    const colorFormatTitle = `Copy format: ${options[selectedColorFormat]}`;
    const soundToggleText = soundOn ? 'Sound On 🔊' : 'Sound Off 🔇';

    return (
        <TransitionProvider render={
            onClick =>
                <>
                    <Header/>
                    <section className="pallet-page">
                        <div className="pallet-page-heading">
                            <Link
                                to="#"
                                className="link link_color_black pallet-page-heading__back"
                                onClick={e => onClick(e, "/")}>
                                ← Back
                            </Link>
                            <OptionList title={colorFormatTitle} options={options}
                                        onSelect={selectedIndex => setSelectedColorFormat(selectedIndex)}/>
                            <Link
                                to="#"
                                className="link link_color_black pallet-page-heading__toggle"
                                onClick={e => {
                                    e.preventDefault();
                                    setSoundOn(!soundOn);
                                }}>
                                {soundToggleText}
                            </Link>
                        </div>
                        <div className="pallet-page-content">
                            {
                                pallet.colors.map((color, i) =>
                                    <Rectangle width="20%" height="25%" backgroundColor={color.color} copy={true}
                                               key={i} onClick={() =>
                                                   handleColorClick(color.color, selectedColorFormat, soundOn, setSelectedColor)
                                    }>
                                        {color.name}
                                    </Rectangle>
                                )
                            }
                        </div>
                    </section>
                    <Footer/>
                </>
            }>
        </TransitionProvider>
    );
}

function handleColorClick(color, format, soundOn, setSelectedColor) {
    const formattedColor = formatColor(color, format);
    navigator.clipboard.writeText(formattedColor)
        .then(() => {
            if (soundOn) {
                new Audio(notifySound).play()
                    .then(() => console.log('Sound finished'));
            }
            setTimeout(() => setSelectedColor(undefined), ANIMATION_MILLIS);
            setSelectedColor({backgroundColor: color, formattedColor});
        });
}

function formatColor(color, format) {
    switch (format) {
        case 1:
            return color.substring(1);
        case 2:
            return rgba(color.substring(1));
        case 3:
            return rgb(color.substring(1));
        default:
            return color;
    }
}

export default PalettePage;
