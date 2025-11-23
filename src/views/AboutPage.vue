<script>

</script>
<template>
    <!-- About Me Section -->
    <section id="about" class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-4">{{ $t("about_me") }}</h2>
            <div class="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>
            <div class="flex flex-col md:flex-row">
                <div class="md:w-2/5 mb-8 md:mb-0 flex justify-center">
                    <div class="relative">
                        <div class="w-85 h-85 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg overflow-hidden">
                            <img src="/images/makara.jpg" alt="{{ $t('about_me') }}" class="object-cover" width="410" height="410">
                        </div>
                        <div class="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-md border">
                            <i class="fas fa-graduation-cap text-primary-500 text-2xl"></i>
                        </div>
                    </div>
                </div>
                <div class="md:w-3/5 md:pl-12">
                    <p class="text-lg mb-6">{{ $t("about_des01") }}</p>
                    <p class="text-lg mb-6">{{ $t("about_des02") }}</p>
                    <p class="text-lg mb-6">{{ $t("about_des03") }}</p>
                    <div class="grid grid-cols-2 gap-4 mb-8">
                        <div class="flex items-center">
                            <i class="fas fa-check text-primary-500 mr-2"></i>
                            <span>{{ $t("machine_earning_sesearch") }}</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-check text-primary-500 mr-2"></i>
                            <span>{{ $t("data_analysis_visualization") }}</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-check text-primary-500 mr-2"></i>
                            <span>{{ $t("coding") }}</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-check text-primary-500 mr-2"></i>
                            <span>{{ $t("teaching_mentoring") }}</span>
                        </div>
                    </div>
                    <!-- <div class="flex space-x-4">
                        <a href="#" class="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition duration-300">
                            {{ $t("download_cv") }}
                            <i class="fas fa-download ml-2"></i>
                        </a>
                        <a href="#publications" class="inline-flex items-center border border-primary-500 text-primary-500 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition duration-300">
                            {{ $t("view_publications") }}
                            <i class="fas fa-book-open ml-2"></i>
                        </a>
                    </div> -->
                </div>
            </div>


        </div>

    </section>
    <!-- End About Me Section -->

    <!-- Hobbies & Interests Section -->
    <section id="hobbies" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <!-- Header Section -->
          <header class="text-center mb-16 animate-fade-in">
            <h1 class="text-3xl font-bold text-center mb-4">{{ $t("hibbies_interests") }}</h1>
            <div class="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">{{ $t("hibbies_interests_des") }}</p>
          </header>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Hobby 1 -->
                <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg text-center hover:shadow-md transition">
                    <div class="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-hiking text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">{{ $t("hiking_nature") }}</h3>
                    <p class="text-gray-600">{{ $t("hiking_nature_des") }}</p>
                </div>

                <!-- Hobby 2 -->
                <div class="bg-gradient-to-br from-green-50 to-teal-50 p-6 text-center hover:shadow-md transition">
                    <div class="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-book text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">{{ $t("reading_book") }}</h3>
                    <p class="text-gray-600">{{ $t("reading_book_des") }}</p>
                </div>

                <!-- Hobby 3 -->
                <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg text-center hover:shadow-md transition">
                    <div class="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-music text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">{{ $t("listening_song") }}</h3>
                    <p class="text-gray-600">{{ $t("listening_song_des") }}</p>
                </div>

                <!-- Hobby 4 -->
                <div class="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl text-center hover:shadow-md transition">
                    <div class="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-futbol text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">{{ $t("sport") }}</h3>
                    <p class="text-gray-600">{{ $t("sport_des") }}</p>
                </div>
          </div>
        </div>
    </section>
    <!-- End Hobbies & Interests Section -->

</template>
