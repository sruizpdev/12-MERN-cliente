import React, { useReducer } from 'react';
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT } from '../../types';
import projectContext from './projectContex';
import projectReducer from './projectReducer';
import { v4 as uuidv4 } from 'uuid';

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: 'Online shop' },
    { id: 2, name: 'intranet' },
    { id: 3, name: 'website' },
  ];
  const initialState = {
    form: false,
    projects: [],
  };
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  const addProject = (project) => {
    project.id = uuidv4();
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        showForm,
        getProjects,
        addProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};
export default ProjectState;
