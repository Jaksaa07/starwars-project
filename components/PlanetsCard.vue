<template>
  <div class="border-2 border-transparent rounded-lg shadow-lg w-full text-center my-4">
    <h3 class="font-semibold">{{ name }}</h3>
    <p>Climate: {{ climate }}</p>
    <p>Terrain: {{ terrain }}</p>
    <p>Population: {{ population }}</p>
    <p>Orbital period: {{ orbitalPeriod }}</p>
  </div>
</template>

<script>
export default {
  props: ["name", "climate", "terrain", "population", "orbitalPeriod"],
};
</script>