<template>
  <div class="home">
    <Informacion/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Informacion from '@/components/Informacion.vue'

export default {
  name: 'Home',
  components: {
    Footer,
    Informacion
  }
}
</script>