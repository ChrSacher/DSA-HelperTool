<template>
  <div id="wrapper">
    <button @click="$router.push({ name: 'hero-generator'})">To Hero Generator</button>
    <button @click="$router.push({ name: 'start-page'})">To Landing Page</button>
  </div>
</template>

<script>
  
  export default {
    name: 'landing-page',
    components: {},
    data () {
      return {
      }
    },
    created () {
    },
    methods: {
    }
  }
</script>

<style scoped>

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }
</style>
