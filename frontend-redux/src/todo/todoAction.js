import axios from 'axios'

const URL = 'http://localhost:3000/api/todos'

export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})

export const search = () => {
  const req = axios.get(`${URL}?sort=-createdAt`)
  return { type: 'TODO_SEARCHED', payload: req }
}

export const add = description =>
  dispatch => axios.post(URL, { description })
    .then(res => dispatch({ type: 'TODO_ADDED', payload: res.data }))
    .then(res => dispatch(search()))


export const markAsDone = todo =>
  dispatch => axios.put(`${URL}/${todo._id}`, {...todo, done: true})
    .then(resp => dispatch({type: 'TODO_MARKED_AS_DONE', payload: resp.data}))
    .then(resp => dispatch(search()))

export const markAsPending = todo =>
  dispatch => axios.put(`${URL}/${todo._id}`, {...todo, done: false})
    .then(resp => dispatch({type: 'TODO_MARKED_AS_PENDING', payload: resp.data}))
    .then(resp => dispatch(search()))