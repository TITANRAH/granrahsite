<!--         
<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const logoImg = ref(null);
const routes = [
    { name: 'news', text: 'Noticias', color: '#222222' },
    { name: 'about', text: 'Acerca de mi', color: '#64676D' },
    { name: 'musica', text: 'Música', color: '#95AABF' },
    { name: 'biography', text: 'Biografía', color: ' #B2B0AC' },
    { name: 'contact', text: 'Contacto', color: '#D0CCC6' },
    { name: 'gallery', text: 'Galería', color: '#EEEFEC' },
];


onMounted(() => {
//   animateHeroEntrance();
  animateMenuEntrance();
  animateLogoRotation();

  
});
const animateMenuEntrance = () => {
    gsap.from('.menu-item', {
        x: 1000,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: 'power3.out',
    });
};

const animateLogoRotation = () => {
    gsap.from(logoImg.value, {
    x: -1000, // Mueve desde la izquierda
    rotate: -180, // Gira desde atrás
    opacity: 0, // Comienza con opacidad cero
    duration: 1.5,
    ease: 'power3.out',
  });
};
</script>
<template>
    <div class="menu-container">
        <div class="menu-items">
            <div class="logo">
                <img ref="logoImg" src="../assets/img/logo-gran.png" alt="Logo" />
            </div>
            <div v-for="(ruta, index) in routes" :key="ruta.name" class="menu-item">
                <a class="menu-link" :href="'#' + ruta.name" @click="">
                    {{ ruta.text }}
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style> -->

<template>
    <div class="menu-container">
      <div class="menu-items">
        <div class="logo">
          <img ref="logoImg" src="../assets/img/logo-gran.png" alt="Logo" />
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
  import { ref } from 'vue';
  
  const activeRoute = ref('news'); // Ruta activa por defecto
  
  const routes = [
    { name: 'news', text: 'Noticias', color: '#222222' },
    { name: 'about', text: 'Acerca de mi', color: '#64676D' },
    { name: 'musica', text: 'Música', color: '#95AABF' },
    { name: 'biography', text: 'Biografía', color: ' #B2B0AC' },
    { name: 'contact', text: 'Contacto', color: '#D0CCC6' },
    { name: 'gallery', text: 'Galería', color: '#EEEFEC' },
];

  
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
    align-items: center;
  }
  
  .logo {
    margin-bottom: 20px;
  }
  
  .menu-item {
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s;
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
  </style>