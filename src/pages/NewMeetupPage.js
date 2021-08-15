import React from 'react'
import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    const history = useHistory();
    
    const addMeetupHandler= (meetupData) => {
        fetch('https://meetup-app-4c489-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Contnt-Type': 'pplication/json'
            }
        }
      ).then(() => {
          history.replace('/');
      })
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupPage
