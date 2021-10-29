const INITIAL_STATE = []

export const list = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LIST_SEARCHED':
      return action.payload.data
    default:
      return state
  }
}
