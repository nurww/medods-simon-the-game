<template>
  <div id="app">
    <div class="container">
      <simon />
      <gameStart />
      <gameOptions />
    </div>
  </div>
</template>

<script>
import simon from "./components/simon.vue";
import gameStart from "./components/gameStart.vue";
import gameOptions from "./components/gameOptions.vue";

export default {
  name: "App",
  components: {
    simon,
    gameStart,
    gameOptions,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  font-family: Arial, serif;
  color: #333;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  -o-user-select: none;
  user-select: none;
}

h1 {
  margin: 1em 0 2em;
  text-align: center;
}

.container {
  width: 540px;
  margin: 0 auto;
}
</style>
