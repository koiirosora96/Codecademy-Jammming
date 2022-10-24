import TrackList from "../TrackList/TrackList";

export default function PlayList(props) {
    function handleNameChange(e){
        props.onNameChange(e.target.value)
    }

    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
            <TrackList 
                tracks={props.playListTracks}
                onRemove={props.onRemove}
                isRemoval={true}
            ></TrackList>
            <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    )
}