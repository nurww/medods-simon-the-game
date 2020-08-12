<template>
  <div class="game-info">
    <h2>
      Round:
      <span data-round="0">0</span>
    </h2>
    <button @click="startRoundAndNewRound" data-action="start">Start</button>
    <p data-action="lose">
      Sorry, you lost after
      <span data-round="0"></span> rounds!
    </p>
  </div>
</template>

<script>
import store from "../store/index";
export default {
  methods: {
    startRoundAndNewRound: function () {
      store.commit("startRound");
      store.commit("newRound");
      store.commit("animate");
      // store.commit("test2");
      console.log(store.getters.tile);
    },
  },
};
</script>

<style scoped>
p[data-action="lose"] {
  display: none;
}

.game-info {
  margin-top: 90px;
}

.game-info button {
  width: 5em;
  box-sizing: border-box;
  font-size: 1.4em;
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #6dabe8;
  border: none;
  padding: 0.3em 0.6em;
  outline: none;
}

.game-info button:active {
  outline: none;
}

.game-info button:hover {
  background: #78bcff;
}
</style>