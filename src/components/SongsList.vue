<template>
  <div class="songs-list-wrapper">
    <ul class="songs-list">
      <SingleSong
        v-for="(song, index) in songsData"
        :key="song.id"
        :data="songsData[index]"
      />
    </ul>
  </div>
</template>

<script>
import SingleSong from "./SingleSong.vue";

export default {
  name: "SongsList",
  components: { SingleSong },
  props: ["songsData"],
};
</script>

<style lang="scss" scoped>
.songs-list-wrapper {
  position: relative;

  .songs-list {
    height: 350px;
    margin-right: 22px;
    padding: 0 22px 0 27px;
    list-style: none;
    overflow-y: auto;

    // scrollbar: Firefox only
    scrollbar-color: map-get($colors, lightGrey) transparent;
    scrollbar-width: thin;

    // scrollbar: Chrome only
    &::-webkit-scrollbar-track {
      border-radius: 3px;
    }
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: map-get($colors, lightGrey);
      &:hover {
        background-color: map-get($colors, darkGrey);
      }
    }
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 90%;
    height: 30px;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      map-get($colors, playlistScreenBackground) 90%
    );
    z-index: 4;
  }
}
</style>
