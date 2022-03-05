import React, { useEffect } from 'react'

const Button = (
  {setFiltered , popular , setGenre , genre }) => {

    useEffect(() => {
        if(genre === 0){
            setFiltered(popular)
            return;
        }
        const filtered = popular.filter((movie) => movie.genre_ids.includes(genre))
        setFiltered(filtered)
    },[genre])

    // useEffect(() => {
    //   handleSearch()
    // },[setText])
  
  return (
    <div className="btn">
        <button 
          className={genre === 0 ? 'active' : ''} 
          onClick={() => setGenre(0)}>
          All
        </button>

        <button 
          className={genre === 28 ? 'active' : ''} 
          onClick={() => setGenre(28)}>
          Action
        </button>

        <button 
          className={genre === 35 ? 'active' : ''} 
          onClick={() => setGenre(35)}>
          Comedy
        </button>
    </div>
  )
}

export default Button