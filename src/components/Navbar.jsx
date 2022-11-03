import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar-background text-white p-5 font-bold'>
      <h1 className='text-center text-3xl font-mono'>CRUD equipos de  futbol</h1>
      <ul className='flex justify-center gap-5 mt-5 font-mono text-xl'>
        <li>
          <Link className='hover:text-zinc-400' to={'/'}>Inicio</Link>
        </li>
        <li>
          <Link className='hover:text-zinc-400' to={'/new'}>Añadir equipo</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar