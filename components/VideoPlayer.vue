<script setup lang='ts'>
const props = defineProps({
  videoId: {
    type: Number,
    required: true,
  },
});

</script>

<template>
<iframe
  width="520"
  height="315" 
  :src="`https://player.vimeo.com/video/${props.videoId.toString()}`" 
  title="Video Player" 
  frameborder="0" 
  allow="clipboard-write;accelerometer;encrypted-media" allowfullscreen>

</iframe>aa
</template>

<style>

</style>