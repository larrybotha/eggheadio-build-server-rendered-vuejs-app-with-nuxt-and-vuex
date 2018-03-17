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
import {mapState, mapMutations} from 'vuex';

export default {
  computed: {
    ...mapState({
      // Get the todos from our store
      // We could call them anything here, as long as inside the function we are
      // referencing the actual state property
      todos(state) {
        return state.todos;
      },
    }),
  },

  methods: {
    ...mapMutations({}),
  },
};
</script>
