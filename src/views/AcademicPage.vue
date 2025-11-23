<script>

</script>
<template>
    <!-- Academic Background Section -->
    <section id="experience" class="py-16 md:py-24">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-4">{{ $t("academic_background") }}</h2>
            <div class="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

            <div class="relative">
                <!-- Timeline line -->
                <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-100"></div>

                <!-- Experience Item 1 -->
                <div class="mb-12 flex">
                    <div class="hidden md:block md:w-1/2 md:pr-12"></div>
                    <div class="flex-grow-0 flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 border-4 border-white shadow-md z-10 mt-1"></div>
                    <div class="ml-6 md:ml-0 md:w-1/2 md:pl-12">
                        <div class="bg-white p-6 rounded-xl shadow-md card-hover border-l-4 border-primary-500">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-bold">{{ $t("bachelor_it") }}</h3>
                                <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">2012 - 2016</span>
                            </div>
                            <p class="text-primary-600 font-semibold mb-4"><i class="fas fa-graduation-cap text-2xl"></i> {{ $t("bbu_btb_name") }}</p>
                            <p class="mb-4">{{ $t("study_duration") }} 4 {{ $t("year") }}.</p>
                        </div>
                    </div>
                </div>

                <!-- Experience Item 2 -->
                <div class="mb-12 flex">
                    <div class="md:w-1/2 md:pr-12">
                        <div class="bg-white p-6 rounded-xl shadow-md card-hover border-l-4 border-primary-500 text-right">
                            <div class="flex justify-between items-start mb-2 flex-row-reverse">
                                <h3 class="text-xl font-bold">{{ $t("hight_school") }}</h3>
                                <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">2006 - 2009</span>
                            </div>
                            <p class="text-primary-600 font-semibold mb-4"><i class="fas fa-graduation-cap text-2xl"></i> {{ $t("hight_school_name") }}</p>
                            <p class="mb-4">{{ $t("study_duration") }} 3 {{ $t("year") }}.</p>

                        </div>
                    </div>
                    <div class="flex-grow-0 flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 border-4 border-white shadow-md z-10 mt-1"></div>
                    <div class="hidden md:block md:w-1/2 md:pl-12"></div>
                </div>

                <!-- Experience Item 3 -->
                <div class="mb-12 flex">
                    <div class="hidden md:block md:w-1/2 md:pr-12"></div>
                    <div class="flex-grow-0 flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 border-4 border-white shadow-md z-10 mt-1"></div>
                    <div class="ml-6 md:ml-0 md:w-1/2 md:pl-12">
                        <div class="bg-white p-6 rounded-xl shadow-md card-hover border-l-4 border-primary-500">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-bold">{{ $t("seconary_school") }}</h3>
                                <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">2003 - 2006</span>
                            </div>
                            <p class="text-primary-600 font-semibold mb-4"><i class="fas fa-graduation-cap text-2xl"></i> {{ $t("seconary_school_name")}}</p>
                            <p class="mb-4">{{ $t("study_duration") }} 3 {{ $t("year") }}.</p>
                            <!-- <ul class="list-disc list-inside space-y-1 text-gray-600">
                                <li>Developed front-end components using HTML, CSS, and JavaScript</li>
                            </ul> -->
                        </div>
                    </div>
                </div>

                <!-- Experience Item 2 -->
                <div class="mb-12 flex">
                    <div class="md:w-1/2 md:pr-12">
                        <div class="bg-white p-6 rounded-xl shadow-md card-hover border-l-4 border-primary-500 text-right">
                            <div class="flex justify-between items-start mb-2 flex-row-reverse">
                                <h3 class="text-xl font-bold">{{ $t("primary_school") }}</h3>
                                <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">1998 - 2003</span>
                            </div>
                            <p class="text-primary-600 font-semibold mb-4"><i class="fas fa-graduation-cap text-2xl"></i> {{ $t("primary_school_name") }}</p>
                            <p class="mb-4">{{ $t("study_duration") }} 6 {{ $t("year") }}.</p>
                            <!-- <ul class="list-disc list-inside space-y-1 text-gray-600">
                                <li>Built custom WordPress themes and plugins for various clients</li>
                            </ul> -->
                        </div>
                    </div>
                    <div class="flex-grow-0 flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 border-4 border-white shadow-md z-10 mt-1"></div>
                    <div class="hidden md:block md:w-1/2 md:pl-12"></div>
                </div>


            </div>

            <!-- Other Technical skills courses Section -->
            <div class="mt-20 bg-white rounded-2xl shadow-lg p-8">
                <h2 class="text-3xl font-bold text-center text-dark mb-10">{{ $t("technical_skills_courses") }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center">
                        <div class="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-code text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-dark mb-2">Frontend</h3>
                        <p class="text-gray-600">React, Vue, JavaScript, TypeScript, HTML5, CSS3</p>
                    </div>

                    <div class="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl text-center">
                        <div class="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-paint-brush text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-dark mb-2">Design</h3>
                        <p class="text-gray-600">Figma, Adobe XD, UI/UX Principles, Responsive Design</p>
                    </div>

                    <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl text-center">
                        <div class="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-tools text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-dark mb-2">Tools</h3>
                        <p class="text-gray-600">Git, Webpack, npm, Tailwind CSS, Bootstrap</p>
                    </div>

                    <div class="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl text-center">
                        <div class="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-server text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-dark mb-2">Backend</h3>
                        <p class="text-gray-600">Node.js, Express, MongoDB, REST APIs</p>
                    </div>
                </div>
            </div>
            <!-- End Other Technical skills courses Section -->
        </div>
    </section>

    <!-- end Academic Background Section -->

</template>
