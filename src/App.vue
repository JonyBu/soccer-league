<template>
  <div id="app" class="bgi">
    <div>
      <b-img :src="image" fluid />
    </div>

    <b-navbar type="dark" variant="dark">
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{ name: 'Home' }">HOME</b-nav-item>
        <b-nav-item :to="{ name: 'About' }">ABOUT NYSL</b-nav-item>
        <b-nav-item :to="{ name: 'Game' }">GAME INFORMATION</b-nav-item>
        <b-nav-item :to="{ name: 'Rules' }">RULES OF PLAY</b-nav-item>
        <b-nav-item :to="{ name: 'Registration' }"
          >REGISTRATION FORM</b-nav-item
        >
        <b-nav-item :to="{ name: 'Contact' }">CONTACT</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <b-container>
      <router-view />
    </b-container>

    <footer class="bg-dark text-white-50 mt-3">
      <div class="container text-center">
        <small>© 2020 TGIF | All Rights Reserved</small>
      </div>
    </footer>
  </div>
</template>

<script>
import image from "./imagen/header.jpg";

export default {
  data: function () {
    return {
      image: image,
    };
  },
};
</script>


<style scoped>
.bgi {
  background-image: url("imagen/green-grass.jpg");
}
</style>