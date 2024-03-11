import React, { useState } from 'react'
import Logo from '../Image/logo.png'
import user from '../Image/user.png'
import search from '../Image/search5.png'
import home from '../Image/house.jpg'
import tv from '../Image/tv.png'
import movie from '../Image/movies.png'
// import sport from '../Image/sports.png'
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom"

interface menuProps {
  setMenu: any
  setSearch: any
  search: boolean
  searchRef: any
}

const Navbar = (props: menuProps) => {

  const [touch, setTouch] = useState(false)

  return (
    <div className='z-20 fixed grid grid-cols-2 bg-black h-full w-28'>
      <div onMouseEnter={() => setTouch(true)} onMouseLeave={() => setTouch(false)}>
        <img src={Logo} className='w-28 ml-5 mt-5' />
        <Link to='/signin'><img src={user} className='w-7 ml-5 mt-4 cursor-pointer' /></Link>
        <img onClick={() => {
          setTimeout(() => {
            props.searchRef?.current?.focus()
          }, 1)

          props.setSearch(!props.search)
        }} src={search} className='w-7 ml-5 mt-9 cursor-pointer' />
        <img src={home} onClick={() => {
          props.setSearch(false)
          props.setMenu("home")
        }}
          className='w-7 ml-5 mt-8 cursor-pointer' />
        <img src={tv} onClick={() => {
          props.setSearch(false)
          props.setMenu("tv")
        }}
          className='w-7 ml-5 mt-8 cursor-pointer' />
        <img src={movie} onClick={() => {
          props.setSearch(false)
          props.setMenu("movie")
        }}
          className='w-7 ml-5 mt-8 cursor-pointer' />
        {/* <img src={sport} onClick={() => props.setMenu("sport")} className='w-7 ml-5 mt-8 cursor-pointer' /> */}
      </div>
      {touch && <Fade><div className='bg-opacity-60 z-20 ml-8 w-20  bg-black h-screen font-bold text-base text-slate-300'>
        <h4 className='pt-20'>Signin</h4>
        <h4 className='mt-10'>Search</h4>
        <h4 className='mt-9'>Home</h4>
        <h4 className='mt-9'>Tv</h4>
        <h4 className='mt-9'>Movie</h4>
        {/* <h4 className='mt-9'>Sport</h4> */}
      </div></Fade>}
    </div>
  )
}

export default Navbar