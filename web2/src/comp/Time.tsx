import React from 'react';

function Time() {
    return (
        <>
            <h1>Its Game Time</h1>
            <br></br>
            <div>Current time is: {new Date().toISOString()}</div>
        </>
    );
}

export default Time;
