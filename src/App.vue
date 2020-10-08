<template>
  <div id="app">
    <div>
      <b-img :src="image" fluid />
    </div>

    <b-navbar type="dark" variant="dark">
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
        <b-nav-item :to="{ name: 'About' }">About NYSL</b-nav-item>
        <b-nav-item :to="{ name: 'Game' }">Game Information</b-nav-item>
        <b-nav-item :to="{ name: 'Rules' }">Rules of play</b-nav-item>
        <b-nav-item :to="{ name: 'Registration' }">Registration Form</b-nav-item>
        <b-nav-item :to="{ name: 'Contact' }">Contact</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <b-container>
      <router-view />
    </b-container>

    <footer class="bg-dark text-white-50 mt-3">
        <div class="container text-center">
            <small>© 2016 TGIF | All Rights Reserved</small>
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