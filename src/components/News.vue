<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const text = "Nuevo trabajo junto a Gonem Beats";
const typedText = ref('');

onMounted(() => {
    typeText();
});


const typeText = () => {
    let index = 0;
    function typeNext() {
        if (index < text.length) {
            typedText.value += text.charAt(index);
            index++;
            gsap.delayedCall(0.1, typeNext);
        }
    }
    typeNext();
};

</script>
<template>
    <div class="seccion" id="news">
        <div class="noticias news-gap">
            <div class="noticias-info">
              <h1>NOTICIAS</h1>


                <div class="news-video-info">

                    <div class="news-video-info-video">

                        <iframe width="450" height="350" src="https://www.youtube.com/embed/oi5BcZZOJgA"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>

                    </div>

                    <div class="news-video-info-info mt-6">

                        <div class="typewriter mb-3">
                            <p>{{ typedText }}</p>
                        </div>
                        <p class="mb-3">
                            Cualquier cosa es papel, título de esta canción que formara parte del nuevo trabajo que estamos
                            realizando junto a Gonem Beats y JesteinRitmos
                        </p>
                        <div>
                            <h4 class="mt-6">ESCUCHALO EN:</h4>

                            <div class="news-icons mt-6">

                                <v-icon icon="mdi-youtube" size="100" color="white"></v-icon>
                                <v-icon icon="mdi-spotify" size="100" color="white"></v-icon>
                                <v-icon icon="mdi-music" size="100" color="white"></v-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="noticias-img">
                <img src="../assets/img/granrah-6.JPG" alt="">
            </div>
        </div>
    </div>
</template>


<style>
.noticias-info h1 {
    color: white;
    text-align: left;
    margin-left: 4rem;
    font-size: 4rem;
    text-decoration: underline;
}

.typewriter p {

    text-transform: uppercase;
    text-align: justify;
    color: white;
}

#news {
    background-color: black;
}

.news-video-info-video {
    padding-left: 2rem;
}

.news-gap {
    gap: 2rem;
    margin-top: 3rem;
}

.news-video-info {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem;
    margin-top: 2rem;
}

.news-video-info-info {
    text-align: justify;
    color: white;

}

.news-icons{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-around;
   
}
</style>