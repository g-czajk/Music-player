<template>
  <div class="volume-bar">
    <div class="background"></div>
    <div class="progress"></div>
    <div class="thumb">
      <font-awesome-icon icon="volume-up" />
    </div>
  </div>
</template>

<script>
export default {
  name: "VolumeBar",
};
</script>

<style lang="scss" scoped>
.volume-bar {
  position: relative;
  width: 100%;
  height: 8px;
  z-index: 3;

  .background {
    width: 100%;
    height: 100%;
    background-color: map-get($colors, pink);
  }

  .progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 70%;
    height: 100%;
    background-color: map-get($colors, white);
  }

  .thumb {
    @include center;
    width: 23px;
    height: 23px;
    position: absolute;
    top: calc(-50% - 8px / 2);
    left: calc(70% - 23px / 2);
    border-radius: 50%;
    background-color: map-get($colors, white);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    svg {
      font-size: 11px;
      color: map-get($colors, lightViolet);
    }
  }
}
</style>
