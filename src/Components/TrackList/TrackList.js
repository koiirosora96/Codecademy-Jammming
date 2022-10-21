import { useEffect } from "react";
import Track from "../Track/Track";

export default function TrackList(props) {
    return (
        <div className="TrackList">
                {props.tracks?.map((track) => {return <Track track={track} key={track.id}></Track>})}
        </div>
    )
}