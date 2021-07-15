<template>
  <div class="home">
    <SongDetails :currentSong="currentSong" />
    <VolumeBar />
    <Player
      :isPlaying="isPlaying"
      @updateIsPlaying="updateIsPlaying"
      @skipSong="skipSong"
    />
  </div>
</template>

<script>
import SongDetails from "../components/SongDetails.vue";
import VolumeBar from "../components/VolumeBar.vue";
import Player from "../components/Player.vue";

export default {
  name: "Home",
  components: { SongDetails, VolumeBar, Player },
  props: ["songsData"],
  data() {
    return {
      currentSongIndex: 0,
      isPlaying: true,
    };
  },
  computed: {
    currentSong() {
      return this.songsData[this.currentSongIndex];
    },
  },
  methods: {
    updateIsPlaying() {
      this.isPlaying = !this.isPlaying;
    },
    skipSong(value) {
      if (this.currentSongIndex === this.songsData.length - 1 && value === 1) {
        this.currentSongIndex = 0;
        return;
      }
      if (this.currentSongIndex === 0 && value === -1) {
        this.currentSongIndex = this.songsData.length - 1;
        return;
      }
      this.currentSongIndex = this.currentSongIndex + value;
    },
    pickSong(songId) {
      this.currentSongIndex = songId - 1;
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.pickSong(this.$route.params.id);
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  background-color: map-get($colors, homeScreenBackground);
}
</style>
