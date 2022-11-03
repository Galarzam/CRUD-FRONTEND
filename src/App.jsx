import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TeamsPage from "./components/TeamsPage"
import TeamForm from "./components/TeamForm"
import NotFound from "./components/NotFound"
import { TeamContextProvider } from "./context/TeamProvider";

function App() {
  return (
    <TeamContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<TeamsPage />} />
        <Route path='/new' element={<TeamForm />} />
        <Route path='/edit/:id' element={<TeamForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </TeamContextProvider>
  )
}

export default App