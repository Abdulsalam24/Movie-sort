import React from 'react'
import {motion} from 'framer-motion'



const Movie = ({movie}) => {


    return (

        <motion.div 
        animate={{opacity : 1}} 
        initial={{opacity : 0}} 
        layout 
        className="movies-grid">
            <h4><span>Title :</span> {movie.title}</h4>
            <p><span>Date :</span>  {movie.release_date}</p>
            <img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt=""/>
        </motion.div>
    )
}


export default Movie