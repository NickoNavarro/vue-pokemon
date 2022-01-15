<template>
  
  <pokemonpage />
 
</template>

<script>
import pokemonpage from "./pages/pokemonpage.vue"


export default {
  name: 'App',
  components: {
    
    pokemonpage,
    

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
