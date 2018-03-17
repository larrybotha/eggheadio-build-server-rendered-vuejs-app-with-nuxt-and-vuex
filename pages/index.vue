<template>
<article class="pa3 pa5-ns">
  <h1 class="f4 bold center mw6">Todos</h1>
  <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
    <!--
      In view one can either use v-bind:[name], or as a convenience just :[name]
      for bindings:

      <li v-for="todo of todos" :key="todo.task" class="ph3 pv3 bb b--light-silver">

      We're opting for the shorter version here:
    -->
    <li v-for="todo of todos" :key="todo.task" class="ph3 pv3 bb b--light-silver">
      {{todo.task}}
    </li>
  </ul>
</article>
</template>

<script>
// get mapState, which looks like the analagous to redux's mapStateToProps
import {mapState, mapMutations} from 'vuex';

import {INCREMENT, DECREMENT} from '../store'

// we export computed values here
export default {
  computed: {
    // mapState returns an object
    ...mapState({
      // we want a counter available to the template, and that counter
      // gets data from the state
      counter(state) { return state.counter},
    }),
  },

  // inside a component we need a methods object in order to update state
  // This can either be an array of string names, or an object mapping names to
  // function names in the store
  methods: {
    ...mapMutations({
      'inc': INCREMENT,
      'dec': DECREMENT
    }
   )
  }
}
</script>
