import React, { useState } from 'react'
// import { useEffect } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    // useEffect(() => {
    //     console.log("asd")
    // }, [counter])

    function increase() {
        return setCounter(old => old + 1)
    }
    function decrease() {
        return setCounter(old => old - 1)
    }

    return (
        <div className='text-center my-44'>
            <h1 className='text-4xl font-mono my-11'>Counter: {counter}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Counter