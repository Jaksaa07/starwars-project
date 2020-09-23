<template>
  <div class="flex flex-col w-3/5 mx-auto">
    <FilmsCard
      v-for="film in films"
      :key="film.title"
      :title="film.title"
      :director="film.director"
      :producer="film.producer"
      :release-date="film.release_date"
    />
  </div>
</template>

<script>
export default {
  computed: {
    films() {
      return this.$store.state.films;
    },
  },
  mounted() {
    this.$store.dispatch("getFilms");
  },
};
</script>