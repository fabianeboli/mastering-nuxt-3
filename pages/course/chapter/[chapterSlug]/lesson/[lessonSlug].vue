<script setup lang='ts'>

const course = useCourse();
const route = useRoute();



definePageMeta({
  middleware: [{
    function({ params }: any, from: any) {
      const course = useCourse();

      const chapter = course.chapters.find(chapter => chapter.slug === params.chapterSlug);

      if (!chapter) return abortNavigation(createError({ statusCode: 404, message: 'Chapter not found' }));

      const lesson = chapter.lessons.find(lesson => lesson.slug === params.lessonSlug);

      if (!lesson) return abortNavigation(createError({ statusCode: 404, message: 'Lesson not found' }));
    }
  }, 'auth',]});

const chapter = computed(() => {
  return course.chapters.find(chapter => chapter.slug === route.params.chapterSlug)
});

const lesson = computed(() => {
  return chapter.value.lessons.find(lesson => lesson.slug === route.params.lessonSlug)
});

useHead({ title: `Mastering Vue ${chapter}/${lesson}` })

const progress: any[] = useLocalStorage('progress', () => {
  return [];
});

const isLessonComplete = computed(() => {
  if (!progress.value[chapter.value.number - 1]) return false;

  if (!progress.value[chapter.value.number - 1][lesson.value.number - 1])
    return false;

  return progress.value[chapter.value.number - 1][lesson.value.number - 1]
})

const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1])
    progress.value[chapter.value.number - 1] = [];

  progress.value[chapter.value.number - 1][lesson.value.number - 1] = !isLessonComplete.value;
}
</script>

<template>
  <div>
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      Lesson {{ chapter.number }} - {{ lesson.number }}
    </p>
    <h2 class="my-0">{{ lesson.title }}</h2>
    <div class="flex space-x-4 mt-2 mb-8">
      <NextLink v-if="lesson.sourceUrl" class="font-normal text-md text-gray-500" :to="lesson.sourceUrl">Download Source
        Code</NextLink>
    </div>
    <NextLink v-if="lesson.downloadUrl" class="font-normal text-md text-gray-500" :to="lesson.downloadUrl">
      Download Video
    </NextLink>
    <div>
      <VideoPlayer v-if="lesson?.videoId" :video-id="lesson.videoId" />
    </div>
    <p>{{ lesson.text }}</p>
    <LessonCompleteButton :model-value="isLessonComplete"
      @update:model-value="throw createError('Could not update');" />

  </div>
</template>

<style></style>