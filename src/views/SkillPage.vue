<script></script>
<template>

  <!-- Hobbies & Interests Section -->
    <section id="hobbies" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <!-- Header Section -->
          <header class="text-center mb-16 animate-fade-in">
            <h1 class="text-3xl font-bold text-center mb-4">{{ $t("skills_technologies") }}</h1>
            <div class="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">{{ $t("skill_des") }}</p>
          </header>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Frontend Skills -->
                <div class="bg-white p-6 rounded-xl hover:shadow-lg shadow-sm">
                    <h3 class="text-xl font-semibold mb-6 flex items-center">
                        <i class="fas fa-palette text-primary-600 mr-3"></i>
                        Frontend Development
                    </h3>

                    <div class="space-y-5">
                        <div>
                            <div class="flex justify-between mb-1">
                                <span>HTML/CSS</span>
                                <span>95%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-primary-600 h-2 rounded-full skill-bar" style="width: 95%"></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between mb-1">
                                <span>JavaScript</span>
                                <span>90%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-primary-600 h-2 rounded-full skill-bar" style="width: 90%"></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between mb-1">
                                <span>Bootstrap</span>
                                <span>95%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-primary-600 h-2 rounded-full skill-bar" style="width: 95%"></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between mb-1">
                                <span>Vue.js</span>
                                <span>85%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-primary-600 h-2 rounded-full skill-bar" style="width: 85%"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Frontend Skills -->

                <!-- Backend Skills -->
                <div class="bg-white p-6 rounded-xl hover:shadow-lg shadow-sm border-lg">
                    <h3 class="text-xl font-semibold mb-6 flex items-center">
                        <i class="fas fa-server text-primary-600 mr-3"></i>
                        Backend Development
                    </h3>

                    <div class="space-y-5">
                        <div>
                            <div class="flex justify-between mb-1">
                                <span>PHP Framework</span>
                                <span>90%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-primary-600 h-2 rounded-full skill-bar" style="width: 90%"></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between mb-1">
                                <span>Node.js</span>
                                <span>88%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-primary-600 h-2 rounded-full skill-bar" style="width: 88%"></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between mb-1">
                                <span>Java Framework</span>
                                <span>80%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-primary-600 h-2 rounded-full skill-bar" style="width: 80%"></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between mb-1">
                                <span>MongoDB</span>
                                <span>75%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-primary-600 h-2 rounded-full skill-bar" style="width: 75%"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Backend Skills -->
          </div>

          <!-- Tools & Technologies -->
          <div class="mt-12">
                <h3 class="text-xl font-semibold text-center mb-8">Tools & Technologies</h3>
                <div class="flex flex-wrap justify-center gap-6">
                    <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg flex items-center">
                        <i class="fab fa-git-alt text-2xl text-primary-600 mr-3"></i>
                        <span>Git</span>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg flex items-center">
                        <i class="fab fa-figma text-2xl text-primary-600 mr-3"></i>
                        <span>Figma</span>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg flex items-center">
                        <i class="fab fa-docker text-2xl text-primary-600 mr-3"></i>
                        <span>Docker</span>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg flex items-center">
                        <i class="fab fa-aws text-2xl text-primary-600 mr-3"></i>
                        <span>AWS</span>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-sm flex hover:shadow-lg items-center">
                        <i class="fas fa-database text-2xl text-primary-600 mr-3"></i>
                        <span>Database</span>
                    </div>
                </div>
          </div>
          <!-- End Tools & Technologies -->
        </div>
    </section>
    <!-- End Hobbies & Interests Section -->

</template>
