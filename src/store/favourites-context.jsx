import { createContext, useState } from "react";
const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourites: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
});

export const FavouritesContextProvider = (props) => {
  const [userFavourites, setUserFavourites] = useState([]);
  function addFavouriteHandler(favouriteMeetup) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMeetup);
    });
  }
  function removeFavouriteHandler(meetupId) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemIsFavouriteHandler(meetupId) {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  }
  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourites: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };
  return (
    <FavouritesContext.Provider value={context}>
      {props.children};
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
