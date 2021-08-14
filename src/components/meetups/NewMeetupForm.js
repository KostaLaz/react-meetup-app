import React from 'react'
import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm() {

    const submitHandler = (event) => {
        event.preventDefault();
    };

    return (
       <Card>
           <form className={classes.form} onSubmit={submitHandler}>
             <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title" />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" required id="image" />
            </div>
            <div className={classes.control}>
                <label htmlFor="adress">Adress</label>
                <input type="text" required id="adress" />
            </div>
            <div className={classes.control}>
                <label htmlFor="decription">Description</label>
                <textarea required id="decription" roes='5' />
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
           </form>
       </Card>
    )
}

export default NewMeetupForm
