<template>



  <div class="all-content">
    <NavPage style="margin-top: -21px;"></NavPage>
    <div v-if="isAuth">
      <div>привествую, <b>{{ username }}</b></div>
      <hr>
      <v-btn block color="primary" @click="logout">Выйти</v-btn>
    </div>
    <div v-else>
      <v-card text="Ввести ваше имя:">
        <hr>
        <v-text-field v-model="username" @keyup.enter="login" label="Main input" :rules="rules"
          hide-details="auto"></v-text-field>
        <v-btn block color="primary" @click="login">Войти</v-btn>
      </v-card>
    </div>
  </div> 
</template> 
 
<script>

import NavPage from './NavPage.vue'


export default {
  components: {
    NavPage
  },
  data: () => ({
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters',
    ],

    isAuth: false,
    username: ""

  }),
  mounted() {
    const localStorageAuth = localStorage.getItem('isAuth');
    const localStorageUsername = localStorage.getItem('username');
    if (localStorageAuth && localStorageUsername) {
      this.isAuth = true;
      this.username = localStorageUsername;
    }
  },
  methods: {
    login() {
      if (this.username.trim() !== "") {
        this.isAuth = true;

        localStorage.setItem('isAuth', true);
        localStorage.setItem('username', this.username);

        this.$router.push({
          name: 'Chat',
          query: { username: this.username }
        })
      }
      else {
        alert('Введите имя');
      }
    },
    logout() {
      this.isAuth = false;
      this.username = "";

      localStorage.removeItem('isAuth');
      localStorage.removeItem('username');
    }
  }
} 
</script>

<style >
.menu{ 
  margin-top: -21px;
}
.all-content {
  border-radius: 10px;
  padding: 10px 10px;
  margin: 10px;
  box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 6px rgba(255, 255, 255, 1);
  border: grey solid;
  margin: 5px;
  border-radius: 5px;
  margin-top: 10vh;

}

.v-btn {
  margin-bottom: 10px;
  margin-top: 10px;
}
@media (min-width: 544px), (orientation: landscape) { 
  .all-content {
margin: 5vw;
}
 }
/* body{
  background-color: rgb(205, 0, 251);
} */
</style>


