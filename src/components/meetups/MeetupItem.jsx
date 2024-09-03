import "./meetupitem.css";
import Card from "../ui/Card";
import FavouritesContext from "../../store/favourites-context";
import { useContext } from "react";
const MeetupItem = ({ image, title, address, description, id }) => {
  const favContexts = useContext(FavouritesContext);
  const itemIsFav = favContexts.itemIsFavourite(id);

  const toggleFavouriteStatus = () => {
    if (itemIsFav) {
      favContexts.removeFavourite(id);
    } else {
      favContexts.addFavourites({
        id: id,
        title: title,
        description: description,
        address: address,
        image: image,
      });
    }
  };
  return (
    <li className="item">
      <Card>
        <div className="image">
          <img src={image} alt="item" />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className="actions">
          <button onClick={toggleFavouriteStatus}>
            {itemIsFav ? "Remove from Favourites" : "Add to Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
