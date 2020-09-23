<template>
  <div class="border-2 border-transparent rounded-lg shadow-lg w-full text-center my-4">
    <h3 class="font-semibold">{{ name }}</h3>
    <p>Classification: {{ classification }}</p>
    <p>Average height: {{ averageHeight }}</p>
    <p>Average lifespan: {{ averageLifespan }}</p>
    <p>Language: {{ language }}</p>
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "averageHeight",
    "averageLifespan",
    "classification",
    "language",
  ],
};
</script>