
<script>
export default {
  name: 'BackToTop',
  data() {
    return {
      showButton: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showButton = window.pageYOffset > 300
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <button
    id="backToTop"
    class="fixed bottom-6 right-6 bg-primary-500 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-primary-600 transition duration-300"
    :class="{ 'hidden': !showButton }"
    @click="scrollToTop"
  >
    <i class="fas fa-arrow-up"></i>
  </button>
</template>
