<template>
  <div class="pa4">
    <!--
    we can dispatch mutations using vue directives referencing the names we
    define in the methods property
    -->
    <button @click="dec">-</button>
    {{counter}}
    <button @click="inc">+</button>
  </div>
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
