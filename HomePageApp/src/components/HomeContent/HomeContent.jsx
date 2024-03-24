import React, { Suspense, useEffect, useState } from "react";
import QuickBooking from "../QuickBooking/QuickBooking.jsx";
import "./HomeContent.scss";
const MovieCard = React.lazy(() => import("components/MovieCard"))
const dummyItem = [{ name: "Dummy Movie" }]
import  RoutingContext from  "../../utils/RoutingProvider.js";

const HomeContent = (props) => {
  const [movies, setMovies] = useState(dummyItem);

  useEffect(async () => {
    // Add the logic to load the movies from server and set to the state
    const resp = await fetch("http://localhost:5555/movies");
    const data = await resp.json();
    console.log("data", data);
    setMovies(data)
  }, []);

  const movieClicked = (item) => {
    if (typeof props.movieClicked === "function") {
      props.movieClicked(item);
    }
  };

  const renderMovieList = () => {
    let items = movies.map((item) => {
      return (
        <div onClick={() => movieClicked(item)} key={item.name}>
          {/* Load the Movie Card Here */}
          <MovieCard
            title={item.name}
            imageUrl={item.imageUrl}
          />
        </div>
      );
    });
    return items;
  };

  return (
    <div className="home-content-container">
      <RoutingContext.Provider value={props.routing}>
        <QuickBooking></QuickBooking>
        <div className="movies-container">
          <Suspense fallback={"Card Loading..."}>
            {renderMovieList()}
          </Suspense>
        </div>
      </RoutingContext.Provider>
    </div>
  );
};

export default HomeContent;
