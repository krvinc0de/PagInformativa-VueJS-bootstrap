<template>
  <div class="about">
    <hr>
    <h1 class="display-1">Nuestro motivo</h1>
    <div class="container fs-4 center-text">
      <p>
        Recientemente en Salamanca Gto, ocurrio un hecho violento en un restaurante bar conocido como barra 16.06, en ese restaurante,
        laboraba Jesus Almanza, un joven que trabajaba con la intencion de pagar sus estudios en el conservatorio de musica en la ciudad
        de celaya y cumplir su sue;o de convertirse en musico, lamentablemente Jesus Almanza, un gran y querido amigo fue una de las victimas del hecho violento
        que ocurrio en Barra 16.04. Amigos y conocidos de Jesus Almzanza nos hemos reunido para organizar un sorteo en beneficiencia de el
        y de su familia para solventar gastos medicos, de traslado, viaticos y en general lo que la familia de Jesus y el requieran. 
      </p>
    <hr>
    <h1 class="display-1">Gracias por tu ayuda</h1>
      <p>
        Con la compra de un boleto ayudas a los gastos medicos de nuestro amigo Jesus Almanza asi como gastos que surjan en todo su proceso
        de recuperacion medica. El dinero recaudado sera entregado a la familia de Jesus por medio de transferencia electronica a la cuenta
        bancaria de su madre.</p>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>

</style>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'About',
  components:{
    Footer
  }
}
</script>