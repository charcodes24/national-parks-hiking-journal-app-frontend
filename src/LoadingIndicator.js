import { usePromiseTracker } from "react-promise-tracker"

export default function LoadingIndicator() {
    const { promiseInProgress } = usePromiseTracker();


    return (
        promiseInProgress &&
        <h1 className="loading ui orange message">Hang on while we fetch some data real quick...</h1>
    )
}