import { When, Then } from "cypress-cucumber-preprocessor/steps";
const { visit, the, getStore } = cy;

When("The current song is", (table) => {
  visit("/");
  const song = table.rowsHash();
  const songTitle = song["song title"];
  const artist = song["artist"];
  getStore().setState("currentSong", songTitle);
  getStore().setState("currentArtist", artist);
});
Then("I should see the following song", (table) => {
  const song = table.rowsHash();
  const songTitle = song["song title"];
  const artist = song["artist"];
  the("song-title").contains(songTitle);
  the("artist").contains(artist);
});
