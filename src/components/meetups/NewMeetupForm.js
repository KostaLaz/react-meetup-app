import React from 'react'
import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const titleEntered = titleInputRef.current.value;
        const imageEntered = imageInputRef.current.value;
        const addressEntered = addressInputRef.current.value;
        const decsriptionEntered = descriptionInputRef.current.value;

        const meetupData = {
            title: titleEntered,
            image: imageEntered,
            address: addressEntered,
            description: decsriptionEntered
        }
        props.onAddMeetup(meetupData);
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
                <label htmlFor="address">Address</label>
                <input type="text" required id="address" ref={addressInputRef} />
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

export default NewMeetupForm;
