import React, { useEffect, useState } from 'react'
import { Form, Formik } from "formik";
import { useTeam } from "./../context/TeamProvider";
import { useParams, useNavigate } from "react-router-dom";

function TeamForm() {
  const { createTeam, getTeam, updateTeam } = useTeam();
  const [team, setTeam] = useState({
    name: "",
    logo: "",
  })
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTeam = async () => {
      if (params.id) {
        const team = await getTeam(params.id);
        setTeam({
          name: team.name,
          logo: team.logo,
        })
      }
    }
    loadTeam();
  }, [])

  return (
    <div>
      <h1 className='text-center font-bold text-3xl mt-5'>{params.id ? "Editar equipo" : "Crear equipo"}</h1>
      <Formik
        initialValues={team}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateTeam(params.id, values);
            navigate("/")
          } else {
            await createTeam(values);
          }
          setTeam({
            name: "",
            logo: "",
          })
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className='flex flex-col border w-1/4 m-auto mt-5 p-5 gap-5'
          >
            <label
              className='flex flex-col'
            >
              <p className='font-bold'>Nombre</p>
              <input
                className='outline-none border'
                type="text" name='name' onChange={handleChange} value={values.name} />
            </label>
            <label
              className='flex flex-col'
            >
              <p className='font-bold'>Logo</p>
              <input
                className='outline-none border'
                type="text" name='logo' onChange={handleChange} value={values.logo} />
            </label>
            <button
              disabled={isSubmitting}
              className='px-5 py-2 rounded bg-blue-500 text-white m-auto mt-5'
            >
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TeamForm