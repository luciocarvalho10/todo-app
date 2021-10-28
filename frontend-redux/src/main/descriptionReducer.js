const INITIAL_STATE = { description : 'Ler livros'}

export const description = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload }
    default:
      return state
  }
}