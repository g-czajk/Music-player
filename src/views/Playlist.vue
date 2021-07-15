<template>
  <div class="playlist">
    <div class="header">
      <router-link to="/">
        <div class="btn"><font-awesome-icon icon="reply" /></div>
      </router-link>
      <h3>Playlist</h3>
    </div>
    <SongsList :songsData="songsData" />
  </div>
</template>

<script>
import SongsList from "../components/SongsList.vue";

export default {
  name: "Playlist",
  components: { SongsList },
  props: ["songsData"],
};
</script>

<style lang="scss" scoped>
.playlist {
  height: 100%;
  background-color: map-get($colors, playlistScreenBackground);

  .header {
    position: relative;
    margin-bottom: 20px;
    padding-top: 20px;

    .btn {
      @include center;
      position: relative;
      width: 37px;
      height: 37px;
      margin-left: 20px;
      border-radius: 50%;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
      background-color: map-get($colors, white);
      transition: 0.2s;
      cursor: pointer;
      z-index: 3;
      svg {
        color: map-get($colors, mediumViolet);
      }
      &:hover {
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
      }
    }

    h3 {
      position: absolute;
      top: 50%;
      width: 100%;
      font-size: 18px;
      color: map-get($colors, mediumViolet);
      text-align: center;
    }
  }
}
</style>
