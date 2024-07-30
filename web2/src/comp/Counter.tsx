import React, {useState} from 'react';

export interface CounterProps {
    startingCount: number
}

function Counter(props: CounterProps) {
    const [counter, setCounter] = useState(props.startingCount);
    return (
        <>
            <br></br>
            <div>Counter: {counter}</div>
            <br></br>
            <button onClick={() => {setCounter(counter + 1)}}>
                Increase count
            </button>
            <br></br>
        </>
    );
}

export default Counter;
