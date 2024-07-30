import React from 'react';
import './App.css';
import Counter from "./comp/Counter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Time from "./comp/Time";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Counter startingCount={0} />}/>
                <Route path="/ten" element={<Counter startingCount={10} />}/>
                <Route path="/five" element={<Counter startingCount={5} />}/>
                <Route path="/time" element={<Time />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
