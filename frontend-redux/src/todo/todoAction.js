import axios from 'axios'

const URL = 'http://localhost:3000/api/todos'

export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})

export const searchList = () => {
  const req = axios.get(`${URL}?sort=-createdAt`)
  return { type: 'LIST_SEARCHED', payload: req }
}

export const addList = description => {
  const req = axios.post(URL, { description } )
  return {type: 'ADD_LIST', payload: req }
}