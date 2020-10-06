<template>
  <div class="mt-3">
    <h3>Upcoming Events</h3>

    <b-container class="mt-3">
      <b-calendar v-model="value" value-as-date locale="en">
        <div class="d-flex" dir="ltr">
          <b-button
            size="sm"
            variant="outline-danger"
            v-if="value"
            @click="clearDate"
          >
            Clear date
          </b-button>
          <b-button
            size="sm"
            variant="outline-primary"
            class="ml-auto"
            @click="setToday"
          >
            Set Today
          </b-button>
        </div>
      </b-calendar>
    </b-container>

    <b-card-group deck class="mt-3">
      <b-card
        header="August 4"
        :img-src="image"
        img-alt="Card image"
        img-top
        align="center"
        border-variant="dark"
        header-border-variant="secondary"
      >
        <b-card-text> NYSL Fundraiser </b-card-text>
      </b-card>

      <b-card
        header="August 16"
        :img-src="image2"
        img-alt="Card image"
        img-bottom
        align="center"
        border-variant="dark"
        header-border-variant="secondary"
      >
        <b-card-text> Season Kick-off: Meet the Teams </b-card-text>
      </b-card>
    </b-card-group>
  </div>

  <!-- <div>
    <div class="mt-3">
      <b-card-group deck>
        <b-card bg-variant="success" header="Light" class="text-center">
          <b-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</b-card-text
          >
        </b-card>

        <b-card
          bg-variant="dark"
          header="Dark"
          text-variant="white"
          class="text-center"
        >
          <b-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</b-card-text
          >
        </b-card>

        <b-card header="Default" class="text-center">
          <b-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</b-card-text
          >
        </b-card>
      </b-card-group>

      <b-calendar block locale="en-US"></b-calendar>
    </div>
  </div> -->
</template>

<script>
import image from "../imagen/design1.jpg";
import image2 from "../imagen/design2.jpg";
import image3 from "../imagen/desing3.jpg";

export default {
  data: function () {
    return {
      image: image,
      image2: image2,
      image3: image3,
    };
  },
};
</script>
<!-- <script>
//@ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";

export default {
  name: "Home",
  components: {
    HomeComponent,
  },
};
</script>
-->



