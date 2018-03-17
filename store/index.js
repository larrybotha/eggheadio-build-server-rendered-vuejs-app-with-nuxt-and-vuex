const state = () => ({
  todos: [],
});

const mutations = {
  // this is called via index.vue once we have a response from our API
  init(state, todos) {
    state.todos = todos;
  },
};

export {mutations, state};
