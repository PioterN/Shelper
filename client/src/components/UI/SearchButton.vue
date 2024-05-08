<template>
      <router-link to='/animals' className=search>
        <font-awesome-icon icon="search" className=icon />
        <div className=text>{{text}}</div>
    </router-link>
</template>

<script setup>
    const props = defineProps({
    text: String,
    });
</script>

<style scoped>
.search {
  display: flex;
  flex-direction: row;
  border-radius: 50px;
  border: none;
  padding: 0 16px;
  width: 100%;
  max-width: 560px;
  height: 54px;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  background-color: white;
  cursor: pointer;
}

.text {
  flex: 1 1;
  height: fit-content;
  width: fit-content;
  margin-left: 1em;
  text-align: left
}
.icon {
  margin-right: 15px;
}

a, a:hover, a:focus, a:active {
  text-decoration: none;
  color: inherit;
}

.find {
  width: 100%;
}

.search:hover {
  transform: scale(1.05);
  transition-duration: 1s;
}
</style>