import React from 'react';
import './App.css';

function App() {
    var counter = 10;
    return (
        <>
            <h1>Hello World, my name is daniel</h1>
            <br></br>
            <div>Counter: {counter}</div>
            <br></br>
            <button onClick={() => {
                console.log("Count before " +counter)
                counter = counter + 1;
                console.log("Count after " +counter)
            }}>Increase count
            </button>
            <br></br>
            <a href="./time.html">What time is it?</a>
        </>
    );
}

export default App;
