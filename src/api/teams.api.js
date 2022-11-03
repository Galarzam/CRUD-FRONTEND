import axios from "axios";

export const createTeamRequest = async (team) => {
  return await axios.post('http://localhost:3000/api/teams', team)
}

export const getTeamsRequest = async () => {
  return await axios.get('http://localhost:3000/api/teams')
}

export const getTeamRequest = async (id) => {
  return await axios.get(`http://localhost:3000/api/teams/${id}`)
}

export const updateTeamRequest = async (id, newFields) => {
  return await axios.patch(`http://localhost:3000/api/teams/${id}`, newFields);
}

export const deleteTeamRequest = async (id) => {
  return await axios.delete(`http://localhost:3000/api/teams/${id}`);
}