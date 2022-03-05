import React, { useEffect, useState } from 'react'

import Button from './Button';
import Movie from './Movie';

import {motion} from 'framer-motion'


const App = () => {
    const [popular , setPopular] = useState([]);
    const [filtered , setFiltered] = useState([]);
    const [genre , setGenre] = useState(0)
    const [text , setText] = useState('')
    const [search , setSearch] = useState([])
    
    const fetchMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6c288757e59a68ab616ba95e467779dc&language=en-US&page=1')

        const movies = await data.json()

        setPopular(movies.results)
        setFiltered(movies.results)
    }

    useEffect(() => {
        fetchMovie()
    },[])

    

    const searchHandle = (e) => {
        e.preventDefault()
        setSearch(...search , text)
    }

    useEffect(() => {
        if(search === ''){
            setFiltered(popular)
            return;
        }
        const filteredSearch = popular.filter((item) => item.title === search)
        setFiltered(filteredSearch)
        setText('')
    },[search])


  return (
    <motion.div layout className='app'>
        <h1
        >Popular Movies</h1>
        <div className="form">
        <Button 
        setFiltered={setFiltered} 
        popular={popular} 
        filtered={filtered}
        genre={genre}
        setGenre={setGenre}
        />
        <form onSubmit={searchHandle}>
          <input type="text" placeholder='Search Movie ;)'
          value={text}
          onChange={(e) => setText (e.target.value)}
          />
        </form>
        </div>



        <div className='movie-div'>
            {filtered.map((movie) =>{
                return <Movie key={movie.id} movie={movie}/>
            })}
        </div>

    </motion.div>
  )
}

export default App










// Reducer functions are used to update the state in response to actions
















