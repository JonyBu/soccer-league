<template>
  <div id="app" class="bgi">
    <div>
      <b-img :src="image" fluid />
    </div>

    <div>
      <b-navbar toggleable="sm" type="dark" variant="dark">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-navbar-brand></b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item :to="{ name: 'Home' }">
              <b-button
                class="text-uppercase btn-sm"
                variant="outline-success"
                block
                >Home</b-button
              >
            </b-nav-item>
            <b-nav-item :to="{ name: 'About' }">
              <b-button
                class="text-uppercase btn-sm"
                variant="outline-success"
                block
                >About NYSL</b-button
              >
            </b-nav-item>
            <b-nav-item :to="{ name: 'Game' }">
              <b-button
                class="text-uppercase btn-sm"
                variant="outline-success"
                block
                >Game information</b-button
              >
            </b-nav-item>
            <b-nav-item :to="{ name: 'Rules' }">
              <b-button
                class="text-uppercase btn-sm"
                variant="outline-success"
                block
                >Rules of play</b-button
              >
            </b-nav-item>
            <b-nav-item :to="{ name: 'Registration' }">
              <b-button
                class="text-uppercase btn-sm"
                variant="outline-success"
                block
                >Registration form</b-button
              >
            </b-nav-item>
            <b-nav-item :to="{ name: 'Contact' }">
              <b-button
                class="text-uppercase btn-sm"
                variant="outline-success"
                block
                >Contact</b-button
              >
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <b-container>
      <router-view />
    </b-container>

    <footer class="bg-dark text-white-50 mt-3">
      <div class="container text-center">
        <small>© 2020 Copyright | All Rights Reserved</small>
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