<script>

</script>
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
            <div class="lg:w-2/3">
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
                            <!-- Experience 1 -->
                            <div class="relative flex timeline-item">
                                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary-700 text-white flex items-center justify-center z-10 shadow-lg">
                                    <i class="fas fa-server"></i>
                                </div>
                                <div class="ml-6 md:ml-8 flex-1 bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 card-hover">
                                    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                        <div>
                                            <h3 class="text-xl font-bold text-gray-800">{{ $t("it_officer") }}</h3>
                                            <p class="text-primary-700 font-medium">{{ $t("title") }}</p>
                                        </div>
                                        <span class="inline-block mt-2 md:mt-0 bg-primary-700 text-white px-3 py-1 rounded-full text-sm font-medium">2019 - {{ $t('present') }}</span>
                                    </div>
                                    <p class="text-gray-600 mb-4">{{ $t("full_stack_des")}}</p>
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        <span class="px-3 py-1 bg-primary-600 text-white rounded-full text-sm">Vue.js</span>
                                        <span class="px-3 py-1 bg-primary-600 text-white rounded-full text-sm">TypeScript</span>
                                        <span class="px-3 py-1 bg-primary-600 text-white rounded-full text-sm">Node.js</span>
                                        <span class="px-3 py-1 bg-primary-600 text-white rounded-full text-sm">Tailwind CSS</span>
                                        <span class="px-3 py-1 bg-primary-600 text-white rounded-full text-sm">Database</span>
                                    </div>
                                    <ul class="text-gray-600 list-disc pl-5 space-y-1">
                                        <li>Improved application performance by 40% through code optimization</li>
                                        <li>Mentored 3 junior developers and conducted technical interviews</li>
                                        <li>Led migration from class components to functional components with hooks</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="relative flex timeline-item">
                                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center z-10 shadow-lg">
                                    <i class="fas fa-laptop-code"></i>
                                </div>
                                <div class="ml-6 md:ml-8 flex-1 bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 card-hover">
                                    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                        <div>
                                            <h3 class="text-xl font-bold text-gray-800">{{ $t("ict_teacher") }}</h3>
                                            <p class="text-primary font-medium">{{ $t("cct") }}.</p>
                                        </div>
                                        <span class="inline-block mt-2 md:mt-0 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">2016 - 2017</span>
                                    </div>
                                    <p class="text-gray-600 mb-4">{{ $t("full_stack_des")}}</p>
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        <span class="px-3 py-1 bg-primary-500 text-white rounded-full text-sm">Ms Office</span>
                                        <span class="px-3 py-1 bg-primary-500 text-white rounded-full text-sm">Graphic Design</span>
                                        <span class="px-3 py-1 bg-primary-500 text-white rounded-full text-sm">Web Design</span>
                                        <span class="px-3 py-1 bg-primary-500 text-white rounded-full text-sm">Web Base Application</span>
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
                                    <p class="text-gray-600 mb-4">Developed responsive web applications and collaborated with UX designers to implement pixel-perfect interfaces.</p>
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Office Support</span>
                                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Network</span>
                                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Other</span>
                                    </div>
                                    <ul class="text-gray-600 list-disc pl-5 space-y-1">
                                        <li>Built 10+ reusable component libraries used across multiple projects</li>
                                        <li>Reduced page load time by 30% through code splitting and lazy loading</li>
                                        <li>Collaborated with backend team to design and implement RESTful APIs</li>
                                    </ul>
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

            <!-- Skills & Info Section -->
            <div class="lg:w-1/3 space-y-8">
                <!-- Skills Card -->
                <div class="bg-white rounded-2xl shadow-lg p-6 animate-slide-up card-hover">
                    <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <i class="fas fa-tools mr-3 text-primary-500"></i> Technical Skills
                    </h2>

                    <div class="space-y-5">
                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-gray-700 font-medium">JavaScript/TypeScript</span>
                                <span class="text-prima-500">95%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 95%"></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-gray-700 font-medium">React/Next.js</span>
                                <span class="text-gray-500">90%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-secondary h-2.5 rounded-full skill-bar" style="width: 90%"></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-gray-700 font-medium">Vue.js</span>
                                <span class="text-gray-500">85%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-green-500 h-2.5 rounded-full skill-bar" style="width: 85%"></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-gray-700 font-medium">Tailwind CSS</span>
                                <span class="text-gray-500">92%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-blue-500 h-2.5 rounded-full skill-bar" style="width: 92%"></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-gray-700 font-medium">UI/UX Design</span>
                                <span class="text-gray-500">80%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-purple-500 h-2.5 rounded-full skill-bar" style="width: 80%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Education Card -->
                <div class="bg-white rounded-2xl shadow-lg p-6 animate-slide-up card-hover">
                    <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <i class="fas fa-university mr-3 text-blue-500"></i> Education
                    </h2>

                    <div class="space-y-4">
                        <div class="border-l-4 border-blue-500 pl-4 py-1">
                            <h3 class="font-bold text-gray-800">Bachelor of Computer Science</h3>
                            <p class="text-gray-600">University of Technology</p>
                            <p class="text-gray-500 text-sm">2014 - 2018</p>
                        </div>

                        <div class="border-l-4 border-green-500 pl-4 py-1">
                            <h3 class="font-bold text-gray-800">Frontend Development Certification</h3>
                            <p class="text-gray-600">Online Coding Academy</p>
                            <p class="text-gray-500 text-sm">2019</p>
                        </div>
                    </div>
                </div>

                <!-- Achievements Card -->
                <div class="bg-white rounded-2xl shadow-lg p-6 animate-slide-up card-hover">
                    <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <i class="fas fa-trophy mr-3 text-primary"></i> Key Achievements
                    </h2>

                    <div class="space-y-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                                <i class="fas fa-medal text-yellow-600"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-gray-800">Employee of the Year</h3>
                                <p class="text-gray-600 text-sm">Tech Innovations Inc. - 2023</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                <i class="fas fa-award text-blue-600"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-gray-800">Best UI Implementation</h3>
                                <p class="text-gray-600 text-sm">Web Dev Conference - 2021</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                <i class="fas fa-certificate text-green-600"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-gray-800">Open Source Contributor</h3>
                                <p class="text-gray-600 text-sm">GitHub - 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    <!-- End Work Experience Section -->

     <!-- Experience Section -->
    <section id="experience" class="py-16">
        <div class="container mx-auto px-6">
            <header class="text-center mb-16 animate-fade-in">
                <h1 class="text-3xl font-bold text-center mb-4">{{ $t("work_experience") }}</h1>
                <div class="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">{{ $t("experiience_description") }}</p>
            </header>

            <div class="relative">
                <!-- Timeline line -->
                <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-700/20"></div>

                <!-- Experience 1 -->
                <div class="mb-12 flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                        <h3 class="text-xl font-semibold">Senior Web Developer</h3>
                        <p class="text-primary font-medium">Tech Solutions Inc.</p>
                        <p class="text-gray-600">Jan 2021 - Present</p>
                    </div>
                    <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 z-10"></div>
                    <div class="md:w-1/2 md:pl-12">
                        <p>Led a team of 5 developers in building enterprise-level web applications. Implemented modern development practices that improved deployment efficiency by 40%.</p>
                    </div>
                </div>

                <!-- Experience 2 -->
                <div class="mb-12 flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-2 md:order-1">
                        <p>Developed and maintained multiple client websites using React, Node.js, and MongoDB. Collaborated with designers to implement responsive UI/UX designs.</p>
                    </div>
                    <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 z-10"></div>
                    <div class="md:w-1/2 md:pl-12 order-1 md:order-2">
                        <h3 class="text-xl font-semibold">Web Developer</h3>
                        <p class="text-primary font-medium">Digital Creations Agency</p>
                        <p class="text-gray-600">Mar 2019 - Dec 2020</p>
                    </div>
                </div>

                <!-- Experience 3 -->
                <div class="mb-12 flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                        <h3 class="text-xl font-semibold">Junior Developer</h3>
                        <p class="text-primary font-medium">StartUp Innovations</p>
                        <p class="text-gray-600">Jun 2017 - Feb 2019</p>
                    </div>
                    <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 z-10"></div>
                    <div class="md:w-1/2 md:pl-12">
                        <p>Assisted in the development of web applications and maintained existing codebases. Gained experience in full-stack development and agile methodologies.</p>
                    </div>
                </div>

                <!-- Experience 2 -->
                <div class="mb-12 flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-2 md:order-1">
                        <p>Developed and maintained multiple client websites using React, Node.js, and MongoDB. Collaborated with designers to implement responsive UI/UX designs.</p>
                    </div>
                    <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 z-10"></div>
                    <div class="md:w-1/2 md:pl-12 order-1 md:order-2">
                        <h3 class="text-xl font-semibold">Web Developer</h3>
                        <p class="text-primary font-medium">Digital Creations Agency</p>
                        <p class="text-gray-600">Mar 2019 - Dec 2020</p>
                    </div>
                </div>
                <!-- End Experience 4-->
            </div>
        </div>
    </section>
    <!-- End Work Experience Section -->

    <div class="container mx-auto px-4 py-8">

          <!-- Process Overview -->
          <section class="mb-16">
              <h2 class="text-3xl font-bold text-center text-gray-800 mb-2">{{ $t("project_lifecycle") }}</h2>
              <p class="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Our streamlined process ensures projects are delivered on time and exceed expectations</p>

              <div class="bg-white rounded-2xl shadow-lg p-6 card-hover">
                  <!-- Process Steps -->
                  <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
                      <!-- Step 1 -->
                      <div class="process-step flex flex-col items-center text-center p-4 rounded-xl bg-purple-50 border border-purple-100">
                          <div class="step-icon w-16 h-16 rounded-full bg-planning flex items-center justify-center text-white mb-4 shadow-lg">
                              <i class="fas fa-lightbulb text-xl"></i>
                          </div>
                          <h3 class="font-bold text-gray-800 mb-2">Planning</h3>
                          <p class="text-gray-600 text-sm">Define project scope, goals, and requirements</p>
                          <div class="mt-3 text-xs text-planning font-medium">
                              <i class="fas fa-clock mr-1"></i> 2-4 weeks
                          </div>
                      </div>

                      <!-- Step 2 -->
                      <div class="process-step flex flex-col items-center text-center p-4 rounded-xl bg-cyan-50 border border-cyan-100">
                          <div class="step-icon w-16 h-16 rounded-full bg-design flex items-center justify-center text-white mb-4 shadow-lg">
                              <i class="fas fa-palette text-xl"></i>
                          </div>
                          <h3 class="font-bold text-gray-800 mb-2">Design</h3>
                          <p class="text-gray-600 text-sm">Create wireframes, mockups, and prototypes</p>
                          <div class="mt-3 text-xs text-design font-medium">
                              <i class="fas fa-clock mr-1"></i> 3-5 weeks
                          </div>
                      </div>

                      <!-- Step 3 -->
                      <div class="process-step flex flex-col items-center text-center p-4 rounded-xl bg-green-50 border border-green-100">
                          <div class="step-icon w-16 h-16 rounded-full bg-development flex items-center justify-center text-white mb-4 shadow-lg">
                              <i class="fas fa-code text-xl"></i>
                          </div>
                          <h3 class="font-bold text-gray-800 mb-2">Development</h3>
                          <p class="text-gray-600 text-sm">Build the product with agile methodology</p>
                          <div class="mt-3 text-xs text-development font-medium">
                              <i class="fas fa-clock mr-1"></i> 6-12 weeks
                          </div>
                      </div>

                      <!-- Step 4 -->
                      <div class="process-step flex flex-col items-center text-center p-4 rounded-xl bg-yellow-50 border border-yellow-100">
                          <div class="step-icon w-16 h-16 rounded-full bg-testing flex items-center justify-center text-white mb-4 shadow-lg">
                              <i class="fas fa-vial text-xl"></i>
                          </div>
                          <h3 class="font-bold text-gray-800 mb-2">Testing</h3>
                          <p class="text-gray-600 text-sm">Quality assurance and user acceptance testing</p>
                          <div class="mt-3 text-xs text-testing font-medium">
                              <i class="fas fa-clock mr-1"></i> 2-3 weeks
                          </div>
                      </div>

                      <!-- Step 5 -->
                      <div class="process-step flex flex-col items-center text-center p-4 rounded-xl bg-red-50 border border-red-100">
                          <div class="step-icon w-16 h-16 rounded-full bg-deployment flex items-center justify-center text-white mb-4 shadow-lg">
                              <i class="fas fa-rocket text-xl"></i>
                          </div>
                          <h3 class="font-bold text-gray-800 mb-2">Deployment</h3>
                          <p class="text-gray-600 text-sm">Launch product and monitor performance</p>
                          <div class="mt-3 text-xs text-deployment font-medium">
                              <i class="fas fa-clock mr-1"></i> 1-2 weeks
                          </div>
                      </div>

                      <!-- Step 6 -->
                      <div class="process-step flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                          <div class="step-icon w-16 h-16 rounded-full bg-maintenance flex items-center justify-center text-white mb-4 shadow-lg">
                              <i class="fas fa-cogs text-xl"></i>
                          </div>
                          <h3 class="font-bold text-gray-800 mb-2">Maintenance</h3>
                          <p class="text-gray-600 text-sm">Ongoing support and iterative improvements</p>
                          <div class="mt-3 text-xs text-maintenance font-medium">
                              <i class="fas fa-clock mr-1"></i> Ongoing
                          </div>
                      </div>
                  </div>

                  <!-- Process Flow Arrows -->
                  <div class="hidden md:flex justify-between items-center px-4 mt-2">
                      <div class="w-16 h-1 bg-purple-200 rounded"></div>
                      <i class="fas fa-chevron-right text-purple-400"></i>
                      <div class="w-16 h-1 bg-cyan-200 rounded"></div>
                      <i class="fas fa-chevron-right text-cyan-400"></i>
                      <div class="w-16 h-1 bg-green-200 rounded"></div>
                      <i class="fas fa-chevron-right text-green-400"></i>
                      <div class="w-16 h-1 bg-yellow-200 rounded"></div>
                      <i class="fas fa-chevron-right text-yellow-400"></i>
                      <div class="w-16 h-1 bg-red-200 rounded"></div>
                      <i class="fas fa-chevron-right text-red-400"></i>
                      <div class="w-16 h-1 bg-gray-200 rounded"></div>
                  </div>
              </div>
          </section>
          <!-- End Process Overview -->

          <!-- Current Projects -->
          <section class="mb-16">
              <div class="flex justify-between items-center mb-8">
                  <h2 class="text-3xl font-bold text-gray-800">Active Projects</h2>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <!-- Project 1 -->
                  <div class="project-card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 card-hover">
                      <div class="h-2 bg-planning"></div>
                      <div class="p-5">
                          <div class="flex justify-between items-start mb-4">
                              <h3 class="font-bold text-gray-800 text-lg">E-commerce Platform</h3>
                              <span class="bg-planning text-white text-xs px-2 py-1 rounded-full">Planning</span>
                          </div>
                          <p class="text-gray-600 mb-4 text-sm">New online store with inventory management and payment integration</p>

                          <div class="flex items-center justify-between mb-4">
                              <div class="flex -space-x-2">
                                  <img class="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Team member">
                                  <img class="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Team member">
                                  <div class="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-600 text-xs">+2</div>
                              </div>
                              <div class="text-xs text-gray-500">Due: Oct 15, 2023</div>
                          </div>

                          <div class="w-full bg-gray-200 rounded-full h-2 mb-1">
                              <div class="bg-planning h-2 rounded-full" style="width: 30%"></div>
                          </div>
                          <div class="flex justify-between text-xs text-gray-500">
                              <span>30% complete</span>
                              <span>12/40 tasks</span>
                          </div>
                      </div>
                  </div>

                  <!-- Project 2 -->
                  <div class="project-card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 card-hover">
                      <div class="h-2 bg-development"></div>
                      <div class="p-5">
                          <div class="flex justify-between items-start mb-4">
                              <h3 class="font-bold text-gray-800 text-lg">Mobile Banking App</h3>
                              <span class="bg-development text-white text-xs px-2 py-1 rounded-full">Development</span>
                          </div>
                          <p class="text-gray-600 mb-4 text-sm">Secure financial application with biometric authentication</p>

                          <div class="flex items-center justify-between mb-4">
                              <div class="flex -space-x-2">
                                  <img class="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Team member">
                                  <img class="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Team member">
                                  <img class="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Team member">
                                  <div class="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-600 text-xs">+3</div>
                              </div>
                              <div class="text-xs text-gray-500">Due: Nov 30, 2023</div>
                          </div>

                          <div class="w-full bg-gray-200 rounded-full h-2 mb-1">
                              <div class="bg-development h-2 rounded-full" style="width: 65%"></div>
                          </div>
                          <div class="flex justify-between text-xs text-gray-500">
                              <span>65% complete</span>
                              <span>26/40 tasks</span>
                          </div>
                      </div>
                  </div>

                  <!-- Project 3 -->
                  <div class="project-card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 card-hover">
                      <div class="h-2 bg-testing"></div>
                      <div class="p-5">
                          <div class="flex justify-between items-start mb-4">
                              <h3 class="font-bold text-gray-800 text-lg">CRM System Update</h3>
                              <span class="bg-testing text-white text-xs px-2 py-1 rounded-full">Testing</span>
                          </div>
                          <p class="text-gray-600 mb-4 text-sm">Enhanced customer relationship management with AI features</p>

                          <div class="flex items-center justify-between mb-4">
                              <div class="flex -space-x-2">
                                  <img class="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Team member">
                                  <img class="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Team member">
                                  <div class="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-600 text-xs">+1</div>
                              </div>
                              <div class="text-xs text-gray-500">Due: Oct 5, 2023</div>
                          </div>

                          <div class="w-full bg-gray-200 rounded-full h-2 mb-1">
                              <div class="bg-testing h-2 rounded-full" style="width: 85%"></div>
                          </div>
                          <div class="flex justify-between text-xs text-gray-500">
                              <span>85% complete</span>
                              <span>34/40 tasks</span>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <!-- End Current Projects -->

        </div>


    <!-- Skills & Technologies Section -->
    <section id="skills" class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-4">{{ $t("skills_technologies") }}</h2>
            <div class="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Technical Skills -->
                <div class="bg-gray-50 p-6 rounded-xl shadow-md card-hover">
                    <h3 class="text-xl font-bold mb-6 flex items-center">
                        <i class="fas fa-laptop-code text-primary-500 mr-3"></i>
                        {{ $t("technical_skill") }}
                    </h3>
                    <div class="space-y-5">
                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="font-medium">JavaScript/TypeScript</span>
                                <span class="text-primary-500 font-semibold">95%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 95%"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="font-medium">Angular & Vue.js</span>
                                <span class="text-primary-500 font-semibold">92%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 92%"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="font-medium">Node.js & Express</span>
                                <span class="text-primary-500 font-semibold">88%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 88%"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="font-medium">SQL & No SQL Databases</span>
                                <span class="text-primary-500 font-semibold">85%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 85%"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="font-medium">Java(Spring Boot)</span>
                                <span class="text-primary-500 font-semibold">75%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 75%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tools & Technologies -->
                <div class="bg-gray-50 p-6 rounded-xl shadow-md card-hover">
                    <h3 class="text-xl font-bold mb-6 flex items-center">
                        <i class="fas fa-tools text-primary-500 mr-3"></i>
                        {{ $t("tools_technologies") }}
                    </h3>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex items-center p-3 bg-white rounded-lg">
                            <i class="fab fa-git-alt text-primary-500 text-xl mr-3"></i>
                            <span>Git & GitHub</span>
                        </div>
                        <div class="flex items-center p-3 bg-white rounded-lg">
                            <i class="fab fa-docker text-primary-500 text-xl mr-3"></i>
                            <span>Docker</span>
                        </div>
                        <div class="flex items-center p-3 bg-white rounded-lg">
                            <i class="fab fa-aws text-primary-500 text-xl mr-3"></i>
                            <span>AWS</span>
                        </div>
                        <div class="flex items-center p-3 bg-white rounded-lg">
                            <i class="fab fa-linux text-primary-500 text-xl mr-3"></i>
                            <span>linux</span>
                        </div>
                        <div class="flex items-center p-3 bg-white rounded-lg">
                            <i class="fas fa-database text-primary-500 text-xl mr-3"></i>
                            <span>SQL</span>
                        </div>
                        <div class="flex items-center p-3 bg-white rounded-lg">
                            <i class="fas fa-database text-primary-500 text-xl mr-3"></i>
                            <span>MongoDB</span>
                        </div>
                        <div class="flex items-center p-3 bg-white rounded-lg">
                            <i class="fab fa-figma text-primary-500 text-xl mr-3"></i>
                            <span>Figma</span>
                        </div>
                        <div class="flex items-center p-3 bg-white rounded-lg">
                            <i class="fas fa-terminal text-primary-500 text-xl mr-3"></i>
                            <span>VS Code</span>
                        </div>

                    </div>

                    <h4 class="text-lg font-bold mt-6 mb-4">Research Methods</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Experimental Design</span>
                        <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Statistical Analysis</span>
                        <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Data Visualization</span>
                        <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                        <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Qualitative Research</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Skills Section -->

</template>
