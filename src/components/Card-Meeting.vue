<template>
  <b-card
    v-on:click="changeValue(DateMeeting)"
    :header="Header"
    class="text-center btn btn-outline-dark"
    border-variant="dark"
    bg-variant="Default"
  >
    <b-card-text>{{ Title }}</b-card-text>
  </b-card>
</template>

<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";

export default {
  name: "CardMeeting",
  props: {
    DateMeeting: "",
    Header: "",
    Title: "",
  },
  computed: {
    ...mapState(["value"]),
  },
  methods: {
    ...mapMutations(["changeValue"]),
  },
};
</script>