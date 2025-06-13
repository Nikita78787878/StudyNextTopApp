import { useState } from 'react';

function expensiveComputation() {
    const start = performance.now();

    // Симуляция тяжёлой операции (блок на 200ms)
    while (performance.now() - start < 200) {}

    const end = performance.now();
    const duration = end - start;

    console.log(`🔥 expensiveComputation took ${duration.toFixed(2)} ms`);
    return { value: 42, duration };
}

export function BadExample() {
    // Здесь вызывается сразу, при каждом рендере!
    const result = expensiveComputation();
    const [value, setValue] = useState(result.value);
    const [duration, setDuration] = useState(result.duration);

    const increment = () => {
        setValue(value + 1);
        setDuration(0); // Очистим время, чтобы показать, что функция не вызвалась снова
    };

    return (
        <div style={{ border: '1px solid red', padding: '10px', marginBottom: '20px' }}>
            <h3>Плохой пример (вычисление при каждом рендере)</h3>
            <p>Value: {value}</p>
            <p>Computation time: {duration.toFixed(2)} ms</p>
            <button onClick={increment}>+1</button>
        </div>
    );
}

export function GoodExample() {
    // Здесь функция вызывается только при инициализации состояния
    const [state, setState] = useState(() => expensiveComputation());
    const [value, setValue] = useState(state.value);
    const [duration, setDuration] = useState(state.duration);

    const increment = () => {
        setValue(value + 1);
        setDuration(0);
    };

    return (
        <div style={{ border: '1px solid green', padding: '10px' }}>
            <h3>Хороший пример (ленивая инициализация)</h3>
            <p>Value: {value}</p>
            <p>Computation time: {duration.toFixed(2)} ms</p>
            <button onClick={increment}>+1</button>
        </div>
    );
}