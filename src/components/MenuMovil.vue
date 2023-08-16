<template>
    <div class="mobile-menu">
      <div class="hamburger" @click="toggleMenu">
        <div class="line" v-for="index in 3" :key="index"></div>
      </div>
      <transition name="slide-down">
        <div v-if="isOpen" class="menu-items">
          <ul>
            <li @click="closeMenu">Inicio</li>
            <li @click="closeMenu">Acerca de</li>
            <li @click="closeMenu">Servicios</li>
            <li @click="closeMenu">Contacto</li>
          </ul>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { gsap } from 'gsap';
  
  const isOpen = ref(false);
  
  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
    animateMenu();
  };
  
  const closeMenu = () => {
    isOpen.value = false;
    animateMenu();
  };
  
  const animateMenu = () => {
    const lines = document.querySelectorAll('.line');
    if (isOpen.value) {
      gsap.to(lines[0], { rotate: 45, y: 6, duration: 0.3 });
      gsap.to(lines[1], { rotate: -45, y: -6, duration: 0.3 });
      gsap.to(lines[2], { opacity: 0, duration: 0.3 });
    } else {
      gsap.to(lines[0], { rotate: 0, y: 0, duration: 0.3 });
      gsap.to(lines[1], { rotate: 0, y: 0, duration: 0.3 });
      gsap.to(lines[2], { opacity: 1, duration: 0.3 });
    }
  };
  </script>
  
  <style scoped>
  .mobile-menu {
    display: flex;
    align-items: center;
    padding: 10px;
  
  }
  
  .hamburger {
    position: fixed;
    width: 30px;
    height: 30px;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    z-index: 99999;
  }
  
  .line {
    width: 100%;
    height: 4px;
    background-color: #333;
    transition: transform 0.3s, opacity 0.3s;
  }
  
  .menu-items {
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  ul {
    list-style: none;
    padding: 0;
    text-align: center;
  }
  
  li {
    margin: 15px;
    font-size: 24px;
    color: white;
    cursor: pointer;
  }
  </style>
  