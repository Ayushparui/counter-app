import { useState } from "react";
import "./counter.css"


function Counter() {

    const [counter, setCounter] = useState(0)

    function add() {
        setCounter(counter + 1)
    }
    function sub() {
        setCounter(counter - 1)
    }

    return (
        <div>
        <div className="counter_">
        {counter}
        </div>

            <button onClick={add} className="button_add">
                +
            </button>
            <button onClick={sub} className="button_sub">
                -
            </button>
        </div>
    )
}

export default Counter