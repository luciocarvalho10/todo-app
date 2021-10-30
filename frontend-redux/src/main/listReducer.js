const INITIAL_STATE = []

export const list = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LIST_SEARCHED':
      return action.payload.data
    case 'ADD_LIST':
      return action.payload
    default:
      return state
  }
}
