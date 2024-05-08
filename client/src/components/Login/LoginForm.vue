<template>
 <div className='base-login-container'>
      <form className='log-sign-form' v-on:submit="submitHandler($event)">
        <h1 className='header'>Zaloguj się</h1>
        <div className='input-div'>
          <div>
            <input
              className='log-sign-input'
              type='text'
              name='email'
              placeholder='Podaj swój e-mail'
              v-model="user.email"
            />
          </div>
          <div>
            <input
              className='log-sign-input'
              name='password'
              type='password'
              placeholder='Podaj swoje hasło'
              v-model="user.password"
            />
          </div>
        </div>
        <div className='button-div'>
          <div>
            <button className='log-sign-button' type='submit'>
              {'Zaloguj się'}
            </button>
          </div>
          <div className='bottom-text'>
            Nie posiadasz konta? <Link to='/signup'>Zarejestruj się</Link>
          </div>
        </div>
      </form>
    </div>
    
</template>

<script setup>
    import { reactive } from 'vue';
    const user = reactive({
        email: '',
        password: ''
    })

  const loginUser = async () => {
    // TODO make fetch call to api later
  };

  const submitHandler = e => {
    e.preventDefault();
    loginUser();
  };
</script>

<style scoped>
.base-login-container {
  background-color: #f5f5f5;
  display: flex;
  justify-items: center;
  height: 100%;
  width: 100%;
  flex: 1;
}

.log-sign-form {
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
}

.header {
  color: #6e6e6e;
  font-size: 48px;
}

.log-sign-form > div {
  width: 65%;
  display: flex;
  justify-content: center;
}

.log-sign-input {
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid #ffffff;
  color: #9a9a9a;
  padding-left: 28px;
  height: 54px;
  border-radius: 50px;
  font-size: 20px;
  margin-bottom: 44px;
  max-width: 390px;
}

.log-sign-input::placeholder {
  color: #9a9a9a;
}

/* error input */
.has-error {
  border: 1px solid #ff0000;
}

.input-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.button-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20%;
}

.input-div > div,
.button-div > div {
  width: 100%;
  display: flex;
  justify-content: center;
}

.button-div > .bottom-text {
  color: #b8b8b8;
  font-size: 14px;
  margin-top: 21px;
}

.bottom-text > a {
  color: #939393;
  text-decoration: none;
  font-weight: 700;
  margin-left: 1%;
}

/* TODO invalid form classes */
.error-text {
  color: #b40e0e;
}
</style>