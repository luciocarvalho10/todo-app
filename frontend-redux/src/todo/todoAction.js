import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})

export const searchList = () => {
  const req = axios.get(`${URL}?sort=-createdAt`)
  return { type: 'LIST_SEARCHED', payload: req }
}
