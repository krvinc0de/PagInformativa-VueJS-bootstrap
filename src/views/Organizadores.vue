<template>
    <div>
        <div class="container">
            <br>
            <h1 class="display-1">¿Tienes dudas?</h1>
            <hr>
            <h4 class="display-6">Puede contactarnos en los siguientes medios</h4>
            <p>
                Si tienes alguna duda acerca de esta rifa no dudes en contactarnos
                en los siguientes medios de contacto que aparecen abajo.
                Si quieres apoyarnos comprando un boleto tambien puedes contactarnos
                por esos medios.
            </p>
        </div>
        <br>
        <infoorg/>
        <Footer/>
    </div>
</template>

<script>
import infoorg from '@/components/infoorg.vue'
import Footer from '@/components/Footer.vue'

export default {
    components:{
        infoorg,
        Footer
    }
}
</script>

<style scoped>

</style>