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

const SOUND_ON = 'Sound On 🔊';
const SOUND_OFF = 'Sound Off 🔇';
const ANIMATION_MILLIS = 700;

const OPTIONS = {
    default: "HEX (#AA1923)",
    hex: "HEX (AA1923)",
    rgba: "RGBA - (1,2,3,1.0)",
    rgb: "RGB - (1,2,3)",
};
const COLOR_FORMAT = {
    default: 'default',
    hex: 'hex',
    rgba: 'rgba',
    rgb: 'rgb'
}

function PalettePage() {
    const [soundOn, setSoundOn] = useState(true);
    const [selectedColor, setSelectedColor] = useState();
    const [selectedColorFormat, setSelectedColorFormat] = useState(COLOR_FORMAT.default);

    const pallet = useLoaderData();

    if (selectedColor) {
        return (
            <CopySuccess color={selectedColor}/>
        );
    }

    const colorFormatTitle = `Copy format: ${OPTIONS[selectedColorFormat]}`;
    const soundToggleText = soundOn ? SOUND_ON : SOUND_OFF;

    return (
        <TransitionProvider render={
            onClick =>
                <div className="pallet-page-container">
                    <Header/>
                    <section className="pallet-page">
                        <div className="pallet-page-heading">
                            <Link
                                to="#"
                                className="link link_color_black pallet-page-heading__back"
                                onClick={e => onClick(e, "/")}>
                                ← Back
                            </Link>
                            <OptionList title={colorFormatTitle} options={OPTIONS}
                                        onSelect={selectedFormat => setSelectedColorFormat(selectedFormat)}/>
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
                </div>
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
        case COLOR_FORMAT.hex:
            return color.substring(1);
        case COLOR_FORMAT.rgba:
            return rgba(color.substring(1));
        case COLOR_FORMAT.rgb:
            return rgb(color.substring(1));
        default:
            return color;
    }
}

export default PalettePage;
