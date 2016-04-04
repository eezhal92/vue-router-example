import * as api from '../api/'
import * as types from './mutation-types'

export const getAllPeople = ({ dispatch }) => {
  api.getAllPeople((people) => {
    dispatch(types.RECEIVE_PEOPLE, people)
  })
}

export const getPerson = (store) => {
  var id = store.state.route.params.id

  api.getPerson(id, (person) => {
    store.dispatch(types.RECEIVE_PERSON, person)
  })
}
