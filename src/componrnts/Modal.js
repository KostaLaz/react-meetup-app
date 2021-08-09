import React from 'react'
import { useState } from 'react';

const Modal = (props) => {

    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    const onConfirmHandler = () => {
        setModalIsOpen(false);
    };

    const onCancelHandler = () => {
        props.onCancelHandler();
    };

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn" >Confirm</button>
            <button className="btn btn--alt" onClick={onCancelHandler}>Cancel</button>
        </div>
    );
}

export default Modal
