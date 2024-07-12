<script setup lang='ts'>
const error = useError();
const handleError = () => {
  clearError({ 
    redirect: '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3' }) 
}
</script>

<template>
<NuxtLayout>
  <div class="prose">
    <h1>ERRRRRRR</h1>
    <p>error</p>
  </div>
  <p class="font-bold">{{ error.message }}</p>
  <p>
    <a class="hover:cursor-pointer" @click="handleError()">Go to first lesson
    </a>
  </p>
</NuxtLayout>
</template>

<style>

</style>