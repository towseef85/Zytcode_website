import React from 'react'
import ReactTypingEffect from "react-typing-effect";


function Typing() {
    return (
        <div className="container">
            <p className="text-white">We're<span class="typed-text">
            <ReactTypingEffect
                      text={["Developers", "Consultants", "Designers"]}
                    ></ReactTypingEffect>
                </span></p>
        </div>
    )
}

export default Typing
