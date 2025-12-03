<script setup>

  import NavigationPage from '@/components/NavigationPage.vue';
  import FooterPage from '@/components/FooterPage.vue';
  import BackToTop from '@/components/BackToTop.vue';

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
</style>
