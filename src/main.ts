import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from "@/store";
import Toast from "vue-toastification";
import "../src/index.css";
import "vue-toastification/dist/index.css";


import { useToast } from "vue-toastification";
export const toast = useToast();

import axios from "axios";
const instance = axios.create({
    withCredentials: true,
});

const app = createApp(App)
app.config.globalProperties.$http = instance;
app.use(store).use(router).use(Toast).mount("#app");
