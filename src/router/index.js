import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import FruitBox from "@/components/fruitBox.vue";
import FruitDetails from "@/components/fruitDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeComponent,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/fruitBox",
    name: "fruitBox",
    component: FruitBox,
  },
  {
    path: "/fruitBox/:id",
    name: "fruitDetails",
    component: FruitDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
