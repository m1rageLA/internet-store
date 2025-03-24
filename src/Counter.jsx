import React, {useState} from "react";

function Counter(props) {
    const { startCount } = props;
    const [count, setCount] = useState(startCount);
    const [typedCount, setTypedCount] = useState(startCount);

    function addCount() {
        setCount(count + 1);
        setTypedCount(count + 1);
    }
    function subtractCount() {
        setCount(count - 1);
        setTypedCount(count - 1);
    }
    function changeCount(val) {
        setTypedCount(val);
        setCount(val);
    }

    return (
        <div>
            <p>The number is currently {count}.</p>
            <button onClick={addCount}>Add 1</button>
            <button onClick={subtractCount}>Subtract 1</button>
            <input value={typedCount} onChange={e => changeCount(e.target.value)} type="number"></input>
        </div>
    );
}

export default Counter;