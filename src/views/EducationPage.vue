<script>

</script>
<template>
    <!-- Education Background Section -->
    <section id="experience" class="py-16 md:py-24">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-4">{{ $t("education") }}</h2>
            <div class="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

              <!-- Education Item 1 -->
              <div class="bg-gray-50 p-6 rounded-lg hover:shadow-lg shadow-md">
                    <div class="flex items-start mb-4">
                        <div class="bg-primary-600 text-white p-3 rounded-lg mr-4">
                            <i class="fas fa-graduation-cap text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold">{{ $t("bachelor") }}</h3>
                            <p class="text-gray-600">{{ $t("specialization_network") }}</p>
                            <p class="text-gray-500">2012 - 2016</p>
                        </div>
                    </div>
                    <p class="text-gray-700">{{ $t("bbu_btb_name") }}</p>
              </div>
              <!-- End Education Item 1 -->

              <!-- Education Item 2 -->
              <div class="bg-gray-50 p-6 rounded-lg hover:shadow-lg shadow-md">
                    <div class="flex items-start mb-4">
                        <div class="bg-primary-600 text-white p-3 rounded-lg mr-4">
                            <i class="fas fa-graduation-cap text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold">{{ $t("backii") }}</h3>
                            <p class="text-gray-600">{{ $t("hight_school_name") }}</p>
                            <p class="text-gray-500">2006 - 2009</p>
                        </div>
                    </div>
                    <p class="text-gray-700">{{ $t("location") }} ៖ {{ $t("omc") }}</p>
              </div>
              <!-- End Education Item 2 -->

              <!-- Education Item 3 -->
              <div class="bg-gray-50 p-6 rounded-lg hover:shadow-lg shadow-md">
                    <div class="flex items-start mb-4">
                        <div class="bg-primary-600 text-white p-3 rounded-lg mr-4">
                            <i class="fas fa-graduation-cap text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold">{{ $t("seconary_school") }}</h3>
                            <p class="text-gray-600">{{ $t("seconary_school_name") }}</p>
                            <p class="text-gray-500">2004 - 2006</p>
                        </div>
                    </div>
                    <p class="text-gray-700">{{ $t("location") }} ៖ {{ $t("omc") }}</p>
              </div>
              <!-- End Education Item 3 -->

              <!-- Education Item 4 -->
              <div class="bg-gray-50 p-6 rounded-lg hover:shadow-lg shadow-md">
                    <div class="flex items-start mb-4">
                        <div class="bg-primary-600 text-white p-3 rounded-lg mr-4">
                            <i class="fas fa-graduation-cap text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold">{{ $t("primary_school") }}</h3>
                            <p class="text-gray-600">{{ $t("primary_school_name") }}</p>
                            <p class="text-gray-500">1998 - 2004</p>
                        </div>
                    </div>
                    <p class="text-gray-700">{{ $t("location") }} ៖ {{ $t("omc") }}</p>
              </div>
              <!-- End Education Item 4 -->

            </div>

            <!-- Other Technical skills courses Section -->
            <div class="mt-20 bg-white rounded-2xl shadow-lg p-8">
                <h2 class="text-3xl font-bold text-center text-dark mb-10">{{ $t("technical_skills_courses") }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg text-center">
                        <div class="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-code text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-dark mb-2">Frontend</h3>
                        <p class="text-gray-600">Vue.js, Angular, JavaScript, TypeScript, HTML5, CSS3</p>
                    </div>

                    <div class="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl hover:shadow-lg text-center">
                        <div class="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-paint-brush text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-dark mb-2">Design</h3>
                        <p class="text-gray-600">Adobe Photoshop, Figma, Adobe XD, UI/UX Principles, Responsive Design</p>
                    </div>

                    <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-lg text-center">
                        <div class="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-tools text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-dark mb-2">Tools</h3>
                        <p class="text-gray-600">Git, Docker, npm, Tailwind CSS, Bootstrap</p>
                    </div>

                    <div class="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl hover:shadow-lg text-center">
                        <div class="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-server text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-dark mb-2">Backend</h3>
                        <p class="text-gray-600">Java(Spring Boot), PHP(Laravel), Node.js, Express, MongoDB, REST APIs</p>
                    </div>
                </div>
            </div>
            <!-- End Other Technical skills courses Section -->
        </div>
    </section>

    <!-- end Education Background Section -->

</template>

