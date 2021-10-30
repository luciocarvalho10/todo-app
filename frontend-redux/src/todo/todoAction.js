import axios from 'axios'

const URL = 'http://localhost:3000/api/todos'

const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})

const search = () => {
  const req = axios.get(`${URL}?sort=-createdAt`)
  return { type: 'TODO_SEARCHED', payload: req }
}

const add = description => dispatch =>
  axios
    .post(URL, { description })
    .then(res => dispatch(clear()))
    .then(res => dispatch(search()))

const markAsDone = todo => dispatch =>
  axios
    .put(`${URL}/${todo._id}`, { ...todo, done: true })
    .then(resp => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: resp.data })) //opcional
    .then(resp => dispatch(search()))

const markAsPending = todo => dispatch =>
  axios
    .put(`${URL}/${todo._id}`, { ...todo, done: false })
    .then(resp => dispatch(search()))

const remove = todo => dispatch =>
  axios.delete(`${URL}/${todo._id}`).then(resp => dispatch(search()))

const clear = () => ({type: 'TODO_CLEAR'})
export { changeDescription, add, search, markAsDone, markAsPending, remove, clear }
