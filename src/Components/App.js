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
  const [playListName, setPlayListName] = useState("album of something!")
  const [playListTracks, setPlayListTracks] = useState([
    {
      singerName: "Tiny Dancer",
      artist: "Elton John",
      album: "Madman Across The Water",
      id:4
    },
    {
      singerName: "Tiny Dancer",
      artist: "Tim McGraw",
      album: "Love Story",
      id:5
    },
    {
      singerName: "Tiny Dancer",
      artist: "Rockabye Baby!",
      album: "Lullaby Renditions of Elton John",
      id:6
    },
  ])

  function addTrack(newTrack){
    if(playListTracks.find(savedTrack => savedTrack.id === newTrack.id)) {
      return playListTracks;
    }
    setPlayListTracks((prevState) => {
      return [...prevState, newTrack]
    })
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar></SearchBar>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack}></SearchResults>
          <PlayList
            playListName={playListName}
            playListTracks={playListTracks}
          ></PlayList>
        </div>
      </div>
    </div>
  );
}

export default App;
