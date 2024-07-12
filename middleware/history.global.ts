export default defineNuxtRouteMiddleware((to: any, from: any) => {
  const navigationHistory = useLocalStorage('history', []);
  navigationHistory.value.push(to.path);
  // console.log('Navigation History ', navigationHistory.value.join(' -> '));
})