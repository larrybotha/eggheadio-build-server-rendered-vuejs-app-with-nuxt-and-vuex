<template>
  <div>
    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">Completed Todos</h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li v-for="todo of todos" :key="todo.id" class="ph3 pv3 bb b--light-silver">
          {{todo.text}}
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import {load} from './shared';

export default {
  fetch: load,

  computed: {
    ...mapState({
      todos(state) {
        return state.todos.filter(({done}) => !done);
      },
    }),
  },

  methods: {
    ...mapMutations({}),
  },
};
</script>
