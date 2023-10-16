<template>
<NavPage></NavPage>
  <div class="error">
    <img src="../assets/404.avif" alt="page not found" class="errorImg">
  </div>
</template>


<script>
import NavPage from './NavPage.vue'
export default {
  components: {
    NavPage
  }}
  </script>
  
<style scoped>
.error {
  height: 100vb;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
  