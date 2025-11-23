<script>

</script>
<template>
    <!-- Featured Projects Section -->
    <section id="projects" class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-4">{{ $t("current_job") }}</h2>
            <div class="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project 1 -->
                <div class="bg-gray-50 rounded-xl overflow-hidden shadow-md card-hover">
                    <div class="h-48 bg-gradient-to-r from-primary-500 to-accent-500 overflow-hidden relative">
                        <img src="/images/user_support.jpg" alt="{{ $t('system_support') }}" class="w-full h-full object-cover">
                        <div class="absolute top-4 right-4 bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                            {{ $t("system_support") }}
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">{{ $t("system_support_oddid") }}</h3>
                        <p class="text-gray-600 mb-4">{{ $t("system_support_oddid_des") }}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">{{ $t("od") }}</span>
                            <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">{{ $t("rh") }}</span>
                            <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">{{ $t("hc") }}</span>
                        </div>
                        <!-- <div class="flex space-x-4">
                            <a href="#" class="text-primary-600 font-semibold hover:text-primary-800 transition duration-300 flex items-center">
                                <i class="fas fa-external-link-alt mr-2"></i>
                                Details
                            </a>
                            <a href="#" class="text-primary-600 font-semibold hover:text-primary-800 transition duration-300 flex items-center">
                                <i class="fas fa-file-pdf mr-2"></i>
                                Paper
                            </a>
                        </div> -->
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="bg-gray-50 rounded-xl overflow-hidden shadow-md card-hover">
                    <div class="h-48 bg-gradient-to-r from-primary-500 to-accent-500 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Privacy-Preserving AI" class="w-full h-full object-cover">
                        <div class="absolute top-4 right-4 bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                            {{ $t("monitoring") }}
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">{{ $t("drug_management_monitoring") }}</h3>
                        <p class="text-gray-600 mb-4">{{ $t("drug_management_morinitoring_des") }}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">{{ $t("od") }}</span>
                            <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">{{ $t("rh") }}</span>
                            <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">{{ $t("hc") }}</span>
                        </div>
                        <!-- <div class="flex space-x-4">
                            <a href="#" class="text-primary-600 font-semibold hover:text-primary-800 transition duration-300 flex items-center">
                                <i class="fas fa-external-link-alt mr-2"></i>
                                Details
                            </a>
                            <a href="#" class="text-primary-600 font-semibold hover:text-primary-800 transition duration-300 flex items-center">
                                <i class="fas fa-file-pdf mr-2"></i>
                                Paper
                            </a>
                        </div> -->
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="bg-gray-50 rounded-xl overflow-hidden shadow-md card-hover">
                    <div class="h-48 bg-gradient-to-r from-primary-500 to-accent-500 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Data Visualization Tool" class="w-full h-full object-cover">
                        <div class="absolute top-4 right-4 bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                            {{ $t("training" )}}
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">{{ $t("oddid_trainig") }}</h3>
                        <p class="text-gray-600 mb-4">{{ $t("oddid_training_des") }}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">{{ $t("od") }}</span>
                            <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">{{ $t("rh") }}</span>
                            <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">{{ $t("hc") }}</span>
                        </div>
                        <!-- <div class="flex space-x-4">
                            <a href="#" class="text-primary-600 font-semibold hover:text-primary-800 transition duration-300 flex items-center">
                                <i class="fas fa-external-link-alt mr-2"></i>
                                Demo
                            </a>
                            <a href="#" class="text-primary-600 font-semibold hover:text-primary-800 transition duration-300 flex items-center">
                                <i class="fab fa-github mr-2"></i>
                                Code
                            </a>
                        </div> -->
                    </div>
                </div>
            </div>

            <div class="text-center mt-12">
                <a href="#" class="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition duration-300">
                    {{ $t("view_all_projects") }}
                    <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>

    </section>
    <!-- End Featured Projects Section -->

</template>
