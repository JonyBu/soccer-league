<template>
  <b-card class="mt-3">
    <b-container class="mb-3">
      <h3>ABOUT NYSL</h3>
      <hr>
      <b-card-text>
        We are a professional soccer and sports coaching organisation
      </b-card-text>
    
    <b-card-group deck >
      <b-card title="Mission" :img-src="image1" img-alt="Image" img-top >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>

      <b-card title="Vision" :img-src="image2" img-alt="Image" img-top>
        <b-card-text>
          This card has supporting text below as a natural lead-in to additional
          content.
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>

      <b-card
        title="General Information"
        :img-src="image3"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>
    </b-card-group>
    <b-card class="mt-4">
      <b-card-text>
        There are several soccer fields on campus, including a soccer specific,
        match-only pitch in the middle of campus that was remodeled for the 2013
        season, making for ideal match conditions. The school’s facilities are
        comparable to collegiate facilities and afford our student-athletes the
        ability to train at a maximum level. Two turf fields were constructed in
        2013 – while we primarily compete on natural grass, the option of
        utilizing turf is an ideal situation and places The Hill’s soccer
        facilities amongst the area’s best.
      </b-card-text>
    </b-card>
    </b-container >
  </b-card>
</template>

<script>
import image1 from "../imagen/design1.jpg";
import image2 from "../imagen/design2.jpg";
import image3 from "../imagen/design3.jpg";

export default {
  data: function () {
    return {
      image1: image1,
      image2: image2,
      image3: image3,
    };
  },
};
</script>