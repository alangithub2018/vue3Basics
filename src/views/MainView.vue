<template>
    <Header :mensaje="texto"></Header>
    <div class="container">
        <Sidebar />
        <div class="content">
            <input type="text" v-model="texto" />
            {{ texto }}
            <router-view />
        </div>

    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import { ref } from 'vue';

const texto = ref('');

</script>

<style scoped>

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .content {
        flex: 1;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
</style>