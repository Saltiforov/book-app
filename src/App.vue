<template>
    <div class="wrapper">
        <router-view/>
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {  },
  data(){
      return {

      }
  },
  methods: {

  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    height: 100vh;
}
body{
    margin: 0px;
    height: 100%;
}
a{
    color: white;
    text-decoration: none;
}
.wrapper{
    //height: 100vh;
    width: 100%;
    background: #f3f0f0;
}

</style>
