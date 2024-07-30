import React from 'react';
import './App.css';
import Counter from "./comp/Counter";

function App() {
    return (
        <>
            <h1>Hello World, my name is daniel</h1>
            <Counter startingCount={10}/>
            <Counter startingCount={15}/>
            <Counter startingCount={-70}/>
            <a href="./time.html">What time is it?</a>
        </>
    );
}

export default App;
