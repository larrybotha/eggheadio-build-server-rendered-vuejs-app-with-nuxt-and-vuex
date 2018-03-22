<template>
<article class="pa3 pa5-ns">
  <h1 class="f4 bold center mw6">Todos</h1>
  <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
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
  async fetch({store, redirect, error}) {
    try {
      const res = await axios('https://todos-irfedqgncn.now.sh/todos');

      store.commit('init', res.data);
    } catch (err) {
      error({statusCode: 500, message: 'Oops, you did something badong'});
    }
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
