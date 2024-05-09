<script setup>
import NavBar from "../NavBar.vue";
</script>


<template>
    <div className="acc-home-div">
      <NavBar />
      <div className="acc-content-div">
        <h2 className="title">Ustawienia konta</h2>
        <div className="acc-input-div">
          <div>
            <span>E-mail:</span>
            <input className="acc-input" type="text" value="" />
          </div>
          <div>
            <span>Hasło:</span>
            <input className="acc-input" type="text" value="" />
          </div>
          <div>
            <span>Powtórz hasło:</span>
            <input className="acc-input" type="text" value="" />
          </div>
        </div>
        <button className={classes.button}>Zatwierdź zmiany</button>
        <button className={classes.button} onClick={logout}>
          Wyloguj
        </button>
      </div>
    </div>
</template>
