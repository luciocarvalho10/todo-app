const INITIAL_STATE = [
  {
    _id: 1,
    description: 'Pagar fatura do cartão',
    done: true
  },
  {
    _id: 2,
    description: 'Estudar Node',
    done: false
  },
  {
    _id: 3,
    description: 'Consulta médica quinta de manhã',
    done: false
  }
]

export const list = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'LIST_SEARCHED':
      return { ...state, list: action.payload.data}
    default:
      return state
  }
}