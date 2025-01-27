import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./components/LandingPage.vue";
import ContactUs from "./components/ContactUs.vue";
import WorkshopsPage from "./components/Workshops.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/workshops",
    name: "WorkshopsPage",
    component: WorkshopsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
