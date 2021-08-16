import React from 'react'
import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList'

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://meetup-app-4c489-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json();
    }).then(data => {
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);

    

  if (isLoading) {
    return <section>
      <p>Loadig...</p>
    </section>
  }
    return (
        <div>
            <MeetupList meetups={loadedMeetups} />
        </div>
    )
}

export default AllMeetupsPage
