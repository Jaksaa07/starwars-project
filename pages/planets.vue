<template>
  <div class="flex flex-col w-3/5 mx-auto">
    <PlanetsCard
      v-for="planet in planets"
      :key="planet.name"
      :name="planet.name"
      :climate="planet.climate"
      :terrain="planet.terrain"
      :population="planet.population"
      :orbital-period="planet.orbital_period"
    />
  </div>
</template>

<script>
export default {
  computed: {
    planets() {
      return this.$store.state.planets;
    },
  },
  mounted() {
    this.$store.dispatch("getPlanets");
  },
};
</script>