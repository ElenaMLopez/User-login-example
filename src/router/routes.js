import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import userLogued from "../services/loginService";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: userLogued
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];
