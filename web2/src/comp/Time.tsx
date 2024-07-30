import React from 'react';

function Time() {
    return (
        <>
            <h1>Its Game Time</h1>
            <br></br>
            <div>Current time is: {new Date().toISOString()}</div>
            <a href="/">Home</a> <br/>
            <a href="/five">Five</a> <br/>
            <a href="/ten">Ten</a> <br/>
            <a href="/time">Time</a> <br/>
        </>
    );
}

export default Time;
