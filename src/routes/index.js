import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomePage.vue'
import About from '@/views/AboutPage.vue'
import Academic from '@/views/AcademicPage.vue'
import Education from '@/views/EducationPage.vue'
import Skill from '@/views/SkillPage.vue'
import Experience from '@/views/Experience.vue'
import Projects from '@/views/ProjectPage.vue'
import CurrentJob from '@/views/CurrentJobPage.vue'
import Contact from '@/views/ContactPage.vue'
import NotFound from '@/components/NotFoundPage.vue'

const routes = [
    {
        path: '/',name: 'Home',component: Home
    },
    {
        path: '/about',name: 'About',component: About
    },
    {
        path: '/academic',name: 'Academic',component: Academic
    },
    {
        path: '/education',name: 'Education',component: Education
    },
    {
        path: '/skills',name: 'Skill',component: Skill
    },
    {
        path: '/experience',name: 'Experience',component: Experience
    },
    {
        path: '/projects',name: 'Projects',component: Projects
    },
    {
        path: '/current-job',name: 'CurrentJob',component: CurrentJob
    },
    {
        path: '/contact',name: 'Contact',component: Contact
    },
    {
        path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
