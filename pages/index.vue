<template>
  <div>Hello world</div>
</template>
// we export computed values here
export default {
  computed: {
    // mapState returns an object
    ...mapState({
      // we want a counter available to the template, and that counter
      // gets data from the state
      counter(state) { return state.counter},
    }),
  }
}
