<template>
  <div>
    <NavPage style="margin-top: -21px;"></NavPage>
  </div>
  <div class="all-content">
    <div v-if="username">
      <div class="chat">
        <h2>Чат</h2>
        <div class="text" v-for="message in messages" :key="message.id">
          <hr> {{ message.user }}: {{ message.text }}
          <v-btn color="primary" @click="deleteMsg(message.id)">Удалить</v-btn>
        </div>
        <hr>
        <div v-show="emptyMsg" class="empty">Текущих сообщений нет</div>
        <hr v-show="emptyMsg">
      </div>
      <v-text-field v-model="newMessage" @keydown.enter="sendMsg" placeholder="введите сообщение" label="Main input"
        :rules="rules" hide-details="auto"></v-text-field>
      <v-btn block color="primary" @click="sendMsg">Отправить</v-btn>
      <v-btn block color="primary" v-show="deleteBtn" @click="delMsg">Удалить всё</v-btn>
    </div>
    <div v-else class="alert">
      Для авторизации перейдите по <router-link :to="{ name: 'Home' }">ссылке</router-link>
    </div>
  </div>
</template>

<script>
import NavPage from './NavPage.vue'
export default {
  components: {
    NavPage
  },
  data() {
    return {
      messages: [],
      newMessage: '',
      deleteBtn: false,
      emptyMsg: true,
      username: ''
    }
  },

  mounted() {
    this.username = localStorage.getItem("username");
    this.messages = JSON.parse(localStorage.getItem("messages")) || [];
    this.saveMessages();
  },

  methods: {
    delMsg() {
      this.messages = [];
      this.deleteBtn = false;
      this.saveMessages();
    },
    deleteMsg(id) {
      this.messages = this.messages.filter(message => message.id !== id);
      this.saveMessages();
    },
    sendMsg() {
      if (this.username === '') {
        this.username = 'Аноним';
      }
      if (this.newMessage !== '') {
        this.emptyMsg = false;
        this.messages.push({ id: new Date().getTime(), text: this.newMessage, user: this.username });
        this.newMessage = '';
        this.deleteBtn = true;
        this.saveMessages();
      }
    },
    saveMessages() {
      this.emptyMsg = this.messages.length === 0;
      localStorage.setItem("messages", JSON.stringify(this.messages));
    }
  }
}
</script>

<style scoped>
/* Ваш стиль */
</style>
