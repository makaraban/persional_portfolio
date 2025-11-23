<script>
  import NavigationPage from './components/NavigationPage.vue';
  import FooterPage from './components/FooterPage.vue';
  import BackToTop from './components/BackToTop.vue';
  export default {
    components: {
      NavigationPage,
      FooterPage,
      BackToTop,
    }
  };
</script>

<template>
  <!-- NavigationPage -->
  <NavigationPage />
  <!-- End NavigationPage -->
  <!-- Router View -->
  <router-view/>
  <!-- End Router View -->
  <!-- Footer -->
  <FooterPage />
  <!-- End Footer -->
  <!-- BackToTop -->
  <BackToTop/>
  <!-- End BackToTop -->

</template>

<style>
  * {
    font-family: "Roboto", "Kantumruy Pro", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }
  .active_link {
        color: #3490dc;
        font-weight: 500;
    }
    .active_link_hidden {
        background-color: #3490dc;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
    }
</style>
