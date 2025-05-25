import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increase = () =>{
        setCount(count + 1)
    }
    const decrease = () => {
        if (count > 0){
            setCount(count - 1)
        }
    }
    const reset = () =>{
        setCount(0)
    }

  return (
    <div>
        <div className="count-card">
            <h1>Counter Button</h1>
            <p>Count Number: {count}</p>
            <div className="buttonWrap">
                <button onClick={decrease}>-</button>
                <button onClick={increase}>+</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Counter