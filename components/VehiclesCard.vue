<template>
  <div class="border-2 border-transparent rounded-lg shadow-lg w-full text-center my-4">
    <h3 class="font-semibold">{{ name }}</h3>
    <p>Model: {{ model }}</p>
    <p>Cost: {{ cost }}</p>
    <p>Crew: {{ crew }}</p>
    <p>Passengers: {{ passengers }}</p>
  </div>
</template>

<script>
export default {
  props: ["name", "model", "cost", "crew", "passengers"],
};
</script>