import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            </div>
    );
};

export default Counter;


    
