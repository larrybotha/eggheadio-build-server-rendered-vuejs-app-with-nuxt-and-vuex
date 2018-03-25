<template>
    <nav class="pa3 pa4-ns">
      <!--
      As with React Router, we can use 'exact' for routes.
      In this situation we can use exact to prevent '/' from showing as an active
      link if it is not the exact route
      -->
      <nuxt-link exact class="link dim gray    f6 f5-ns dib mr3" to="/" title="Home">Home</nuxt-link>
      <nuxt-link class="link dim gray    f6 f5-ns dib mr3" to="/active" title="Active">Active</nuxt-link>
      <nuxt-link class="link dim gray    f6 f5-ns dib mr3" to="/completed" title="Completed">Completed</nuxt-link>
    </nav>
</template>

<style>
a.nuxt-link-active {
  color: black;
}
</style>
