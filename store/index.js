export const state = () => ({
  menu: false,
  people: [],
  films: [],
  planets: [],
  species: [],
  starships: [],
  vehicles: []
});

export const mutations = {
  toggleMenu(state) {
    state.menu = !state.menu;
  },
  getPeople(state, people) {
    state.people = people;
  },
  getFilms(state, films) {
    state.films = films;
  },
  getPlanets(state, planets) {
    state.planets = planets;
  },
  getSpecies(state, species) {
    state.species = species;
  },
  getStarships(state, starships) {
    state.starships = starships;
  },
  getVehicles(state, vehicles) {
    state.vehicles = vehicles;
  }
};

export const actions = {
  toggleMenu({ commit }) {
    commit("toggleMenu");
  },
  async getPeople({ commit }) {
    const response = await this.$axios.get("https://swapi.dev/api/people/");
    commit("getPeople", response.data.results);
  },
  async getFilms({ commit }) {
    const response = await this.$axios.get("https://swapi.dev/api/films/");
    commit("getFilms", response.data.results);
  },
  async getPlanets({ commit }) {
    const response = await this.$axios.get("https://swapi.dev/api/planets/");
    commit("getPlanets", response.data.results);
  },
  async getSpecies({ commit }) {
    const response = await this.$axios.get("https://swapi.dev/api/species/");
    commit("getSpecies", response.data.results);
  },
  async getStarships({ commit }) {
    const response = await this.$axios.get("https://swapi.dev/api/starships/");
    commit("getStarships", response.data.results);
  },
  async getVehicles({ commit }) {
    const response = await this.$axios.get("https://swapi.dev/api/vehicles/");
    commit("getVehicles", response.data.results);
  }
};
