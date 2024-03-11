import React from 'react'
import Navbar from './Navbar'
import Welcome from './Welcome'
import Home from './Home'
import { useState, useEffect } from 'react'

const Main = () => {
  const [movies, setMovies] = useState([])
  const [menu, setMenu] = useState("")
  const [search, setSearch] = useState(false)

  const getMovies = async () => {
    try {
      await fetch(menu == "home" || menu == "" ? `https://api.themoviedb.org/3/movie/upcoming?api_key=3b978cbbac59f0cf6f5d948df6a1c8e0` : `https://api.themoviedb.org/3/discover/${menu ? menu : "movie"}?api_key=3b978cbbac59f0cf6f5d948df6a1c8e0`)
        .then(res => res.json())
        .then(json => setMovies(json.results))
    } catch (err) {
      console.error(err)
    }

  }

  useEffect(() => {
    getMovies()
  }, [menu])


  return (
    <div className='bg-black'>
      <div className='flex  h-full w-full'>
        <div className='w-1/12'>
          <Navbar  setMenu = {setMenu} setSearch = {setSearch} search = {search}/>
        </div>
        <div className='w-11/12'>
          <Welcome movies={movies[2]} />
        </div>
      </div>
      <div>
        <Home movies={movies}/>
      </div>

    </div>
  )
}

export default Main