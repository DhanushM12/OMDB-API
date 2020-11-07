import React from 'react';
import Header from './Header';
import MovieCard from './MovieCard';
function App() {
  return (
    <div className="App">
      Hello My OMDB Api
      <Header />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list"></div>
      </div>
    </div>
  );
}

export default App;
