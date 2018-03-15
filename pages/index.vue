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
