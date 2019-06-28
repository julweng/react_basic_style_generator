import axios from "axios"
import ActionTypes from "./actionTypes"
import { handleDataError } from "actions"

const API_KEY = process.env.API_KEY

const getFontListRequest = () => {
  return {
    type: ActionTypes.GET_FONT_LIST_REQUEST
  }
}

const getFontListSuccess = fonts => {
  return {
    type: ActionTypes.GET_FONT_LIST_SUCCESS,
    fonts
  }
}

const getFontListFailure = err => {
  return {
    type: ActionTypes.GET_FONT_LIST_FAILURE,
    err
  }
}

const getFontList = () => {
  return dispatch => {
    dispatch(getFontListRequest())

    return axios
      .get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`)
      .then(
        res => {
          dispatch(getFontListSuccess(res.data.items))
        },
        err => {
          dispatch(getFontListFailure(err))
          dispatch(handleDataError(err.message))
        }
      )
      .catch(err => dispatch(handleDataError(err.message)))
  }
}

export default getFontList
