import FavouritesContext from "../../store/favourites-context";
import { Link } from "react-router-dom";
import "./mainNavigation.css";
import { useContext } from "react";
const MainNavigation = () => {
  const fvtContext = useContext(FavouritesContext);
  return (
    <header className="header">
      <div className="logo">My Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">
              My Favourites
              <span className="badge">{fvtContext.totalFavourites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
