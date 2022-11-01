import React, { useState } from 'react'

const Question = (props) => {
    const { title, info } = props
    // add a state variable here
    const [show, setShow] = useState(false);
    return (
        <article className="question">
            <header>
                <h4 className=''>{title}</h4>
                {/* make this toggle functionality onClick */}
                <button 
                    onClick={() => setShow(!show)}
                >
                    {show ? '-' : '+'}
                </button>
            </header>
            {/* make this render conditionally */}
            {show ? <p>{info}</p> : null}

        </article>
    )
}

export default Question
