<template>
    <div className="login-page">
      <NavBar />
      <div className="login-page-content">
        <div className="dog-container">
          <img src="../../img/background-login.png" alt="background" />
        </div>
       <LoginForm />
      </div>
    </div>
</template>

<script setup>
import NavBar from "../NavBar.vue";
import LoginForm from "../Login/LoginForm.vue";
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: white;
}

.login-page-content {
  display: flex;
  height: 85%;
}

.dog-container {
  background-color: #f7f9ff;
  display: flex;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
  flex: 1;
}

.dog-container > img {
  width: auto;
  height: 90%;
  max-height: 1200px;
}

.choose-type{
  background-color: #f5f5f5;
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}

.buttons-div{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20%;
  width: 100%;
  height: 30%;
  justify-content: space-evenly;
}

.head{
  font-size: 300%;
}
</style>