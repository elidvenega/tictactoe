import React, { useState } from 'react';
import './style.css';

function Box(props) {
    const [text, setText] = useState('')

    const toggleText = () => {
        if(text === '') {
            setText(props.currentState)
            props.changeTurn(props.row, props.col)
        }
    }
    return <div className="box" onClick={toggleText}>{text}</div>
}

export default Box;