import React, { useState } from 'react';

import './App.css';
import PlayList from './PlayList/PlayList';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      singerName: "Tiny Dancer",
      artist: "Elton John",
      album: "Madman Across The Water",
      id:1
    },
    {
      singerName: "Tiny Dancer",
      artist: "Tim McGraw",
      album: "Love Story",
      id:2
    },
    {
      singerName: "Tiny Dancer",
      artist: "Rockabye Baby!",
      album: "Lullaby Renditions of Elton John",
      id:3
    },
  ])

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar></SearchBar>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults}></SearchResults>
          <PlayList></PlayList>
        </div>
      </div>
    </div>
  );
}

export default App;
