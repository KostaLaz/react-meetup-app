import React from 'react'

const Todo = ( props ) => {

    const deleteHandler = () => {
        console.log('DELETE');
        console.log(props.text);

    }

    return (
        <div className="card">
            <h2>{ props.text }</h2>
            <div>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    );
}

export default Todo
