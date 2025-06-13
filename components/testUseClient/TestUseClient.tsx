'use client';

import {JSX, useState, useEffect} from "react";

export const TestUseClient = (): JSX.Element => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('sdfsdf');
    })

    return(
        <>
            <button onClick={() => setCounter(counter +1)}>Кнопка</button>
            <div>{counter}</div>
        </>
    )
}