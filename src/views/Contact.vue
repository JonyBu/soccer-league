<template>
<!-- <div>

    <b-container class="mt-3"> 
      <h3>Contact</h3>
    </b-container> -->

  <div class="text-center mt-3">
    <b-card no-body class="overflow-hidden" >
      <b-row no-gutters>
        <b-col md="6" align-self="center">
          <b-card-img
            :src="image"
            alt="Image contact"
            class="rounded-0"
            ></b-card-img>
        </b-col>
        <b-col md="6" align-self="center">
          <b-card-body title="Contact us">
            <b-card-text>
              Please email us at
              <a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a>
              <p>We will reply to your email as soon as we can.</p>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>

<!-- </div> -->

</template>

<script>
import image from "../imagen/contact1.jpg";

export default {
  data: function () {
    return {
      image: image,
    };
  },
};
</script>
