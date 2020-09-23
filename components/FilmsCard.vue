<template>
  <div class="border-2 border-transparent rounded-lg shadow-lg w-full text-center my-4">
    <h3 class="font-semibold">{{ title }}</h3>
    <p>Director: {{ director }}</p>
    <p>Producer: {{ producer }}</p>
    <p>Release date: {{ releaseDate }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "director", "producer", "releaseDate"],
};
</script>