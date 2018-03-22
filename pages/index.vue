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
  // making a request inside fetch will perform the request before the component
  // is created. What does this mean? Does it block rendering until it resolves?
  // Let's try with a timeout.
  // So, it turns out that this magical function is actually made available
  // via Nuxt! This function is compiled into server code, and is run on
  // application startup.
  // It's only called in the browser on hot-reloads?
  async fetch({store, redirect, error}) {
    // the context for 'this' over here is different from the context inside
    // lifecycle methods. 'this' over here references the object on which
    // all of these methods are defined.
    // Inside a lifecycle function 'this' refers to the component instance
    // console.log(this);
    /**/
    try {
      /**
      // investigate fetch from server vs client
      const res = await new Promise(resolve => {
        setTimeout(async () => {
          return resolve({
            data: [
              {
                text:
                  typeof window !== 'undefined'
                    ? `${window.performance.now()} - rendered in client`
                    : 'rendered from server',
                id: 1,
              },
            ],
          });
        }, 0);
      });

      return resolve(response);
      /**/

      const res = await axios('https://todos-irfedqgncn.now.sh/todos');

      store.commit('init', res.data);
    } catch (err) {
      // we can either provide a fallback for data
      // store.commit('init', []);

      // or we can redirect to a page of the same name as the path provided to
      // 'redirect', available as a param to this 'fetch' function
      // redirect('/error');

      // or, one can use the default error page found at layout/error.vue, along
      // with the 'error' param available to this 'fetch' function
      error({statusCode: 500, message: 'Oops, you did something badong'});
    }
    /**/
  },

  // begin lifecycle hooks
  beforeCreate() {
    console.log('beforeCreate');
  },

  async created() {
    console.log('created');

    // as an alternative to using 'fetch', which fnding any documentation on
    // appears to be a separate skill, we can make the async request inside
    // the 'created' lifecycle hook
    //     const res = await axios('https://todos-irfedqgncn.now.sh/todos');

    // store is available to the instance at this point, so must be referenced
    // from 'this', and using the $store property
    // The context isn't ready inside fetch by the time the store was created,
    // so it needs to be passed into that function
    // this.$store.commit('init', res.data);
  },

  beforeMount() {
    console.log('beforeMount');
  },

  mounted() {
    console.log('mounted');
  },

  beforeUpdate() {
    console.log('beforeUpdate');
  },

  updated() {
    console.log('updated');
  },

  activated() {
    console.log('activated');
  },

  deactivated() {
    console.log('deactivated');
  },

  beforeDestroy() {
    console.log('beforeDestroy');
  },

  destroyed() {
    console.log('destroyed');
  },

  errorCaptured() {
    console.log('errorCaptured');
  },
  // end lifecycle hooks

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
