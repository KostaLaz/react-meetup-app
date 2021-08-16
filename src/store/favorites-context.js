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

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}