const INITIAL_STATE = ''

const description = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return action.payload
    default:
      return state
  }
}

export { description }
