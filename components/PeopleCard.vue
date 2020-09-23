<template>
  <div class="border-2 border-transparent rounded-lg shadow-lg w-full text-center my-4">
    <h3 class="font-semibold">{{ name }}</h3>
    <p>Birth year: {{ birthYear }}</p>
    <p>Gender: {{ gender }}</p>
    <p>Height: {{ height }}</p>
    <p>Eye color: {{ eyeColor }}</p>
  </div>
</template>

<script>
export default {
  props: ["name", "birthYear", "gender", "height", "eyeColor"],
};
</script>