import React from 'react'
import { useState } from 'react';

const Modal = (props) => {

    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    const deleteButtonHandler = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn" >Confirm</button>
            <button className="btn btn--alt" onClick={props.onCancelHandler}>Cancel</button>
        </div>
    );
}

export default Modal
