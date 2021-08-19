import React from 'react'
import { useContext, useEffect, useState } from 'react';
import FavoritesContext from '../store/favorites-context'
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {

    const favoritesContext = useContext(FavoritesContext);

    let content;
    const [isLoading, setIsLoading] = useState(true);
    const [loadedFavorites, setLoadedFavorites] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
          'https://meetup-app-4c489-default-rtdb.firebaseio.com/favorites.json'
        ).then(response => {
          return response.json();
        }).then(data => {
          const favorites = [];
          for (const key in data) {
            const favorite = {
              id: key,
              ...data[key]
            }
            favorites.push(favorite);
          }
          setIsLoading(false);
          setLoadedFavorites(favorites);
        });
      }, []);

    if (favoritesContext.totalFavorites === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>
    } else {
       content = <MeetupList meetups={favoritesContext.favorites} />
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default FavoritesPage
