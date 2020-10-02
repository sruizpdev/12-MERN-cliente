import {
  ADD_PROJECT,
  FORM_PROJECT,
  GET_PROJECTS,
  FORM_VALIDATE,
  CURRENT_PROJECT,
  DELETE_PROJECT,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        form: true,
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        errorform: false,
      };

    case FORM_VALIDATE:
      return {
        ...state,
        errorform: true,
      };
    case CURRENT_PROJECT:
      return {
        ...state,
        project: state.projects.filter(
          (project) => project.id === action.payload
        ),
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
        project: null,
      };
    default:
      return state;
  }
};
