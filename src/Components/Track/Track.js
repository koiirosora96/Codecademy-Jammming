export default function Track(props) {
    function addTrack() {
        props.onAdd(props.track)
    }

    function removeTrack(){
        props.onRemove(props.track)
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artists} | {props.track.album}</p>
            </div>
            <button className="Track-action">
                {props.isRemoval ? <span className="Track-action" onClick={removeTrack}>-</span> : <span className="Track-action" onClick={addTrack}>+</span>}
            </button>
        </div>
    )
}