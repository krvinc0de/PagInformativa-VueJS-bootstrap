<template>
    <div>
        <hr>
        <div class="container">
           <h1 class="fw-bold">Ixtapa Zihuatanejo</h1>
           <img src="../assets/ixtapa.jpg" class="img-fluid img">
            <h1>El primer lugar en la rifa obtendra un viaje a Ixtapa Zihuatanejo</h1>
        </div>
        <h3>El premio contiene lo siguiente:</h3>
        <hr>
        <infoviaje/>
        <hr>
        <Footer/>
    </div>
</template>

<script>
import infoviaje from '@/components/infoviaje.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Viaje',
        components: {
            infoviaje,
            Footer
        }
}
</script>

<style scoped>
.img{
    width: 900px;
    height: 400px;
    border-radius: 90px;
    border:white 5px outset;
}
</style>