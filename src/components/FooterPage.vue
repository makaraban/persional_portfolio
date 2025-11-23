<script>

</script>
<template>
    <!-- Footer -->
    <footer class="bg-dark text-white py-12">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-6 md:mb-0 text-center md:text-left">
                    <p class="text-2xl font-bold">{{ $t('name') }}</p>
                    <p class="text-gray-400 mt-2" data-en="Full Stack Developer" data-es="Desarrollador Full Stack">{{ $t('it_officer') }}</p>
                </div>
                <div class="flex space-x-6 mb-6 md:mb-0">
                    <router-link to="/" class="text-gray-400 hover:text-white transition duration-300" :class="{active_link: $route.path=='/'}">{{ $t('home') }}</router-link>
                    <router-link to="/about" class="text-gray-400 hover:text-white transition duration-300" :class="{active_link: $route.path=='/about'}">{{ $t('about_me') }}</router-link>
                    <router-link to="/academic" class="text-gray-400 hover:text-white transition duration-300" :class="{active_link: $route.path=='/academic'}">{{ $t('academics') }}</router-link>
                    <router-link to="/skills" class="text-gray-400 hover:text-white transition duration-300" :class="{active_link: $route.path=='/skills'}">{{ $t('skills') }}</router-link>
                    <router-link to="/experience" class="text-gray-400 hover:text-white transition duration-300" :class="{active_link: $route.path=='/experience'}">{{ $t('experience') }}</router-link>
                    <router-link to="/current-job" class="text-gray-400 hover:text-white transition duration-300" :class="{active_link: $route.path=='/current-job'}">{{ $t('current_job') }}</router-link>
                    <!-- <router-link to="/contact" class="text-gray-400 hover:text-white transition duration-300" :class="{active_link: $route.path=='/contact'}">{{ $t('contact') }}</router-link> -->
                </div>
                <div class="flex space-x-4">
                    <a href="https://www.linkedin.com/in/ban-makara-84b71938b/" target="_blank" class="bg-gray-700 text-white w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition duration-300">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/makaraban" target="_blank" class="bg-gray-700 text-white w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition duration-300">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://x.com/errorlog_html?s=11" target="_blank" class="bg-gray-700 text-white w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition duration-300">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/makara.ban?igsh=MWVmbm1oYTBhdzI1MQ%3D%3D&utm_source=qr" target="_blank" class="bg-gray-700 text-white w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition duration-300">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p><span data-en="All rights reserved.">{{ $t('copy_right') }}</span></p>
            </div>
        </div>
    </footer>
    <!-- End Footer -->

</template>
