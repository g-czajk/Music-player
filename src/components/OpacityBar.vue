<template>
  <div class="opacity-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "OpacityBar",
};
</script>

<style lang="scss" scoped>
.opacity-bar {
  @include center;
  height: 66px;
  background-color: map-get($colors, opacityBarBackground);
  color: map-get($colors, white);
  z-index: 1;
}
</style>
