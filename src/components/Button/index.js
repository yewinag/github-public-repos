import React from 'react'

function Button(props) {
    return (
        <button {...props}>{props.name}</button>
    )
}

export default Button
