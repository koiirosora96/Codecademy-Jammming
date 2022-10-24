import { useState } from "react"

export default function SearchBar (props) {
    const [term, setTerm] = useState("")

    function search() {
        props.onSearch()
    }

    function handleTermChange(e) {
        setTerm(e.target.value)
    }

    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} value={term}/>
            <button className="SearchButton" onClick={search}>SEARCH</button>
        </div>
    )
}