import Track from "../Track/Track";

export default function TrackList(props) {
    let data = Array.from(props.tracks)
    console.log("data of trackList : ", data)
    return (
        <div className="TrackList">
                {
                    data.map(track => 
                        <Track 
                            track={track}
                            key={track.id}
                            onAdd={props.onAdd}
                            onRemove={props.onRemove}
                            isRemoval={props.isRemoval} 
                        />
                    )
                }
        </div>
    )
}