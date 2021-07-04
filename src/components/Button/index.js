import React from 'react'
import '../../styles/button.scss';

function Button(props) {
    return (
        <button {...props}>{props.name}</button>
    )
}

export default Button
