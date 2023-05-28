<template>
  <div class="sidebar">
      <router-link to="/"> <h1>MAIN PAGE</h1></router-link>


      <div class="sidebar-item">
          <router-link to="/login"> <p>login</p> </router-link>
      </div>

      <div class="sidebar-item">
          <router-link to="/signup"> <p>signup</p> </router-link>
      </div>

      <div class="sidebar-item">
          <router-link to="/MainView"> <p>mainpage</p> </router-link>
      </div>


      <div class="sidebar-item">
          <p @click="clickToModal">ADDNewBook</p>
          <AddNewBook
                  :isVisible="isVisible"
                  @clickCancelBtn="clickCancelBtn"
          />
      </div>

  </div>
</template>

<script>
import {defineComponent} from 'vue'
import AddNewBook from "@/components/Modal/AddNewBook.vue";


export default defineComponent({
    name: "SideBar",
    components: {AddNewBook,},
    props: ['isVisible'],
    data() {
        return {
        }
    },
    methods: {

        clickToModal() {
            this.$emit('clickToModal')
        },
        clickCancelBtn() {
            this.$emit('clickCancelBtn')
        },
    }


})
</script>

<style scoped>
  .sidebar{
      width: 300px;
      height: 100vh;
      background: teal;
  }
  .sidebar-item{
      color: white;
      padding: 40px 20px;
      cursor: pointer;
  }
</style>