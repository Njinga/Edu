<template>
    <div id="app" class=" border border-info">
        <Navbar></Navbar>

        <router-view />

        <ScrollTopArrow></ScrollTopArrow>
            <Footer></Footer>

</div>
</template>

<script>
// @ is an alias to /src
    import Navbar from '@/components/Navbar.vue'
    import Footer from '@/components/Footer.vue'
    import ScrollTopArrow from '@/components/ScrollTopArrow.vue'

export default {
  name: 'home',
  components: {
      Navbar,
      Footer,
      ScrollTopArrow
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  margin-top: 55px;
  text-align: center;
  color: #2c3e50;
}

</style>
