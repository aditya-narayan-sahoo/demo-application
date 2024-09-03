import "./meetupitem.css";
import Card from "../ui/Card";
const MeetupItem = ({ image, title, address, description }) => {
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
          <button>To Favourites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
