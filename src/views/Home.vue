<template>
  <div class="home">
    <h3 data-test-song-title>{{ currentSong }}</h3>
    <h3 data-test-artist>Guns & Roses</h3>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["currentSong", "currentArtist"]),
  },
};
</script>
