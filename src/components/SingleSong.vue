<template>
  <li class="single-song" @click="handleSongClick">
    <div class="wrapper">
      <div class="song-details">
        <div class="info-row-1">
          <span class="duration">{{ data.duration }}</span>
          <span> | </span>
          <span class="artist">{{ data.artist }}</span>
        </div>
        <div class="info-row-2">{{ data.title }}</div>
      </div>
      <div class="icons">
        <font-awesome-icon icon="share-alt" @click.stop="() => {}" />
        <font-awesome-icon icon="heart" @click.stop="() => {}" />
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "SingleSong",
  props: ["data"],
  methods: {
    handleSongClick() {
      this.$router.push({ name: "Home", params: { id: this.data.id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.single-song {
  padding-bottom: 22px;
  cursor: pointer;

  .wrapper {
    display: flex;
    justify-content: space-between;
    .song-details {
      flex-grow: 1;
      transition: 0.3s;
      .info-row-1 {
        margin-bottom: 5px;
        font-size: 12px;
        color: map-get($colors, darkGrey);
        line-height: 100%;
      }
      .info-row-2 {
        font-size: 18px;
        color: map-get($colors, darkViolet);
        line-height: 100%;
      }
    }
    .icons {
      @include center;
      position: relative;
      z-index: 3;
      svg {
        font-size: 13px;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
          opacity: 0.5;
        }
        &:nth-of-type(1) {
          margin-right: 12px;
          color: map-get($colors, mediumViolet);
        }
        &:nth-of-type(2) {
          color: map-get($colors, pink);
        }
      }
    }
  }

  &:not(:nth-of-type(1)) {
    padding-top: 22px;
  }
  &:nth-of-type(1) {
    padding-top: 8px;
  }
  &:not(:nth-last-of-type(1)) {
    border-bottom: 1px solid map-get($colors, lightGrey);
  }
  &:hover {
    .song-details {
      transform: translateX(5%);
    }
  }
}
</style>
