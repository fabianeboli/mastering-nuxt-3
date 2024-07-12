export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.chapterSlug === '1-chapter-1' && to.params.lessonSlug === '1-introduction-to-typescript-with-vue-js-3') {
    return navigateTo('/login');
  }
})