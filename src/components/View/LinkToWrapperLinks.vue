<template>
  <div class="">
      <div class="link-to-books">
          <router-link to="/wrapper-links/books">Тык</router-link>
      </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "LinkToWrapperLinks"
})
</script>


<style scoped>

.link-to-books{
    width: 250px;
    background-color: rgba(0, 0, 0, 0.2);
    height: 60px;
    margin: 350px auto;
    display: flex;
    justify-content: center;
    align-items: center;
}.link-to-books a{
     text-decoration: none;
     padding: 20px 110px;
     color: white;
 }
</style>