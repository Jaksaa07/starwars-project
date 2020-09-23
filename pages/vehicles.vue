<template>
  <div class="flex flex-col w-3/5 mx-auto">
    <VehiclesCard
      v-for="vehicle in vehicles"
      :key="vehicle.name"
      :name="vehicle.name"
      :cost="vehicle.cost_in_credits"
      :model="vehicle.model"
      :crew="vehicle.crew"
      :passengers="vehicle.passengers"
    />
  </div>
</template>

<script>
export default {
  computed: {
    vehicles() {
      return this.$store.state.vehicles;
    },
  },
  mounted() {
    this.$store.dispatch("getVehicles");
  },
};
</script>