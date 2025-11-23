<script>
  import HeroSection from './HeroSectionPage.vue';
  import AboutPage from './AboutPage.vue';
  // import AcademicPage from './AcademicPage.vue';
  import EducationPage from './EducationPage.vue';
  // import SkillPage from './SkillPage.vue';
  import Experience from './Experience.vue';
  import CurrentJob from './CurrentJobPage.vue';
  // import ProjectPage from './ProjectPage.vue';
  import ContactPage from './ContactPage.vue';
  export default {
    components: {
      HeroSection,
      AboutPage,
      EducationPage,
      // SkillPage,
      Experience,
      CurrentJob,
      ContactPage
    }
  };
</script>
<template>
    <HeroSection />
    <AboutPage />
    <EducationPage />
    <!-- <SkillPage /> -->
    <Experience />
    <CurrentJob />
    <ContactPage />
</template>
