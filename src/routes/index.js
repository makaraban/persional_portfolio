import { createRouter, createWebHistory } from 'vue-router'

//Lazy load components
const Home = () => import('@/views/HomePage.vue')
const About = () => import('@/views/AboutPage.vue')
const Academic = () => import('@/views/AcademicPage.vue')
const Education = () => import('@/views/EducationPage.vue')
const Skill = () => import('@/views/SkillPage.vue')
const Experience = () => import('@/views/Experience.vue')
const Projects = () => import('@/views/ProjectPage.vue')
const CurrentJob = () => import('@/views/CurrentJobPage.vue')
const Contact = () => import('@/views/ContactPage.vue')
const NotFound = () => import('@/components/NotFoundPage.vue')

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
