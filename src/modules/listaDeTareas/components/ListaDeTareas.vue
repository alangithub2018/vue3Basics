<template>
    <div>
        <h2>Lista de tareas</h2>
        <input type="text" placeholder="Escribe una tarea" v-model="nuevaTarea" @keyup.enter="agregarTarea" />

        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">
                {{ tarea }}
                <button @click="eliminarTarea(index)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const tareas = ref([]);
const nuevaTarea = ref('');

const agregarTarea = () => {
    tareas.value.push(nuevaTarea.value);
    nuevaTarea.value = '';
}

const eliminarTarea = (index) => {
    tareas.value.splice(index, 1);
}

</script>

<style scoped>
</style>