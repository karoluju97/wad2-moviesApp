import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const Upcoming = () => {
    const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  // New
    return !("favorite" in m);
  });
    return (
        <PageTemplate
            title='Upcoming movies'
            movies={movies}  /* Changed */
            action={(movie) => {
                return <AddToFavoritesButton movie={movie} />;
            }}
        />
    );
};

export default Upcoming