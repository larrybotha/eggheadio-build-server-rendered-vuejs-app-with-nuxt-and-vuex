// vuexx requires a function to be exported from the store
const state = () => ({
  counter: 0,
});

// we can use constants so that components can reliably reference mutations
export const INCREMENT = 'INCREMENT';
// mutations take the full state object...
const increment = state => {
  // and then mutate the state directly.
  // This is what enables vue to do it's stuff with time travel etc.
  state.counter = state.counter + 1;
};
export const DECREMENT = 'DECREMENT';
const decrement = state => {
  state.counter = state.counter - 1;
};

// vuex updates state via mutations
const mutations = {
  [INCREMENT]: increment,
  [DECREMENT]: decrement,
};

export {mutations, state};
