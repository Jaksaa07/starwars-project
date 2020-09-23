<template>
  <div>
    <div class="bg-black flex justify-between h-24">
      <div class="my-auto" @click="$store.dispatch('toggleMenu')">
        <svg
          class="w-10 h-10 fill-current text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <nuxt-link class="mr-4 h-full" to="/">
        <img class="object-cover" src="@/static/star-wars-logo.svg" alt />
      </nuxt-link>
    </div>
    <div class="bg-black">
      <ul v-if="menu" class="text-white flex flex-col justify-center items-center">
        <div @click="$store.dispatch('toggleMenu')" class="py-4 w-full text-center">
          <nuxt-link to="films">Films</nuxt-link>
        </div>
        <div @click="$store.dispatch('toggleMenu')" class="py-4 w-full text-center">
          <nuxt-link to="people">People</nuxt-link>
        </div>
        <div @click="$store.dispatch('toggleMenu')" class="py-4 w-full text-center">
          <nuxt-link to="planets">Planets</nuxt-link>
        </div>
        <div @click="$store.dispatch('toggleMenu')" class="py-4 w-full text-center">
          <nuxt-link to="species">Species</nuxt-link>
        </div>
        <div @click="$store.dispatch('toggleMenu')" class="py-4 w-full text-center">
          <nuxt-link to="starships">Starships</nuxt-link>
        </div>
        <div @click="$store.dispatch('toggleMenu')" class="py-4 w-full text-center">
          <nuxt-link to="vehicles">Vehicles</nuxt-link>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    menu() {
      return this.$store.state.menu;
    },
  },
};
</script>