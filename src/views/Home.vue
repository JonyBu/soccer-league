<template>
  <b-card class="mt-3">
    <b-container>
      <h3>NEXT MEETING</h3>
      <hr />
      <p>Select the meeting to view it on the calendar</p>
      <b-card-group deck class="mt-3">
        <CardMeeting
          DateMeeting="2020-08-04"
          Header="August 4"
          Title="NYSL Fundraiser."
        />
        <CardMeeting
          DateMeeting="2020-08-12"
          Header="August 12"
          Title="Season Kick-off: Meet the Teams."
        />
        <CardMeeting
          DateMeeting="2020-08-24"
          Header="August 24"
          Title="First Game of the Season (Check Game Schdele for details)."
        />
      </b-card-group>
    </b-container>

    <b-container class="mt-5">
      <b-calendar block locale="en-US" v-model="value"></b-calendar>
    </b-container>
  </b-card>
</template>

<script>
import CardMeeting from "@/components/Card-Meeting.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "home",
  components: {
    CardMeeting,
  },
  computed: {
    // ...mapState(["value"]),
    ...mapGetters({
      valueFromStore : "getValue"
    }),
    value: {
      get(){
        return this.valueFromStore
      },
      set(newValue){
        return newValue
      }
    },

  },
  
};
</script>