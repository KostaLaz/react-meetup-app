import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

function FavoritesCOntextProvider(props) {

    const [userFavorites, setUserFavorites] = useState();

    const addFavoriteHandler = (favoriteMeetup) => {
      setUserFavorites((prevUserFavorites) => {
          return prevUserFavorites.concat(favoriteMeetup);
      });
    }

    const removeFavoriteHandler = (meetupId) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id!== meetupId);
        })
    }
    
    const itemIsFavoriteHandler = (meetupId) => {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }


    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}