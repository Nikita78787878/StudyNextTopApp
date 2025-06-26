"use client";
export default function Error({error, reset}: {error: Error, reset: () => void}) {
    return <>
        <div> Что-то пошло не так - Root</div>
        <div> {JSON.stringify(error)} </div>
        <button onClick={() => reset}>Ещё раз</button>
    </>
}