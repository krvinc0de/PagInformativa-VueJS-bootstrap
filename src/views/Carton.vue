<template>
    <div>
        <hr>
        <div class="container">
           <h1 class="fw-bold">Carton de caguamas</h1>
           <img src="../assets/caguamas.png" class="img-fluid img">
            <h1>El tercer lugar obtendra un carton de caguamas</h1>
        </div>
        <h3>El premio contiene lo siguiente:</h3>
        <hr>
        <infocarton/>
        <hr>
        <Footer/>
    </div>
</template>

<script>
import infocarton from '@/components/infocarton.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Viaje',
        components: {
            infocarton,
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