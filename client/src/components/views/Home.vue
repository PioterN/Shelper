<script setup>
import NavBar from "../NavBar.vue";
import Button from "../UI/Button.vue";
import SearchButton from "../UI/SearchButton.vue";
</script>

<template>
   <div className="home-page">
      <NavBar />
      <div className="home-page-content">
        <div className="text-container">
          <SearchButton text="Znajdź ogłoszenie" />
          <div className="text-button">
            <h1>Pomagajmy razem</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel
              consectetur interdum, nisl nisi.
            </p>
            <Button text="Zaloguj się" navigate="/login"></Button>
          </div>
        </div>
        <div className="home-dog-container">
          <img className="home-dog-image" src="../../img/background-index.png" alt="" />
        </div>
      </div>
    </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #f8f8f8;
  background-image: url('../../img/start_page_background.png');
  background-size: cover;
}

.home-page-content {
  display: flex;
  height: 85%;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 70%;
  align-items: center;
  width: 100%;
  flex: 1 1;
  padding: 1em;
  margin: 1%;
}

.home-dog-container {
  display: flex;
  height: 100%;
  align-items: inherit;
  justify-content: space-between;
  flex: 1;
}

.dog-container > img {
  width: 70%;
  height: 70%;
}

input {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
}

input,
input::placeholder {
  font: bold 16px sans-serif;
}

.log-sign-button {
  display: flex;
  border-radius: 36px;
  background-color: #e2a300;
  border: none;
  color: #ffffff;
  font-size: 16px;
  height: 51px;
  font-weight: bold;
  width: 100%;
  transition: all 0.5s;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  max-width: 420px;
}

.home-dog-image {
  height: 100%;
}

.text-button {
  max-width: 592px;
  margin-left: 3em;
}
</style>