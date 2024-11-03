
<template>
  <h1>Hola Mundo</h1>
  <p>{{ count }}</p>
  <button @click="incrementar">Incrementar</button>
  <button @click="decrementar">Decrementar</button>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

const incrementar = () => {
  count.value++;
}

const decrementar = () => {
  count.value--;
}

</script>

<style scoped>
p {
  color: red;
}
</style>
