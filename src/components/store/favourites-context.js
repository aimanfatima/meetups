import { createContext, useState } from 'react';

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0
});

function FavousitesContextProvider(props) {
    const [userFavourites, setUserFavourite] = useState([])
    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length
    };

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}