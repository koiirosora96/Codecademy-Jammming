import TrackList from "../TrackList/TrackList";

export default function PlayList() {
    return (
        <div class="Playlist">
            <input value="New Playlist"/>
            <TrackList></TrackList>
            <button class="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}