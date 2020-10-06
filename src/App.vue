<template>
  <div id="app">
    <div>
      <b-img :src="image" fluid />
    </div>

    <b-navbar type="dark" variant="dark" >
      <b-navbar-nav  class="ml-auto">
        <b-nav-item active :to="{ name: 'Home' }" >Home</b-nav-item>
        <b-nav-item :to="{ name: 'About' }">About NYSL</b-nav-item>
        <b-nav-item>Rules of play & policies</b-nav-item>
        <b-nav-item>Game Information</b-nav-item>
        <b-nav-item>Contact</b-nav-item>
        <b-nav-item>Registration Form</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import image from "./imagen/headerF9.jpg"

export default {
       data: function () {
           return {
               image: image
           }
       }
}
</script>