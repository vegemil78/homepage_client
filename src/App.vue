<template>
  <v-app>
    <v-main>
<<<<<<< HEAD
      <Header />
=======
      <!-- <Header /> -->
>>>>>>> 2112133d1533d5d43073333b53b7d4cfb8c358c0
      <router-view/>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
<<<<<<< HEAD
import Header from './components/PageHeader';
import Footer from './components/PageFooter';
export default {
  name: 'App',
  components: {Header,Footer},
  //components: {Footer},
=======
// import Header from './components/PageHeader';
import Footer from './components/PageFooter';
export default {
  name: 'App',
  // components: {Header,Footer},
  components: {Footer},
>>>>>>> 2112133d1533d5d43073333b53b7d4cfb8c358c0
  data: () => ({
    //
  }),
}
</script>
