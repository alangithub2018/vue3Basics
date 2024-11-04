import ListaDeTareas from '@/components/ListaDeTareas.vue';
<template>
  <div class="sidebar">
    <h2>Barra lateral</h2>
    <ul>
        <li>
            <router-link to="/contador">
                Contador
            </router-link>
        </li>
        <li>
            <router-link to="/lista-de-tareas">
                Lista de tareas
            </router-link>
        </li>
        <li>
            <router-link to="/registrar">
                Registrar
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
    .sidebar {
        width: 200px;
        /* height: 100%; */
        background-color: #333;
        color: #f0f0f0;
        padding: 20px;
    }
</style>