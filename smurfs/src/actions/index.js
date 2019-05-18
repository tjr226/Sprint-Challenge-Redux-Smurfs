/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import Axios from 'axios';

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_START })
  Axios.get('http://localhost:3333/smurfs')
      .then(res => {
          // console.log("response", res.data);
          dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data})
      })
      .catch(err => {
          console.log(err);
          dispatch({ type: GET_SMURFS_FAILURE })
      })
}

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE';

export const createSmurf = newSmurf => dispatch => {
    dispatch({ type: POST_SMURF_START })
    Axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            dispatch({ type: POST_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: POST_SMURF_FAILURE })
        })
}

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';

export const deleteSmurf = smurfID => dispatch => {
    dispatch({ type: DELETE_SMURF_START })
    Axios.delete(`http://localhost:3333/smurfs/${smurfID}`)
        .then(res => {
            dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: DELETE_SMURF_FAILURE })
        })
}
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
