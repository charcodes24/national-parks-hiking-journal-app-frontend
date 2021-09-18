import { usePromiseTracker } from "react-promise-tracker"

export default function LoadingIndicator() {
    const { promiseInProgress } = usePromiseTracker();


    return (
        promiseInProgress &&
        <h1>Hang on while we fetch some data real quick...</h1>
    )
}