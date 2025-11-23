<script>
</script>

<template>
  <!-- Hero Section -->
    <section id="home" class="pt-24 pb-16 md:pt-32 md:pb-24 academic-bg text-white">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row items-center justify-between">
                <div class="md:w-1/2 mb-10 md:mb-0 animate-slide-up">
                    <p class="text-lg mb-2 opacity-90">{{ $t('welcome') }}</p>
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ $t('name') }}</h1>
                    <h2 class="text-2xl md:text-3xl font-semibold mb-6">{{ $t('title') }}</h2>
                    <p class="text-lg mb-8 opacity-90">{{ $t('about_des01') }}</p>
                    <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="#projects" class="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 text-center">{{ $t('view_current_job') }}</a>
                        <a href="#contact" class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition duration-300 text-center">{{ $t('contact_me') }}</a>
                    </div>
                </div>
                <div class="md:w-2/5 flex justify-center animate-fade-in">
                    <div class="relative">
                        <div class="w-64 h-64 md:w-80 md:h-80 bg-white/20 rounded-full overflow-hidden shadow-2xl backdrop-blur-sm">
                            <img src="/images/IMG_0702.png" alt="{{ $t('name') }}" class="w-full h-full object-cover">
                        </div>
                        <div class="absolute -bottom-2 -right-2 bg-primary-600 text-white p-4 rounded-lg shadow-lg">
                            <p class="text-sm font-semibold">{{ $t('it_officer') }}</p>
                            <p class="text-xs">{{ $t('full_stack_developer') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  <!-- End Hero Section -->
</template>
