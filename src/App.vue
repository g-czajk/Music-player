<template>
  <div class="app">
    <transition name="route" mode="out-in">
      <router-view :songsData="songsData" />
    </transition>
  </div>
</template>

<script>
import { songsData } from "./data/songsData";

export default {
  data() {
    return {
      songsData,
    };
  },
};
</script>

<style lang="scss">
.app {
  min-width: 360px;
  height: 480px;
  border-radius: 30px;
  box-shadow: 0px 40px 50px -20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

//route animations

.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: 0.1s linear;
}

.route-leave-active {
  transition: 0.1s linear;
}
</style>
