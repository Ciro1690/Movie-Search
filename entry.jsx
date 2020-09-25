import React from 'react'
import ReactDOM from 'react-dom'
import SearchMovies from './searchMovie'

class Main extends React.Component {
    render() {
        return (
            <div className='container'>
                <h1 className='title'>React Movie Search</h1>
                <SearchMovies />
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('content')
    ReactDOM.render(<Main />, root)
})