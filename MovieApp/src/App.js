import React, { Suspense } from "react";
import "./App.scss";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import DetailsPage from "./components/DetailsPage/DetailsPage.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
// import BookPage from "./components/BookPage/BookPage.jsx";
const HomePage = React.lazy(() => import("homePage/HomePage"));
const DetailsContent = React.lazy(() => import("detailsContent/DetailsContent"));
const BookPage = React.lazy(() => import("bookApp/BookPage"));
const App = () => {
  const history = useHistory();
  const location = useLocation();

  const movieClicked = (movie) => {
    console.log("movie clicked.", movie);
    history.push(`/details/${movie.id}`);

  };

  return (
    <Switch>
      <Route path="/details/:id">
        <Suspense fallback="loading...">
          <DetailsContent
            routing={{ history, location }}
            location={location} />
        </Suspense>
      </Route>
      <Route path="/book">
        <Suspense fallback={"loading..."}>
          <BookPage />
        </Suspense>
      </Route>
      <Route path="/">
        <Suspense fallback={"loading..."}>
          <HomePage
            routing={{ history, location }}
            movieClicked={movieClicked} />
        </Suspense>
      </Route>
    </Switch>
  );
};

export default App;
