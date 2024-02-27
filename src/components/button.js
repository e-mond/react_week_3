import React from 'react';

function Button(props) {
    console.log(props); 
    return <button style={{ backgroundColor: props.color }}>{props.title}</button>; 
}

export default Button;
