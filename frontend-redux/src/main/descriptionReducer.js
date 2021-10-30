const INITIAL_STATE = ''

const description = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return action.payload
    case 'TODO_CLEAR':
      return INITIAL_STATE
    default:
      return state
  }
}

export { description }
