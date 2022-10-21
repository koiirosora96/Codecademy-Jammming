import TrackList from "../TrackList/TrackList";

export default function PlayList(props) {
    return (
        <div className="Playlist">
            <input value="New Playlist"/>
            <TrackList 
                tracks={props.playListTracks}
                onRemove={props.onRemove}
                isRemoval={true}
            ></TrackList>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}