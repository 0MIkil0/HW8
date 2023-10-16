// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/HomePage.vue';
import NotFound from './components/NotFound.vue';
import TestApi from './components/TestApi.vue';
import ChatPage from './components/ChatPage.vue';
import NavPage from './components/NavPage.vue';
// import 'vuetify/dist/vuetify.min.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/chat', name: 'Chat', component: ChatPage },
  { path: '/test', name: 'Test', component: TestApi },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/navigation', name: 'navigation', component: NavPage },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);
app.use(router);
app.use(vuetify); // Add this line to use Vuetify
app.mount('#app');
