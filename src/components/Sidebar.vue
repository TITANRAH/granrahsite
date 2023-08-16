<template>
    <div class="menu-container">
      <div class="menu-items">
        <div class="logo" >
        <a href="#"><img ref="logoImg" src="../assets/img/logo-gran.png" alt="Logo" /></a>  
        </div>
        <div
          v-for="(ruta, index) in routes"
          :key="ruta.name"
          :class="{ 'menu-item': true, active: activeRoute === ruta.name }"
        >
          <a
            class="menu-link"
            :href="'#' + ruta.name"
            @click="setActiveRoute(ruta.name)"
          >
            {{ ruta.text }}
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { gsap } from 'gsap';
  
  const logoImg = ref(null);
  const activeRoute = ref('');
  
  const routes = [
    { name: 'news', text: 'Noticias', color: '#222222' },
    { name: 'about', text: 'Acerca de mi', color: '#64676D' },
    { name: 'musica', text: 'Música', color: '#95AABF' },
    { name: 'biography', text: 'Biografía', color: ' #B2B0AC' },
    { name: 'contact', text: 'Contacto', color: '#D0CCC6' },
    { name: 'gallery', text: 'Galería', color: '#EEEFEC' },
  ];
  
  onMounted(() => {
    animateSidebarEntrance();
  });
  
  const animateSidebarEntrance = () => {
    const menuItems = document.querySelectorAll('.menu-item');
  
    gsap.set(menuItems, { x: 100, opacity: 0 });
  
    gsap.to(menuItems, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.15,
      delay: 0.5,
    });
  
    gsap.from(logoImg.value, {
      x: -100,
      rotate: -180,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5,
    });
  };
  
  const setActiveRoute = (routeName) => {
    activeRoute.value = routeName;
  };
  </script>
  
  <style scoped>
  .menu-container {
    background-color: black;
    padding: 20px;
  }
  
  .menu-items {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 0.4rem;
  }
  
  .menu-item {
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    transform-origin: right center;
  }
  
  .menu-item.active {
    background-color: white;
  }
  
  .menu-link {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  .menu-item.active .menu-link {
    color: black;
  }
  
  .logo {
    margin-bottom: 20px;
  }
  </style>
  