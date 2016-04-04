import * as types from './mutation-types'

const mutations = {
  [types.RECEIVE_PEOPLE] (state, people) {
    state.people.all = people
  },
  [types.RECEIVE_PERSON] (state, person) {
    state.person = person
  }
}

export default mutations
