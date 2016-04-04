<template>
  <div class="people-page">
    <h2>People</h2>
    <ul>
      <li v-for="person in people"><a v-link="{ path: '/people/' + person.id }">{{ person.name }}</a></li>
    </ul>
  </div>
</template>

<script>
import { getAllPeople } from '../../vuex/actions'

export default {
  vuex: {
    getters: {
      people: ({ people }) => people.all
    },
    actions: {
      getAllPeople
    }
  },
  created () {
    this.getAllPeople()
  }
}
</script>
