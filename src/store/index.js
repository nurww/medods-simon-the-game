import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sequence: [],
    copy: [],
    round: 0,
    active: false,
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
    active: (state) => {
      return state.active;
    },
    copy: (state) => {
      return state.copy;
    },
    round: (state) => {
      return state.round;
    },
  },
  mutations: {
    startRound(state) {
      state.sequence = [];
      state.copy = [];
      state.round = 0;
      state.active = true;
    },
    newRound(state) {
      ++state.round;
      state.sequence.push(Math.floor(Math.random() * 4 + 1));
      state.copy = state.sequence.slice(0);
      console.log("test", state.sequence);
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
      }, 600);
    },
    activateSimonBoard(state) {
      state.active = true;
    },
    registerClick(state, test) {
      let desiredResponse = state.copy.shift();
      let actualResponse = parseInt(test);
      state.active = desiredResponse === actualResponse;
    },
  },
  actions: {
    newRound({ commit }) {
      commit("newRound");
      commit("animate");
    },
  },
});
