/*
  Be sure to import in all of the action types from `../actions`
*/

import { GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE,
    POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_FAILURE,
    DELETE_SMURF_START, DELETE_SMURF_FAILURE, DELETE_SMURF_SUCCESS
} from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  deletingSmurf: false,
  error: ''
}

export const smurfsReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: '',
        smurfs: action.payload
      }
    case POST_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
        error: ''
      }
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        error: '',
        smurfs: action.payload
      }
    case DELETE_SMURF_START:
      return {
        ...state,
        deletingSmurf: true,
        error: '',
      }
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        error: '',
        smurfs: action.payload
      }
    default:
      return state;
  }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
