import React from 'react';

function Button(props) {
    return (
        <button className = 'button' disabled={props.disabled}>
            {props.children || 'Забронировать'}
        </button>
    );
}

export default Button;