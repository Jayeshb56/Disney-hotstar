import React, { useEffect, useState } from 'react'
import Dragon from '../Image/c1.jpg'
import { json } from 'stream/consumers'
import {Link} from 'react-router-dom'

interface movieProps {
  movies : any
  search : boolean
  searchRef : any
}

const Home = (props:movieProps) => {

  const [searchKeys, setSearchKeys] = useState("")
  
  return (
    <div>
     {props.search &&
      <input ref = {props.searchRef} onChange={(e) => setSearchKeys(e.target.value)} type="text"  className= "ml-28 mt-3 bg-gray-800 border border-gray-800 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-800 dark:focus:border-gray-800 outline-none"
       placeholder="Movies, Shows and More" required />}
    <h1 className='mt-5 text-slate-300 pl-28 font-bold text-xl '>Latest Release</h1>
    <div className='grid grid-cols-6 pl-24 pt-7'>
      {props.movies?.filter((data:any) => data?.title?.includes(searchKeys) || data?.name?.includes(searchKeys)).map((data:any) => {
        return <>
         
          <Link to="./details" state={{data:data}}>  <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2">
              <img className="w-full" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Sunset in the mountains" />

            </div>
            </Link>
          
        </>
      })}
    </div>
    </div>
  )
}

export default Home