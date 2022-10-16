import PalettePage from "../PalettePage";
import Transition from "../../components/animation/Transition";

function TransitionedPalettePage() {
    return (
        <Transition reverse={true}>
            <PalettePage/>
        </Transition>
    );
}

export default TransitionedPalettePage;
