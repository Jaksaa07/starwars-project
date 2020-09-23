<template>
  <div class="flex flex-col w-3/5 mx-auto">
    <PeopleCard
      v-for="person in people"
      :key="person.name"
      :name="person.name"
      :gender="person.gender"
      :height="person.height"
      :eye-color="person.eye_color"
      :birth-year="person.birth_year"
    />
  </div>
</template>

<script>
export default {
  computed: {
    people() {
      return this.$store.state.people;
    },
  },
  mounted() {
    this.$store.dispatch("getPeople");
  },
};
</script>