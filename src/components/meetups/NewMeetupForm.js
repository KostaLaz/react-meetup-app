import React from 'react'
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm() {
    return (
       <Card>
           <form className={classes.form}>
             <div className={classes.control}>
                <label htmlFor="title"></label>
                <input type="text" required id="title" />
            </div>
            <div className={classes.control}>
                <label htmlFor="image"></label>
                <input type="url" required id="image" />
            </div>
            <div className={classes.control}>
                <label htmlFor="decription"></label>
                <textarea required id="decription" roes='5' />
            </div>
            <div className={classes.action}>
                <button>Add Meetup</button>
            </div>
           </form>
       </Card>
    )
}

export default NewMeetupForm
