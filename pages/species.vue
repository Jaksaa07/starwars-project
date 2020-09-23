<template>
  <div class="flex flex-col w-3/5 mx-auto">
    <SpeciesCard
      v-for="spec in species"
      :key="spec.name"
      :name="spec.name"
      :classification="spec.classification"
      :average-height="spec.average_height"
      :average-lifespan="spec.average_lifespan"
      :language="spec.language"
    />
  </div>
</template>

<script>
export default {
  computed: {
    species() {
      return this.$store.state.species;
    },
  },
  mounted() {
    this.$store.dispatch("getSpecies");
  },
};
</script>