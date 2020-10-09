<template>
  <b-card class="mt-3">
    <h3>NEXT MATCHES</h3>
    <b-card-group deck class="mt-3">
      <b-card
        bg-variant="Default"
        header="August 4"
        class="text-center"
        border-variant="dark"
      >
        <b-card-text>NYSL Fundraiser.</b-card-text>
      </b-card>

      <b-card
        bg-variant="Default"
        header="August 12"
        class="text-center"
        border-variant="dark"
      >
        <b-card-text>Season Kick-off: Meet the Teams.</b-card-text>
      </b-card>

      <b-card header="August 24" class="text-center" border-variant="dark">
        <b-card-text
          >First Game of the Season (Check Game Schdele for
          details).</b-card-text
        >
      </b-card>
    </b-card-group>
    <b-container class="mt-5">
      <b-calendar block locale="en-US"></b-calendar>
    </b-container>
  </b-card>
</template>
