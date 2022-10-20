import './App.css';
import PlayList from './PlayList/PlayList';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

function App() {
  return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar></SearchBar>
        <div class="App-playlist">
          <SearchResults></SearchResults>
          <PlayList></PlayList>
        </div>
      </div>
    </div>
  );
}

export default App;
