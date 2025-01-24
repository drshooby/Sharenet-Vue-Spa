import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import VueGoogleMaps from "@fawmi/vue-google-maps";

const app = createApp(App);

app.use(router);
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyArjSIACQhAdywYFuODlDJeI4_g2-FmxbY",
    v: "weekly",
  },
});

app.mount("#app");
