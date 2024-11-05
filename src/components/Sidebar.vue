import ListaDeTareas from '@/components/ListaDeTareas.vue';
<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ registrarStore.nombre }}</h3>
    <h3>Email: {{ registrarStore.email }}</h3>
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
        <li>
            <router-link to="/calcular">
                Calcular
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script setup>
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';

const registrarStore = useRegistrarStore();

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