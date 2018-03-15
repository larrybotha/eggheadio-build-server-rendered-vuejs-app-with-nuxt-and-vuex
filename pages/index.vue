<template>
  <div>
    <!--
    we can dispatch mutations using vue directives referencing the names we
    define in the methods property
    -->
    <button @click="dec">-</button>
    {{counter}}
    <button @click="inc">+</button>
  </div>
</template>
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
