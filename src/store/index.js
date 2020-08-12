import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sequence: [],
    copy: [],
    round: 0,
    active: true,
    mode: "normal",
    tile: 0,
  },
  getters: {
    sequence: (state) => {
      return state.sequence;
    },
    tile: (state) => {
      return state.tile;
    },
  },
  mutations: {
    startRound(state) {
      state.sequence = [];
      state.copy = [];
      state.round = 0;
    },
    newRound(state) {
      ++state.round;
      state.sequence.push(Math.floor(Math.random() * 4 + 1));
      state.copy = state.sequence.slice(0);
    },
    animate(state) {
      let i = 0;
      let interval = setInterval(function() {
        i++;
        if (i >= state.sequence.length) {
          clearInterval(interval);
        }

        state.tile = state.sequence[i - 1];
        setTimeout(() => {
          state.tile = 0;
        }, 250);

        console.log("test", state.sequence[i - 1], state.tile);
      }, 600);
    },
  },
  actions: {
    test({ commit }) {
      commit("test");
    },
  },
});
