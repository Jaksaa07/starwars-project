<template>
  <div class="flex flex-col w-3/5 mx-auto">
    <StarshipsCard
      v-for="ship in starships"
      :key="ship.name"
      :name="ship.name"
      :cost="ship.cost_in_credits"
      :the-class="ship.starship_class"
      :crew="ship.crew"
      :passengers="ship.passengers"
    />
  </div>
</template>

<script>
export default {
  computed: {
    starships() {
      return this.$store.state.starships;
    },
  },
  mounted() {
    this.$store.dispatch("getStarships");
  },
};
</script>