import useTransition from "../../hooks/useTransition";
import {useState} from "react";
import Transition from "./Transition";

function TransitionProvider({render}) {
    const [isInProgress, setIsInProgress] = useState(false);
    const transitionCallback = useTransition(setIsInProgress);
    if (isInProgress) {
        return (
            <Transition redirect={true}>
                {render(transitionCallback)}
            </Transition>
        );
    }

    return (
        <>{render(transitionCallback)}</>
    );
}

export default TransitionProvider;
