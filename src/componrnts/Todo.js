import React from 'react'
import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

const Todo = ( props ) => {

    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    const deleteHandler = () => {
        setModalIsOpen(true);
    }
    const closeModalHandler = () => {
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{ props.text }</h2>
            <div>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal />}
            {modalIsOpen && <Backdrop onCancelModal={closeModalHandler} />}

        </div>
    );
}

export default Todo
