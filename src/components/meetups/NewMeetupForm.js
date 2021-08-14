import React from 'react'
import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm() {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const adressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const titleEntered = titleInputRef.current.value;
        const imageEntered = imageInputRef.current.value;
        const adressEntered = descriptionInputRef.current.value;
        const decsriptionEntered = descriptionInputRef.current.value;

        const meetupData = {
            title: titleEntered,
            image: imageEntered,
            adress: adressEntered,
            description: decsriptionEntered
        }

    };

   

    return (
       <Card>
           <form className={classes.form} onSubmit={submitHandler}>
             <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title" ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" required id="image" ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="adress">Adress</label>
                <input type="text" required id="adress" ref={adressInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="decription">Description</label>
                <textarea required id="decription" roes='5' ref={descriptionInputRef} />
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
           </form>
       </Card>
    )
}

export default NewMeetupForm
