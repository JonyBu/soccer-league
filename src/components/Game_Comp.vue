<template>
  <b-card class="mt-3">
    <b-container>
      <h3>GAME INFORMATION</h3>
      <hr />
      Choose the address in the table to show the location on the map
    </b-container>
    <b-container class="mt-3">
      <div>
        <b-table small striped hover :fields="fields" :items="games">
          <template v-slot:cell(Location)="dato">
            <a
              class="maplink"
              :href="dato.item.LocationGoogle"
              target="iframe_a"
              >{{ dato.item.Location }}</a
            >
          </template>
        </b-table>
      </div>

      <section class="map">
        <iframe
          height="400px"
          width="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.656836443422!2d-87.6312603845582!3d41.90023667922044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+Estats+Units+d'Am%C3%A8rica!5e0!3m2!1sca!2ses!4v1516266506557"
          name="iframe_a"
        ></iframe>
      </section>
    </b-container>
  </b-card>
</template>

<script>
import data from "../components/games.json";
export default {
  name: "GameComp",
  props: {},
  data() {
    return {
      fields: ["Date", "Teams", "Location", "Times"],
      games: data.games,
    };
  },
};
</script>