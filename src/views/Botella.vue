<template>
    <div>
        <hr>
        <div class="container">
           <h1 class="fw-bold">Botellas de tequila</h1>
           <img src="../assets/tequila.png" class="img-fluid img">
            <h1>El segundo lugar obtendra dos botellas de tequila azul</h1>
        </div>
        <h3>El premio contiene lo siguiente:</h3>
        <hr>
        <infobotella/>
        <hr>
        <Footer/>
    </div>
</template>

<script>
import infobotella from '@/components/infobotella.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Viaje',
        components: {
            infobotella,
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