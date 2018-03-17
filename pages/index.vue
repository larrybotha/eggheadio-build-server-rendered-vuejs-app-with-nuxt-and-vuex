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
    <li v-for="todo of todos" :key="todo.id" class="ph3 pv3 bb b--light-silver">
      {{todo.text}}
    </li>
  </ul>
</article>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import axios from 'axios';

export default {
  // fetch is invoked when the page is loaded. What about naming collision with
  // browser's fetch api?
  // Fetch is also called with a property of store - is this vuex's doing?
  async fetch({store}) {
    // make an async request
    const res = await axios('https://todos-irfedqgncn.now.sh/todos');

    // once we have a response, commit that response to our store
    store.commit('init', res.data);
  },

  computed: {
    ...mapState({
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
