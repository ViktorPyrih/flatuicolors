import {useNavigate} from "react-router-dom";
import {DURATION_MILLIS} from "../components/animation/Transition";

function useTransition(setIsInProgress) {
    const navigate = useNavigate();
    return (e, url) => {
        e.preventDefault();
        setIsInProgress(true);
        setTimeout(() => navigate(url), DURATION_MILLIS);
    }
}

export default useTransition;
