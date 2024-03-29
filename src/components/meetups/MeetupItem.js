import React from 'react'
import { useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';


function MeetupItem(props) {

    const favoritesContext = useContext(FavoritesContext);

    const itemIsFavorite = favoritesContext.isItemFavorite(props.id);

    // const removeFromFavoritesHandler = (favoriteId) => {
    //     fetch('https://meetup-app-4c489-default-rtdb.firebaseio.com/favorites.json',
    //     {
    //         method: 'DELETE',
    //         body: JSON.stringify(favoriteId),
    //         headers: {
    //             'Contnt-Type': 'pplication/json'
    //         }

    //     })
    // }

    const addToFavoritesHandler = (favorite) => {
        console.log('OD CALL:::', favorite);
        fetch('https://meetup-app-4c489-default-rtdb.firebaseio.com/favorites.json',
        {
            method: 'POST',
            body: JSON.stringify(favorite),
            headers: {
                'Contnt-Type': 'application/json'
            }
        });
    }

    const toggleFavoriteStatusHandler = () => {
        if (itemIsFavorite) {
            favoritesContext.removeFavorite(props.id);
          //  removeFromFavoritesHandler(props.id);
        } else {
            const newFavorite = {
            id: props.id,
            title: props.title,
            decsription: props.description,
            image: props.image,
            address: props.adress
        }
            favoritesContext.addFavorite(newFavorite);
            addToFavoritesHandler(newFavorite);
        }
    }

    return (
        <li className={classes.item}>
            <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
        </div>
        </Card>
        </li>
    )
}

export default MeetupItem
