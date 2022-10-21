import TrackList from "../TrackList/TrackList";

export default function PlayList() {
    return (
        <div className="Playlist">
            <input value="New Playlist"/>
            <TrackList></TrackList>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}