<template>
  <div class="player">
    <div class="buttons-wrapper">
      <div class="btn small white share">
        <font-awesome-icon icon="share-alt" />
      </div>
      <div class="btn small violet prev" @click="$emit('skipSong', -1)">
        <font-awesome-icon icon="step-backward" />
      </div>
      <div class="play-btn-wrapper">
        <SvgCircle class="progress" />
        <div
          class="btn big violet play-pause"
          @click="$emit('updateIsPlaying')"
        >
          <transition name="play-pause" mode="out-in">
            <font-awesome-icon v-if="!isPlaying" :key="isPlaying" icon="play" />
            <font-awesome-icon v-else :key="isPlaying" icon="pause" />
          </transition>
        </div>
      </div>
      <div class="btn small violet next" @click="$emit('skipSong', 1)">
        <font-awesome-icon icon="step-forward" />
      </div>
      <div class="btn small white fav">
        <font-awesome-icon icon="heart" />
      </div>
    </div>
  </div>
</template>

<script>
import SvgCircle from "./SvgCircle.vue";

export default {
  name: "Player",
  components: { SvgCircle },
  props: ["isPlaying"],
};
</script>

<style lang="scss" scoped>
.player {
  @include center;
  height: 132px;
  z-index: 1;

  .buttons-wrapper {
    @include center;
    width: 100%;
    padding: 0 20px;

    .btn {
      @include center;
      border-radius: 50%;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
      transition: 0.2s;
      cursor: pointer;
      z-index: 3;

      &:hover {
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
      }
      &.small {
        width: 37px;
        height: 37px;
        font-size: 13px;
      }
      &.big {
        width: 52px;
        height: 52px;
        margin: 0 18px;
        font-size: 17px;
      }
      &.white {
        background-color: map-get($colors, white);
        svg {
          color: map-get($colors, mediumViolet);
        }
        &.share {
          margin-right: auto;
        }
        &.fav {
          margin-left: auto;
          svg {
            color: map-get($colors, pink);
          }
        }
      }
      &.violet {
        background-color: map-get($colors, mediumViolet);
        svg {
          color: map-get($colors, white);
        }
      }
    }

    .play-btn-wrapper {
      @include center;
      position: relative;
      .progress {
        position: absolute;
      }
    }
  }
}

// play/pause button animations

.play-pause-enter-from,
.play-pause-leave-to {
  opacity: 0;
}

.play-pause-enter-active {
  transition: 0.1s linear;
}

.play-pause-leave-active {
  transition: 0.1s linear;
}
</style>
