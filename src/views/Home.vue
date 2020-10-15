<template>
  <b-card class="mt-3">
    <b-container>
      <h3>NEXT MEETING</h3>
      <hr />
      <b-car-text>Select the meeting to view it on the calendar </b-car-text>
      <b-card-group deck class="mt-3">
        <b-card
          v-on:click="value = '2020-08-04'"
          bg-variant="Default"
          header="August 4"
          class="text-center btn btn-outline-dark"
          border-variant="dark"
        >
          <b-card-text>NYSL Fundraiser.</b-card-text>
        </b-card>

        <b-card
          v-on:click="value = '2020-08-12'"
          bg-variant="Default"
          header="August 12"
          class="text-center btn btn-outline-dark"
          border-variant="dark"
        >
          <b-card-text>Season Kick-off: Meet the Teams.</b-card-text>
        </b-card>

        <b-card
          v-on:click="value = '2020-08-24'"
          header="August 24"
          class="text-center btn btn-outline-dark"
          border-variant="dark"
        >
          <b-card-text>
            First Game of the Season (Check Game Schdele for details).
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-container>

    <b-container class="mt-5">
      <b-calendar block locale="en-US" v-model="value"></b-calendar>
    </b-container>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>