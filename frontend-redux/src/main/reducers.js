import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
    description: 'Ler livros',
    list: [
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
  })
})

export default rootReducer