<script setup>

import Sidebar from '../components/Sidebar.vue'
import Herotitle from '../components/Herotitle.vue'
import News from '../components/News.vue'
import About from '../components/About.vue'
import MenuMovil from '../components/MenuMovil.vue'


</script>
<template>
    <Sidebar />
    <!-- <MenuMovil /> -->
    <Herotitle />
   
    <section class="container-landing">
        <News />
        <About/>
    </section>
</template>
  
  
<style scoped></style>
  