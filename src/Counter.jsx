import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function addCount() {
        setCount(count + 1);
    }
    function subtractCount() {
        setCount(count - 1);
    }

    return (
        <div>
            <p>The number is currently {count}.</p>
            <button onClick={addCount}>Add 1</button>
            <button onClick={subtractCount}>Subtract 1</button>
        </div>
    );
}

export default Counter;