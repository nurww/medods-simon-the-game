<template>
  <div class="game-options">
    <h2>Game Options:</h2>
    <input id="normal" type="radio" name="mode" value="normal" checked />
    <label for="normal">Normal</label>
    <br />
    <input id="sound-only" type="radio" name="mode" value="sound-only" />
    <label for="sound-only">Sound Only</label>
    <br />
    <input id="light-only" type="radio" name="mode" value="light-only" />
    <label for="light-only">Light Only</label>
    <br />
    <input id="free-board" type="radio" name="mode" value="free-board" />
    <label for="free-board">Free board</label>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.game-options h2 {
  margin-top: 30px;
  margin-bottom: 0;
}

.game-options input[type="radio"] {
  margin-right: 10px;
}
</style>