<script></script>

<template>
    <!-- Work Experience Section -->
    <section id="experience" class="bg-gray-50">
        <div class="container mx-auto px-4 py-16 md:py-24">
        <!-- Header Section -->
        <header class="text-center mb-16 animate-fade-in">
            <h1 class="text-3xl font-bold text-center mb-4">{{ $t("work_experience") }}</h1>
            <div class="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">{{ $t("experiience_description") }}</p>
        </header>


        <!-- Main Content -->
        <div class="flex flex-col lg:flex-row gap-8">
            <!-- Timeline Section -->
            <div class="container mx-auto bg-gray-50">
                <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <i class="fas fa-briefcase mr-3 text-primary"></i> {{ $t("work_experience") }}
                    </h2>

                    <!-- Timeline -->
                    <div class="relative">
                        <!-- Timeline Line -->
                        <div class="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary transform translate-x-1/2 hidden md:block"></div>

                        <!-- Timeline Items -->
                        <div class="space-y-10">

                            <!-- Experience 2 -->
                            <div class="relative flex timeline-item">
                                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center z-10 shadow-lg">
                                    <i class="fas fa-laptop-code"></i>
                                </div>
                                <div class="ml-6 md:ml-8 flex-1 bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 card-hover">
                                    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                        <div>
                                            <h3 class="text-xl font-bold text-gray-800">{{ $t("it_officer")}}</h3>
                                            <p class="text-green-600 font-medium">{{ $t("title") }}</p>
                                        </div>
                                        <span class="inline-block mt-2 md:mt-0 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">2019 - {{ $t('present') }}</span>
                                    </div>
                                    <p class="text-gray-600 mb-4">{{ $t("current_job_des") }}</p>
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Office Support</span>
                                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Network</span>
                                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">HTML/CSS</span>
                                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">PHP Framework</span>
                                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Database(Ms SQL & MySQL)</span>
                                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Other</span>
                                    </div>
                                    <!-- <ul class="text-gray-600 list-disc pl-5 space-y-1">
                                        <li>Built 10+ reusable component libraries used across multiple projects</li>
                                        <li>Reduced page load time by 30% through code splitting and lazy loading</li>
                                        <li>Collaborated with backend team to design and implement RESTful APIs</li>
                                    </ul> -->
                                </div>
                            </div>

                            <!-- Experience 1 -->
                            <div class="relative flex timeline-item">
                                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary-700 text-white flex items-center justify-center z-10 shadow-lg">
                                    <i class="fas fa-server"></i>
                                </div>
                                <div class="ml-6 md:ml-8 flex-1 bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 card-hover">
                                    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                        <div>
                                            <h3 class="text-xl font-bold text-gray-800">{{ $t("full_stack_developer") }}</h3>
                                            <p class="text-primary-700 font-medium">{{ $t("part_time_job") }}</p>
                                        </div>
                                        <span class="inline-block mt-2 md:mt-0 bg-primary-700 text-white px-3 py-1 rounded-full text-sm font-medium">2017 - 2018</span>
                                    </div>
                                    <p class="text-gray-600 mb-4">{{ $t("full_stack_des")}}</p>
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        <span class="px-3 py-1 bg-primary-600 text-white rounded-full text-sm">HTML/CSS</span>
                                        <span class="px-3 py-1 bg-primary-600 text-white rounded-full text-sm">JavaScript</span>
                                        <span class="px-3 py-1 bg-primary-600 text-white rounded-full text-sm">PHP Framework</span>
                                        <span class="px-3 py-1 bg-primary-600 text-white rounded-full text-sm">Bootstrap</span>
                                        <span class="px-3 py-1 bg-primary-600 text-white rounded-full text-sm">Database</span>
                                    </div>
                                    <!-- <ul class="text-gray-600 list-disc pl-5 space-y-1">
                                        <li>Improved application performance by 40% through code optimization</li>
                                        <li>Mentored 3 junior developers and conducted technical interviews</li>
                                        <li>Led migration from class components to functional components with hooks</li>
                                    </ul> -->
                                </div>
                            </div>

                            <div class="relative flex timeline-item">
                                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center z-10 shadow-lg">
                                    <i class="fas fa-laptop-code"></i>
                                </div>
                                <div class="ml-6 md:ml-8 flex-1 bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 card-hover">
                                    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                        <div>
                                            <h3 class="text-xl font-bold text-gray-800">{{ $t("web_evelopment") }}</h3>
                                            <p class="text-primary font-medium">{{ $t("cct") }}.</p>
                                        </div>
                                        <span class="inline-block mt-2 md:mt-0 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">2016 - 2017</span>
                                    </div>
                                    <p class="text-gray-600 mb-4">{{ $t("web_developer_des")}}</p>
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        <span class="px-3 py-1 bg-primary-500 text-white rounded-full text-sm">Ms Office</span>
                                        <span class="px-3 py-1 bg-primary-500 text-white rounded-full text-sm">Graphic Design</span>
                                        <span class="px-3 py-1 bg-primary-500 text-white rounded-full text-sm">Web Design</span>
                                        <span class="px-3 py-1 bg-primary-500 text-white rounded-full text-sm">Web Base Application</span>
                                        <span class="px-3 py-1 bg-primary-500 text-white rounded-full text-sm">MySQL</span>
                                    </div>
                                    <!-- <ul class="text-gray-600 list-disc pl-5 space-y-1">
                                        <li>Improved application performance by 40% through code optimization</li>
                                        <li>Mentored 3 junior developers and conducted technical interviews</li>
                                        <li>Led migration from class components to functional components with hooks</li>
                                    </ul> -->
                                </div>
                            </div>

                            <!-- Experience 2 -->
                            <div class="relative flex timeline-item">
                                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center z-10 shadow-lg">
                                    <i class="fas fa-code"></i>
                                </div>
                                <div class="ml-6 md:ml-8 flex-1 bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 card-hover">
                                    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                        <div>
                                            <h3 class="text-xl font-bold text-gray-800">{{ $t("it_support")}}</h3>
                                            <p class="text-green-600 font-medium">{{ $t("ctep") }}</p>
                                        </div>
                                        <span class="inline-block mt-2 md:mt-0 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">2013 - 2016</span>
                                    </div>
                                    <p class="text-gray-600 mb-4">{{ $t("it_support_des") }}</p>
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Office Support</span>
                                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Network</span>
                                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Other</span>
                                    </div>
                                    <!-- <ul class="text-gray-600 list-disc pl-5 space-y-1">
                                        <li>Built 10+ reusable component libraries used across multiple projects</li>
                                        <li>Reduced page load time by 30% through code splitting and lazy loading</li>
                                        <li>Collaborated with backend team to design and implement RESTful APIs</li>
                                    </ul> -->
                                </div>
                            </div>

                            <!-- Experience 4 -->
                            <div class="relative flex timeline-item">
                                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center z-10 shadow-lg">
                                    <i class="fas fa-graduation-cap"></i>
                                </div>
                                <div class="ml-6 md:ml-8 flex-1 bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 card-hover">
                                    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                        <div>
                                            <h3 class="text-xl font-bold text-gray-800">{{ $t("web_evelopment") }} {{ $t("intern") }}</h3>
                                            <p class="text-yellow-600 font-medium">{{ $t("start_up_job") }}</p>
                                        </div>
                                        <span class="inline-block mt-2 md:mt-0 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">2012 - 2013</span>
                                    </div>
                                    <p class="text-gray-600 mb-4">{{ $t("intern_des") }}.</p>
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">HTML/CSS</span>
                                        <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">JavaScript</span>
                                        <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">WordPress</span>
                                        <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">PHP</span>
                                    </div>
                                    <!-- <ul class="text-gray-600 list-disc pl-5 space-y-1">
                                        <li>Developed and maintained 5+ company websites</li>
                                        <li>Assisted in implementing SEO best practices</li>
                                        <li>Participated in agile development processes and team meetings</li>
                                    </ul> -->
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
    </section>
    <!-- End Work Experience Section -->


</template>
