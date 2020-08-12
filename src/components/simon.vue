<template>
  <div class="simon">
    <ul @click="test5">
      <li class="red" :class="tile == 1 ? 'active' : ''" data-tile="1"></li>
      <li class="blue" :class="tile == 2 ? 'active' : ''" data-tile="2"></li>
      <li class="yellow" :class="tile == 3 ? 'active' : ''" data-tile="3"></li>
      <li class="green" :class="tile == 4 ? 'active' : ''" data-tile="4"></li>
    </ul>
  </div>
</template>

<script>
import store from "../store/index";

export default {
  methods: {
    test5: function(e) {
      console.log(e.target.dataset.tile)
    }
  },
  computed: {
    tile: {
      get() {
        return store.state.tile;
      },
      set(value) {
        store.commit(value);
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
