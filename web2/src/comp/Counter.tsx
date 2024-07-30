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
            <button onClick={() => setCounter(counter + 1)}>
                Increase count
            </button>
            <br></br>
            <a href="/">Home</a> <br/>
            <a href="/five">Five</a> <br/>
            <a href="/ten">Ten</a> <br/>
            <a href="/time">Time</a> <br/>
        </>
    );
}

export default Counter;
