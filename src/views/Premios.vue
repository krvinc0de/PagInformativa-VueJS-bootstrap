<template>
    <div>
        <hr>
        <h1 class="fw-bold">LO QUE PUEDES GANAR CON ESTA RIFA</h1>
        <hr>
        <div class="container">
            <p class="justify-text">Los participantes de la rifa en beneficio de Jesus Humberto Almanza Tolentino
                pueden obtener 3 premios siempre y cuando hayan resultado ganadores en el
                sorteo. El sorteo contempla a 3 ganadores los cuales seran elejidos en vivo el
                dia (poner dia) en vivo en la plataforma de facebook. Recuerda estar al pendiente del grupo de facebook
                y de esta pagina para conocer a los ganadores.
            </p>
        <h1>Los premios que puedes llevarte son:</h1>
        <br>
        </div>
        <Infopremios/>
        <br><br>
        <Footer/>
    </div>
</template>

<script>
import Infopremios from '@/components/Infopremios.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Premios',
    components: {
        Infopremios,
        Footer
    }
}
</script>