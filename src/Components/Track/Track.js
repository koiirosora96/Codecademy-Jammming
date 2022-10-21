export default function Track(props) {
    const isRemoval = true
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            <button className="Track-action">
                {isRemoval ? <span className="Track-action">-</span> : <span className="Track-action">+</span>}
            </button>
        </div>
    )
}