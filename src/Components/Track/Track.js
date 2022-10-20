export default function Track() {
    const isRemoval = true
    return (
        <div class="Track">
            <div class="Track-information">
                <h3> track name will go here</h3>
                <p> track artist will go here track album will go here </p>
            </div>
            <button class="Track-action">
                {isRemoval ? <button className="Track-action">-</button> : <button className="Track-action">+</button>}
            </button>
        </div>
    )
}