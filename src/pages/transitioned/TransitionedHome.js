import Home from "../Home";
import pallets from "../../data/pallete.json";
import Transition from "../../components/animation/Transition";

function TransitionedHome() {
    return (
        <Transition reverse={true}>
            <Home pallets={pallets}/>
        </Transition>
    );
}

export default TransitionedHome;
