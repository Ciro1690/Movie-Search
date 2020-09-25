import React, {useState} from 'react'
import MovieCard from './movieCard'

export default function SearchMovies(props) {

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()

        const url = `https://api.themoviedb.org/3/search/movie?api_key=bedc72d2a2d857472ba3c6fa7a96736b&language=en-US&query=${query}&page=1&include_adult=false`;
    
        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <form className='form' onSubmit={searchMovies}>
                <label className='label' htmlFor="query">Movie Name</label>
                    <input
                        className="input"
                        type="text"
                        name="query"
                        placeholder="Search"
                        value={query} onChange={(e) => setQuery(e.target.value)}
                        />
                <button className='button' type='submit'>Search</button>   
            </form>
            <div classname='card-list'>
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}