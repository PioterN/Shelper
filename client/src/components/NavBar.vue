<template>
  <div class="navbar">
    <div class="navbar-items">
      <router-link class="navbar-logo" :to="{ name: 'Home' }">
        <img :src="Logo" alt="logo" />
      </router-link>
      <router-link
        v-for="item in items"
        :key="item.name"
        :to="{ name: item.name }"
        :class="{ 'navbar-item': true, 'active-navbar': $route.name === item.name }">
        {{ item.title }}
      </router-link>
    </div>
    <div class="search">
      <router-link :to="{ name: 'Animals' }">
        <font-awesome-icon class="icon" icon="search" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Logo from "../img/logo.svg";

const getNavBarItems = (isLoggedIn) => {
  if (isLoggedIn.charAt(0) === "C") {
    return [
      {
        name: "Home",
        title: "Strona główna",
      },
      {
        name: "Favourites",
        title: "Ulubione",
      },
      {
        name: "AccountSettings",
        title: "Konto",
      },
    ];
  }
  if (isLoggedIn.charAt(0) === "S") {
    return [
      {
        name: "Favourites",
        title: "Ulubione",
      },
      {
        name: "AddPost",
        title: "Dodaj ogłoszenie",
      },
      {
        name: "AccountSettings",
        title: "Konto",
      },
    ];
  }
  return [
    {
      name: "Home",
      title: "Strona główna",
    },
    {
      name: "Login",
      title: "Zaloguj się",
    },
    {
      name: "SignUp",
      title: "Rejestracja",
    },
  ];
};
const items = ref(getNavBarItems("K")); //TODO obsłużyć
</script>

<style scoped>
.navbar {
  width: 100%;
  min-height: 15%;
  display: flex;
  justify-content: space-between;
  padding: 70px 0px;
}

.login {
  grid-column: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #f7f9ff;
}
.search {
  background-color: transparent;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.search .icon {
  margin-right: 60px;
  color: #373737;
}

.navbar-items {
  background-color: transparent;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
}

.navbar-item {
  color: #7c7c7c;
  text-decoration: none;
}

.navbar-item:hover {
  border-bottom: 3px solid #e2a300;
}

.active-navbar {
  border-bottom: 3px solid #e2a300;
}

.active-navbar,
.navbar-logo {
  background-color: transparent !important;
}
</style>
