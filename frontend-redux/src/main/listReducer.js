const INITIAL_STATE = []

export const list = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TODO_SEARCHED':
      return action.payload.data
    case 'TODO_ADDED':
      return action.payload
    default:
      return state
  }
}
