import React from 'react'

const Backdrop = (props) => {

    return (
        <div className="backdrop" onClick={props.onCancelModal} />
    )
}

export default Backdrop
