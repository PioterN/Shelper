<template>
     <Link to={{navigate}} className="button">
      {{text}}
    </Link>
</template>

<script setup>
const props = defineProps({
    navigate: String,
    text: String
})
</script>

<style scoped>
.button {
  display: flex;
  border-radius: 36px;
  background-color: #e2a300;
  border: none;
  color: #ffffff;
  font-size: 16px;
  padding: 12px;
  max-width: 220px;
  transition: all 0.5s;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px;
}
</style>