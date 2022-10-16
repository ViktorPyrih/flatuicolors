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

const options = ["HEX (#AA1923)", "HEX (AA1923)"];
const ANIMATION_MILLIS = 700;

function PalettePage() {
    const [soundOn, setSoundOn] = useState(true);
    const [selectedColor, setSelectedColor] = useState(undefined);
    const [selectedColorFormat, setSelectedColorFormat] = useState(0);

    const pallet = useLoaderData();

    if (selectedColor) {
        return (
            <CopySuccess backgroundColor={selectedColor}/>
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
                                pallet.colors.map(color =>
                                    <Rectangle width="20%" height="25%" backgroundColor={color.color} copy={true}
                                               onClick={() =>
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

function handleColorClick(color, format, soundOn, setAnimationColor) {
    const formattedColor = formatColor(color, format);
    navigator.clipboard.writeText(formattedColor)
        .then(() => {
            if (soundOn) {
                new Audio(notifySound).play()
                    .then(() => console.log('Sound finished'));
            }
            setTimeout(() => setAnimationColor(undefined), ANIMATION_MILLIS);
            setAnimationColor(color);
        });
}

function formatColor(color, format) {
    if (format === 1) {
        return color.substring(1);
    }

    return color;
}

export default PalettePage;
