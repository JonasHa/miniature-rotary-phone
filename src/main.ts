import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import "./css/fonts.css";
import vuetify from "./plugins/vuetify";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(vuetify);

app.mount("#app");
