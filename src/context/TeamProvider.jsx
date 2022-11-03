import { useContext, useState } from "react";
import {
  getTeamsRequest,
  getTeamRequest,
  createTeamRequest,
  updateTeamRequest,
  deleteTeamRequest
} from "./../api/teams.api";

import { TeamContext } from "./TeamContext";

export const useTeam = () => {
  const context = useContext(TeamContext)
  if (!context) {
    throw new Error("useTeam must be used within TeamProvider");
  }
  return context;
}

export const TeamContextProvider = ({ children }) => {

  const [teams, setTeams] = useState([])

  const createTeam = async (team) => {
    try {
      await createTeamRequest(team)
    } catch (error) {
      console.log(error);
    }
  }


  const loadTeams = async () => {
    const response = await getTeamsRequest()
    setTeams(response.data);
  }

  const getTeam = async (id) => {
    try {
      const response = await getTeamRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  const updateTeam = async (id, newFields) => {
    try {
      const response = await updateTeamRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

  }

  const deleteTeam = async (id) => {
    try {
      const response = await deleteTeamRequest(id);
      setTeams(teams.filter(teams => teams.id !== id))
    } catch (error) {
      console.log(error);
    }
  }

  return <TeamContext.Provider value={{ teams, loadTeams, createTeam, deleteTeam, getTeam, updateTeam }}>{children}</TeamContext.Provider>
}