<template>
  <div>
    <!--
      We render the component here.
      It appears that the imported component has to be declared with a capital
      letter, otherwise it doesn't render.
    -->
    <Nav />
    <nuxt/>
  </div>
</template>

<script>
import Nav from '../components/navigation';

export default {
  components: {
    Nav,
  },
};
</script>
