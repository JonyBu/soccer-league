<template>
  <b-card no-body class="overflow-hidden text-center mt-3">
    <b-row no-gutters>
      <b-col md="6" align-self="center">
        <b-card-img
          :src="image"
          alt="Image contact"
          class="rounded-0"
        ></b-card-img>
      </b-col>
      <b-col md="6" align-self="center">
        <b-card-body title="CONTACT US">
          <b-card-text>
            Please email us at
            <a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a>
            <p>We will reply to your email as soon as we can.</p>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import image from "../imagen/contact1.jpg";

export default {
  data() {
    return {
      image: image,
    };
  },
};
</script>
