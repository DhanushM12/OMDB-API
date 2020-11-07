import React from 'react';
import { data } from '../data';
import Header from './Header';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourites } from '../actions';
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log('updated');
      this.forceUpdate();
    });
    //make api call
    //dispatch action
    store.dispatch(addMovies(data));
    console.log('state', store.getState());
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      //found movie
      return true;
    }
    return false;
  };
  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  };
  render() {
    const { movies, search } = this.props; // {movies:{list:[], fav:[], show}, search{}}
    //const movies = this.props.store.getState();
    const { list, favourites, showFavourites } = movies;
    // console.log('Render', this.props.store.getState());
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Header dispatch={this.props.store.dispatch} search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? '' : 'active-tabs'}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? 'active-tabs' : ''}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No Movies to Display!</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
