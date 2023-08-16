<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const heroTitle = ref(null);
const heroSubtitle = ref(null);

onMounted(() => {
    animateHeroEntrance();
});

const animateHeroEntrance = () => {
    const tl = gsap.timeline();

    tl.from(heroTitle.value, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
    });

    tl.from(heroSubtitle.value, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
    }, "-=0.5"); // Retrasa la animación del subtítulo en 0.5 segundos
};


</script>
<template>
    <div class="landing">
        <div class="content">
            <section class="hero-section">
                <div class="overlay"></div>
                <div class="hero-content">
                    <h1 ref="heroTitle">GRAN RAH</h1>
                    <p ref="heroSubtitle">Sitio Oficial</p>
                    <!-- Agrega botones de llamada a la acción u otro contenido aquí -->
                </div>
            </section>
        </div>

    </div>
</template>


<style lang="scss" scoped></style>