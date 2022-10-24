import React, { useState } from 'react';

import './App.css';
import PlayList from './PlayList/PlayList';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

import Spotify from '../util/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: "Tiny Dancer",
      artist: "Elton John",
      album: "Madman Across The Water",
      id:1
    },
    {
      name: "Tiny Dancer",
      artist: "Tim McGraw",
      album: "Love Story",
      id:2
    },
    {
      name: "Tiny Dancer",
      artist: "Rockabye Baby!",
      album: "Lullaby Renditions of Elton John",
      id:3
    }
  ])
  const [playListName, setPlayListName] = useState("album of something!")
  const [playListTracks, setPlayListTracks] = useState([])

  function addTrack(track){
    if(playListTracks.find(savedTrack => savedTrack.id === track.id)) {
      return playListTracks;
    }
    setPlayListTracks((prevState) => {
      return [...prevState, track]
    })
  }

  function removeTrack(track){
    let tracks = playListTracks
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)
    setPlayListTracks(tracks)
  }

  function updatePlaylistName(playListName) {
    return setPlayListName(playListName)
  }

  function savePlayList() {
    const tracksURIs = playListTracks.map(track => track.uri)
    Spotify.savePlayList(playListName, tracksURIs).then(() => {
        setPlayListName("New Playlist")
        setPlayListTracks([])
    })
  }

  function search(term) {
    console.log("clicked")
    Spotify.search(term).then(searchResults => {
      setSearchResults({searchResults: searchResults})
    })
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search}></SearchBar>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack}></SearchResults>
          <PlayList
            playListName={playListName}
            playListTracks={playListTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlayList}
          ></PlayList>
        </div>
      </div>
    </div>
  );
}

export default App;
