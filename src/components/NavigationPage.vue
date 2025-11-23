<script>

  export default{
        methods: {
            switchLanguage(){
                const locale = this.$i18n.locale;
                if(locale === 'en') {
                    this.$i18n.locale = 'km';
                }else{
                    this.$i18n.locale = 'en';
                }
            },
            toggleMobileMenu() {
                const menu = document.getElementById('mobile-menu');
                menu.classList.toggle('hidden');
            },
        },
        mounted() {
            const button = document.getElementById('mobile-menu-button');
            button.addEventListener('click', this.toggleMobileMenu);
        },

    }

</script>
<template>

    <!-- Navigation -->
    <nav class="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <router-link to="/" class="text-2xl font-bold text-primary-600">{{ $t('name') }}</router-link>
            <div class="hidden md:flex space-x-8">
                <router-link to="/" class="text-dark hover:text-primary-600 transition duration-300" :class="{active_link: $route.path=='/'}">{{ $t('home')}}</router-link>
                <router-link to="/about" class="text-dark hover:text-primary-600 transition duration-300" :class="{active_link: $route.path=='/about'}">{{ $t('about_me')}}</router-link>
                <router-link to="/education" class="text-dark hover:text-primary-600 transition duration-300" :class="{active_link: $route.path=='/education'}">{{ $t('academics')}}</router-link>
                <!-- <router-link to="/skills" class="text-dark hover:text-primary-600 transition duration-300" :class="{active_link: $route.path=='/skills'}">{{ $t('skills')}}</router-link> -->
                <router-link to="/experience" class="text-dark hover:text-primary-600 transition duration-300" :class="{active_link: $route.path=='/experience'}">{{ $t('experience')}}</router-link>
                <router-link to="/current-job" class="text-dark hover:text-primary-600 transition duration-300" :class="{active_link: $route.path=='/current-job'}">{{ $t('current_job')}}</router-link>
                <router-link to="/projects" class="text-dark hover:text-primary-600 transition duration-300" :class="{active_link: $route.path=='/projects'}">{{ $t('portfolio')}}</router-link>
                <router-link to="/contact" class="text-dark hover:text-primary-600 transition duration-300" :class="{active_link: $route.path=='/contact'}">{{ $t('contact')}}</router-link>
                <!-- Language switcher buttons -->
                <button @click="switchLanguage" class="text-2xl">
                  {{ $i18n.locale === 'en' ? '🇰🇭' : '🇺🇸' }}
                </button>
                <!-- End Language switcher buttons -->
            </div>
            <button class="md:hidden text-dark focus:outline-none" id="mobile-menu-button">
                <i class="fas fa-bars text-xl"></i>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden hidden bg-white py-4 px-6 shadow-lg" id="mobile-menu">

            <div class="flex flex-col space-y-4">
                <router-link to="/" class="text-dark hover:text-primary-600 transition duration-300" :class="{active_link: $route.path=='/'}">{{ $t('home')}}</router-link>
                <router-link to="/about" class="text-dark hover:text-primary-600 transition duration-300" :class="{ active_link: $route.path=='/about' }">{{ $t('about_me')}}</router-link>
                <router-link to="/education" class="text-dark hover:text-primary-600 transition duration-300" :class="{ active_link: $route.path=='/education' }">{{ $t('academics')}}</router-link>
                <!-- <router-link to="/skills" class="text-dark hover:text-primary-600 transition duration-300" :class="{ active_link: $route.path=='/skills' }">{{ $t('skills')}}</router-link> -->
                <router-link to="/experience" class="text-dark hover:text-primary-600 transition duration-300" :class="{ active_link: $route.path=='/experience' }">{{ $t('experience')}}</router-link>
                <router-link to="/current-job" class="text-dark hover:text-primary-600 transition duration-300" :class="{ active_link: $route.path=='/current-job' }">{{ $t('current_job')}}</router-link>
                <router-link to="/projects" class="text-dark hover:text-primary-600 transition duration-300" :class="{ active_link: $route.path=='/projects' }">{{ $t('portfolio')}}</router-link>
                <router-link to="/contact" class="text-dark hover:text-primary-600 transition duration-300" :class="{ active_link: $route.path=='/contact' }">{{ $t('contact')}}</router-link>

                <!-- Language switcher buttons -->
                <button @click="switchLanguage" class="flex text-2xl">
                  {{ $i18n.locale === 'en' ? '🇰🇭' : '🇺🇸' }}
                </button>
                <!-- End Language switcher buttons -->
            </div>
        </div>
    </nav>
    <!-- End Navigation -->

</template>
<style scoped>

</style>
