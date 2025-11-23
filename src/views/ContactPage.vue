<script>

</script>
<template>
    <!-- Contact Section -->
    <section id="contact" class="py-16 md:py-24 bg-gray-50">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-4" data-en="Get In Touch" data-es="Ponte en Contacto">{{ $t("get_in_touch") }}</h2>
            <div class="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

            <div class="flex flex-col lg:flex-row gap-12">
                <div class="lg:w-2/5">
                    <h3 class="text-2xl font-bold mb-6">{{ $t("let_work_together") }}</h3>
                    <p class="text-lg mb-6">{{ $t("open_to_discussing") }}</p>

                    <div class="space-y-4 mb-8">
                        <div class="flex items-center p-4 bg-white rounded-lg shadow-sm">
                            <div class="bg-primary-100 p-3 rounded-lg mr-4">
                                <i class="fas fa-envelope text-primary-600 text-xl"></i>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">{{ $t("email") }}</p>
                                <p class="font-medium">makaraban@gmail.com</p>
                            </div>
                        </div>
                        <div class="flex items-center p-4 bg-white rounded-lg shadow-sm">
                            <div class="bg-primary-100 p-3 rounded-lg mr-4">
                                <i class="fas fa-phone text-primary-600 text-xl"></i>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">{{ $t("phone") }}</p>
                                <p class="font-medium">+855 (85) 616 109</p>
                            </div>
                        </div>
                        <div class="flex items-center p-4 bg-white rounded-lg shadow-sm">
                            <div class="bg-primary-100 p-3 rounded-lg mr-4">
                                <i class="fas fa-map-marker-alt text-primary-600 text-xl"></i>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">{{ $t("location") }}</p>
                                <p class="font-medium">{{ $t("my_location") }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex space-x-4">
                        <a href="https://www.linkedin.com/in/ban-makara-84b71938b/" target="_blank" class="bg-primary-500 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-primary-600 transition duration-300">
                            <i class="fab fa-linkedin-in text-xl"></i>
                        </a>
                        <a href="https://github.com/makaraban" target="_blank" class="bg-primary-500 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-primary-600 transition duration-300">
                            <i class="fab fa-github text-xl"></i>
                        </a>
                        <a href="https://x.com/errorlog_html?s=11" target="_blank" class="bg-primary-500 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-primary-600 transition duration-300">
                            <i class="fab fa-twitter text-xl"></i>
                        </a>
                        <a href="https://www.instagram.com/makara.ban?igsh=MWVmbm1oYTBhdzI1MQ%3D%3D&utm_source=qr" target="_blank" class="bg-primary-500 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-primary-600 transition duration-300">
                            <i class="fab fa-instagram text-xl"></i>
                        </a>
                    </div>
                </div>

                <div class="lg:w-3/5">
                    <form class="space-y-6 bg-white p-8 rounded-xl shadow-sm">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="name" class="block text-gray-700 mb-2 font-medium" data-en="Your Name" data-es="Tu Nombre">{{ $t("your_name") }}</label>
                                <input type="text" id="name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="John Smith">
                            </div>
                            <div>
                                <label for="email" class="block text-gray-700 mb-2 font-medium" data-en="Your Email" data-es="Tu Correo">{{ $t("your_email") }}</label>
                                <input type="email" id="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="john@example.com">
                            </div>
                        </div>
                        <div>
                            <label for="subject" class="block text-gray-700 mb-2 font-medium" data-en="Subject" data-es="Asunto">{{ $t("subject") }}</label>
                            <input type="text" id="subject" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Project Collaboration">
                        </div>
                        <div>
                            <label for="message" class="block text-gray-700 mb-2 font-medium" data-en="Your Message" data-es="Tu Mensaje">{{ $t("your_message") }}</label>
                            <textarea id="message" rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Hello Alex, I would like to discuss..."></textarea>
                        </div>
                        <button type="submit" class="w-full bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition duration-300 flex items-center justify-center">
                            <span data-en="Send Message" data-es="Enviar Mensaje">{{ $t("send_message") }}</span>
                            <i class="fas fa-paper-plane ml-2"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- End Contact Section -->
</template>
