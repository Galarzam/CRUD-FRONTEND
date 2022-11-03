import React from 'react'
import { useTeam } from "./../context/TeamProvider";
import { useNavigate } from "react-router-dom";

function TeamCard({ team }) {
  const { deleteTeam } = useTeam()
  const navigate = useNavigate()
  return (
    <div className='border'>
      <div >
        <img src={team.logo} alt={team.name} className='object-contain w-full h-80' />
      </div>
      <h2 className='text-center font-bold py-2'>{team.name.toUpperCase()}</h2>
      <div className="button__container flex items-center justify-center gap-5 p-2">
        <button
          className='bg-blue-700 text-white px-5 py-2 rounded hover:scale-105'
          onClick={() => navigate(`/edit/${team.id}`)}
        >
          Editar
        </button>
        <button
          className='bg-red-700 text-white px-5 py-2 rounded hover:scale-105'
          onClick={() => deleteTeam(team.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default TeamCard