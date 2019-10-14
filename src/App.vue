<template>
  <div id="app" style="background: linear-gradient(180deg, #681131 0%, #000000 100%);">
  <navbar />
  <div class="body">
    <router-view/>
  </div>
  <footer />
  </div>
</template>

<script>
import induob from './components/induob.vue'
import navbar from './components/navbar/navbar.vue'
import footer from './components/footer/footer.vue'

export default {
  name: 'app',
  components: {
      induob,
      navbar,
      footer,
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');

  body {
    background: #EEF1F4 !important;
    font-family: 'Lato', sans-serif !important;
  }

  .nav-background {
    background: #353535;
  }
</style>
