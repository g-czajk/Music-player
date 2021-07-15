<template>
  <div class="song-details">
    <div class="opacity-mask"></div>
    <OpacityBar class="opacity-bar-top">
      <font-awesome-icon icon="retweet" />
      <font-awesome-icon icon="random" />
      <font-awesome-icon icon="redo-alt" />
      <router-link to="Playlist">
        <font-awesome-icon icon="bars" />
      </router-link>
    </OpacityBar>
    <OpacityBar class="opacity-bar-bottom">
      <transition name="skip" mode="out-in">
        <div class="song-data" :key="currentSong.id">
          <div class="song-artist">
            {{ currentSong.artist }}
          </div>
          <div class="song-title">
            {{ currentSong.title }}
          </div>
        </div>
      </transition>
    </OpacityBar>
  </div>
</template>

<script>
import OpacityBar from "./OpacityBar.vue";

export default {
  name: "SongDetails",
  components: { OpacityBar },
  props: ["currentSong"],
};
</script>

<style lang="scss" scoped>
.song-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 340px;
  background-image: url("../assets/main_screen_image.jpg");
  background-size: 112%;

  .opacity-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: map-get($colors, imageOpacityMask);
    z-index: 0;
  }

  .opacity-bar-top {
    position: relative;
    svg {
      font-size: 17px;
      transition: 0.3s ease;
      color: map-get($colors, white);
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
      &:nth-of-type(2) {
        margin: 0 21px;
      }
    }
    a {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      svg {
        opacity: 0.5;
      }
      &:hover {
        svg {
          opacity: 1;
        }
      }
    }
  }

  .opacity-bar-bottom {
    .song-artist {
      font-size: 18px;
      font-weight: 700;
      line-height: 100%;
      text-align: center;
    }
    .song-title {
      margin-top: 6px;
      font-size: 14px;
      line-height: 100%;
      text-align: center;
    }
  }
}

// song skip animations

.skip-enter-from,
.skip-leave-to {
  transform: translateX(-400%);
  opacity: 0;
}

.skip-enter-active {
  transition: 0.3s ease-in-out;
}

.skip-leave-active {
  transition: 0.3s ease-in-out;
}
</style>
