<template>
  <div class="simon">
    <ul @click="registerClick">
      <li
        v-on:mousedown="addActive"
        v-on:mouseup="removeActive"
        class="red"
        :class="tile == 1 ? 'active' : ''"
        data-tile="1"
      ></li>
      <li
        v-on:mousedown="addActive"
        v-on:mouseup="removeActive"
        class="blue"
        :class="tile == 2 ? 'active' : ''"
        data-tile="2"
      ></li>
      <li
        v-on:mousedown="addActive"
        v-on:mouseup="removeActive"
        class="yellow"
        :class="tile == 3 ? 'active' : ''"
        data-tile="3"
      ></li>
      <li
        v-on:mousedown="addActive"
        v-on:mouseup="removeActive"
        class="green"
        :class="tile == 4 ? 'active' : ''"
        data-tile="4"
      ></li>
    </ul>
  </div>
</template>

<script>
import store from "../store/index";

export default {
  methods: {
    registerClick: function (e) {
      this.active ? store.commit("registerClick", e.target.dataset.tile) : null;

      console.log(store.getters.active, store.getters.copy.length === 0);
      if (store.getters.active && store.getters.copy.length === 0) {
        store.dispatch("newRound");
      }
    },
    addActive: function (e) {
      this.active ? e.target.classList.add("active") : null;
    },
    removeActive: function (e) {
      this.active ? e.target.classList.remove("active") : null;
    },
  },
  computed: {
    tile: {
      get() {
        return store.getters.tile;
      },
    },
    active: {
      get() {
        return store.getters.active;
      },
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}

ul,
li {
  padding: 0;
  margin: 0;
}

.active {
  opacity: 1 !important;
}

.simon {
  background: #fff;
  position: relative;
  float: left;
  margin-right: 3em;
  width: 302px;
  height: 295px;
  -webkit-border-radius: 150px 150px 150px 150px;
  border-radius: 150px 150px 150px 150px;
  -moz-box-shadow: 2px 1px 12px #aaa;
  -webkit-box-shadow: 2px 1px 12px #aaa;
  -o-box-shadow: 2px 1px 12px #aaa;
  box-shadow: 2px 1px 12px #aaa;
}

.red,
.blue,
.yellow,
.green {
  opacity: 0.6;
  height: 290px;
  -webkit-border-radius: 150px 150px 150px 150px;
  border-radius: 150px 150px 150px 150px;
  position: absolute;
  text-indent: 10000px;
}

.red:hover,
.blue:hover,
.yellow:hover,
.green:hover {
  border: 2px solid black;
}

.red {
  background: #ff5643;
  clip: rect(0px, 300px, 150px, 150px);
  width: 296px;
}

.blue {
  background: dodgerblue;
  clip: rect(0px, 150px, 150px, 0px);
  width: 300px;
}

.yellow {
  background: #feef33;
  clip: rect(150px, 150px, 300px, 0px);
  width: 300px;
}

.green {
  background: #bede15;
  clip: rect(150px, 300px, 300px, 150px);
  width: 296px;
}
</style>
