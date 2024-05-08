<script setup lang='ts'>
const { chapters } = useCourse();
</script>

<template>
	<div class="flex flex-col items-center w-full h-full min-h-screen p-12 bg-blue-500">
		<div class="mb-12 prose">
			<h1>
				<span class="font-medium">
					Course:
					<span class="font-bold">Mastering Nuxt 3</span>
				</span>
			</h1>
		</div>

		<div class="flex flex-row justify-center flex-grow">
			<div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col">
				<h3 class="font-bold my-5 text-slate-500 text-xl">Chapters</h3>
				<div class="space-y-1 mb-4 flex flex-col" v-for="chapter in chapters" :key="chapter.slug">
					<h4 class="font-semibold my-3 text-slate-400">{{ chapter.title }}</h4>
					<NuxtLink v-for="(lesson, index) in chapter.lessons" :key="index" :to="lesson.path" :class="{
						'text-blue-500': lesson.path === $route.path,
						'text-gray-600': lesson.path !== $route.path,
					}">
						<span class="text-gray-500">{{ index + 1 }}. </span>
						<span>{{ lesson.title }}</span>
					</NuxtLink>
				</div>
			</div>

			<div class="prose p-12 bg-white rounded-md w-[65ch] ">
				This is a lesson
				<NuxtPage />
			</div>
		</div>
	</div>
</template>

<style scoped>
/* .router-link-active {
	@apply text-blue-500;
} */

</style>