import './Search.css'

const Search=(props)=>{

    const {setSearch} = props

    return(<>
    <h1>Search</h1>
    <input type="search" placeholder="Searc Your favourite Here..." onChange={(e)=>{
        setSearch(e.target.value)
    }}/>

    </>)
}

export default Search