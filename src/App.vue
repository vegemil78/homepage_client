<template>
  <v-app>
    <v-main>
      <!-- <Header /> -->
      <router-view/>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
// import Header from './components/PageHeader';
import Footer from './components/PageFooter';
export default {
  name: 'App',
  // components: {Header,Footer},
  components: {Footer},
  data: () => ({
    //
  }),
}
</script>
