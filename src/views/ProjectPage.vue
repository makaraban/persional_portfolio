<script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'

  // Environment Variables
  const API = import.meta.env.VITE_APP_API

  // Reactive data
  const users = ref([])
  const repositories = ref([])
  const loadingRepos = ref(false)
  const errorRepos = ref(null)
  const perPage = ref(10)
  const loading = ref(false)
  const error = ref(null)
  const username = ref('makaraban')

  // Methods get formatted date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  // Lifecycle
  onMounted(async () => {
    await getUserProfile()
  })

  // View user profile
  const getUserProfile = async () => {

    loading.value = true
    error.value = null

    try {
      const response = await axios.get(`${API}/users/${username.value}`)
      users.value = response.data
    } catch (err) {
      error.value = err.message
      console.error('Error fetching user profile:', err)
    } finally {
      loading.value = false
    }

    // Fetch user repositories
    loadingRepos.value = true
    try {
      const response = await axios.get(`${API}/users/${username.value}/repos?sort=updated&per_page=${perPage.value}`)
      repositories.value = response.data
    } catch (err) {
      errorRepos.value = err.message
      console.error('Error fetching repositories:', err)
    } finally {
      loadingRepos.value = false
    }
  }


</script>

<template>
  <!-- Work Experience Section -->
  <section id="experience" class="py-16 md:py-24">
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold text-center mb-4">{{ $t("portfolio") }}</h2>
            <div class="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
      <!-- end Loading State -->

      <!-- Error State -->
      <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>{{ error }}</p>
      </div>
      <!-- end Error State -->

      <div class="flex flex-col lg:flex-row gap-6">
          <!-- Left Sidebar - Profile Info -->
          <div class="lg:w-1/4">
              <div class="github-card p-4 mb-4">
                  <div class="flex flex-col items-center">
                      <div class="w-48 h-48 rounded-full overflow-hidden border border-github-border mb-4">
                          <img :src="users.avatar_url" :alt="users.login" class="w-full h-full object-cover">
                      </div>
                      <h1 class="text-xl font-bold text-gray-900">{{ users.name }}</h1>
                      <p class="text-github-text mb-2">{{ users.login }}</p>
                      <p class="text-center mb-4">{{ users.bio }}</p>
                      <button class="w-full bg-gray-900 text-white rounded-md py-2 text-sm mb-4 hover:bg-gray-800 transition-colors">
                          Follow
                      </button>
                      <button class="w-full border border-github-border rounded-md py-2 text-sm mb-4 hover:bg-gray-50 transition-colors">
                          <i class="far fa-envelope mr-1"></i> Send message
                      </button>
                  </div>

                  <div class="border-t border-github-border pt-4">
                      <div class="flex items-center mb-2">
                          <i class="fas fa-users mr-2 text-blue-500"></i>
                          <span class="font-medium mr-1 text-gray-900">{{ users.followers }}</span>
                          <span class="text-github-text">followers</span>
                          <i class="fas fa-users mr-2 text-green-500"></i>
                          <span class="font-medium mr-1 text-gray-900">{{ users.following }}</span>
                          <span class="text-github-text">following</span>
                      </div>
                      <div class="flex items-center mb-2">
                          <i class="fas fa-code-branch mr-2 text-purple-500"></i>
                          <span class="text-gray-900">{{ users.public_repos }} Repositories</span>
                      </div>
                      <div class="flex items-center mb-2">
                          <i class="fas fa-map-marker-alt mr-2 text-red-500"></i>
                          <span class="text-gray-900">{{ users.location }}</span>
                      </div>
                      <div class="flex items-center mb-2">
                          <i class="fas fa-building mr-2 text-github-text"></i>
                          <span class="text-gray-900">{{ users.company }}</span>
                      </div>
                      <div class="flex items-center">
                          <i class="fas fa-globe mr-2 text-github-text"></i>
                          <a href="#" class="text-github-blue hover:underline">{{ users.blog }}</a>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Main Content -->
          <div class="lg:w-3/4">
              <!-- Navigation Tabs -->
              <div class="border-b border-github-border mb-6">
                  <div class="flex space-x-8 overflow-x-auto">
                      <a href="#" class="pb-3 border-b-2 border-orange-500 text-gray-900 font-medium whitespace-nowrap">
                          <i class="fas fa-book-open mr-1"></i> Overview
                      </a>
                      <a href="#" class="pb-3 text-github-text hover:text-gray-900 whitespace-nowrap">
                          <i class="far fa-dot-circle mr-1"></i> Repositories
                          <span class="bg-gray-200 text-github-text text-xs rounded-full px-2 py-0.5 ml-1">28</span>
                      </a>
                      <a href="#" class="pb-3 text-github-text hover:text-gray-900 whitespace-nowrap">
                          <i class="fas fa-project-diagram mr-1"></i> Projects
                      </a>
                      <a href="#" class="pb-3 text-github-text hover:text-gray-900 whitespace-nowrap">
                          <i class="fas fa-cube mr-1"></i> Packages
                      </a>
                      <a href="#" class="pb-3 text-github-text hover:text-gray-900 whitespace-nowrap">
                          <i class="fas fa-star mr-1"></i> Stars
                          <span class="bg-gray-200 text-github-text text-xs rounded-full px-2 py-0.5 ml-1">124</span>
                      </a>
                  </div>
              </div>

              <!-- Loading Repositories -->
              <div v-if="loadingRepos" class="flex justify-center py-8">
                  <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              </div>

              <!-- Pinned Repositories -->
              <div class="mb-8">
                  <div class="flex justify-between items-center mb-8">
                      <h2 class="text-lg font-semibold text-gray-900">Repositories</h2>
                      <!-- <a href="#" class="text-sm text-blue-600 hover:underline">Customize your pins</a> -->
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <!-- Repo 1 -->
                      <div v-for="repo in repositories" :key="repo.id"  class="github-card card-hover p-4 hover:border-github-blue transition-colors">

                        <div class="flex justify-between items-start mb-2">
                              <div class="flex items-center">
                                  <i class="fas fa-globe text-blue-500 mr-2"></i>
                                  <h4 class="text-lg font-medium text-blue-600 hover:cursor-pointer hover:underline">
                                      <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
                                  </h4>
                              </div>
                              <button class="border border-github-border rounded-md px-2 py-1 text-xs flex items-center hover:bg-gray-50">
                                  <i class="fas fa-star text-yellow-500 mr-1"></i> Star
                              </button>
                          </div>
                          <p v-if="repo.description" class="text-sm text-github-text mb-4">{{ repo.description }}</p>
                          <div class="flex flex-wrap gap-3 text-sm text-gray-600">
                              <span v-if="repo.language" class="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                  <span class="repo-language-color python mr-1"></span>{{ repo.language }}
                              </span>
                              <span v-if="repo.license" class="bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                  {{ repo.license.name }}
                              </span>
                              <span class="bg-green-100 text-green-800 px-2 py-1 rounded">
                                  Updated: {{ formatDate(repo.updated_at) }}
                              </span>
                          </div>
                      </div>
                      <!-- end Repo 1 -->
                  </div>
              </div>

              <!-- No Repositories -->
              <div v-if="!loadingRepos && repositories.length === 0" class="p-8 text-center text-gray-500">
                  <i class="fas fa-inbox text-4xl mb-3"></i>
                  <p>No repositories found</p>
              </div>


          </div>

      </div>

    </div>
  </section>
  <!-- End Skills Section -->

</template>

<style>
  .github-card {
      background-color: white;
      border: 1px solid #d0d7de;
      border-radius: 6px;
  }
  .language-color {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-right: 5px;
  }
  .javascript { background-color: #f1e05a; }
  .python { background-color: #3572A5; }
  .html { background-color: #e34c26; }
  .css { background-color: #563d7c; }
  .typescript { background-color: #2b7489; }
  .java { background-color: #b07219; }
  .repo-language-color {
      position: relative;
      top: 1px;
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
  }
  .contribution-cell {
      width: 14px;
      height: 14px;
      border-radius: 2px;
      margin: 1px;
  }
  .contribution-0 { background-color: #ebedf0; }
  .contribution-1 { background-color: #9be9a8; }
  .contribution-2 { background-color: #40c463; }
  .contribution-3 { background-color: #30a14e; }
  .contribution-4 { background-color: #216e39; }
</style>
