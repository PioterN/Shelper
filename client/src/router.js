import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./components/views/Home.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./components/views/Login.vue"),
    },
    {
      path: "/signup",
      name: "SignUp",
      component: () => import("./components/views/SignUp.vue"),
    },
    {
      path: "/sign-up-personal",
      name: "SignUpPersonal",
      component: () => import("./components/views/SignUpPersonal.vue"),
    },
    {
      path: "/sign-up-shelter",
      name: "SignUpShelter",
      component: () => import("./components/views/SignUpShelter.vue"),
    },
    {
      path: "/account",
      name: "Account",
      component: () => import("./components/views/Account.vue"),
    },
    {
      path: "/account-settings",
      name: "AccountSettings",
      component: () => import("./components/views/AccountSettings.vue"),
    },
    {
      path: "/animals",
      name: "Animals",
      component: () => import("./components/views/Animals.vue"),
    },
    {
      path: "/animals/:id",
      name: "Post",
      component: () => import("./components/views/Post.vue"),
    },
    {
      path: "/animals/:id/appointments",
      name: "Appointments",
      component: () => import("./components/views/Appointments.vue"),
    },
    {
      path: "/add-post",
      name: "AddPost",
      component: () => import("./components/views/AddPost.vue"),
    },
    {
      path: "/favourites",
      name: "Favourites",
      component: () => import("./components/views/Favourites.vue"),
    },
  ],
});
