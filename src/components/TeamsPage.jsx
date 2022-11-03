import React, { useEffect } from 'react'
import TeamCard from "./TeamCard";
import { useTeam } from "./../context/TeamProvider";


function TeamsPage() {

  const { teams, loadTeams } = useTeam();

  useEffect(() => {
    loadTeams();
  }, [])

  function renderMain() {
    if (teams.length === 0) return <h1>Aún no hay equipos</h1>

    return teams.map(team => (
      <TeamCard team={team} key={team.id} />
    ))
  }

  return (
    <div>
      <h1 className='text-center font-black text-3xl underline'>Equipos</h1>
      <div className='grid grid-cols-3 w-6/12 m-auto mt-5 gap-4'>
        {renderMain()}
      </div>
    </div>
  )
}

export default TeamsPage