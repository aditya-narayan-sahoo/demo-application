import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FavouritesContextProvider } from "./store/favourites-context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavouritesContextProvider>
      <App />
    </FavouritesContextProvider>
  </StrictMode>
);
