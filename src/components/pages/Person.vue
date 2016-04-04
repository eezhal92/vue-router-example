<template>
  <div class="people-page">
    <h2>Person Detail</h2>
    <p>Name: {{ person.name }}</p>
    <p>Age: {{ person.age }}</p>
    <p>Bio: {{ person.bio }}</p>    
  </div>
</template>

<script>
import { getPerson } from '../../vuex/actions'

export default {
  vuex: {
    getters: {
      person: ({ person }) => person
    },
    actions: {
      getPerson
    }
  },
  created () {
    this.getPerson()
  }
}
</script>
