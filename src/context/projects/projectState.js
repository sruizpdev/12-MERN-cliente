import React, { useReducer } from 'react';
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  FORM_VALIDATE,
  CURRENT_PROJECT,
  DELETE_PROJECT,
} from '../../types';
import ProjectContext from './projectContex';
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
    errorform: false,
    project: null,
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
  const showError = () => {
    dispatch({
      type: FORM_VALIDATE,
    });
  };

  const currentProject = (projectId) => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId,
    });
  };
  const deleteProject = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        showForm,
        getProjects,
        addProject,
        showError,
        currentProject,
        deleteProject,
        errorform: state.errorform,
        project: state.project,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};
export default ProjectState;
