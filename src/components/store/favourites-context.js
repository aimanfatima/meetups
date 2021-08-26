import { createContext, useState } from 'react';

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0
});

function FavousitesContextProvider(props) {
    const [userFavourites, setUserFavourite] = useState([])

    function addFavouriteHandler(favoriteMeetup) {
        setUserFavourite((prevUserFavorite) => {
            return prevUserFavorite.concat(favoriteMeetup);
        });
    }

    function removeFavouriteHandler(meetupId) {
        setUserFavourite((prevUserFavorite) => {
            return prevUserFavorite.filter(meetup => meetup.id !== meetupId);
        });
    }
    
    function itemIsFavouriteHandler(meetupId) {
        return userFavourites.some(meetup => meetup.id === meetupId);
    }
    
    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length
    };

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}