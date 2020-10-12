<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HomeComponent',
  props: {
    msg: String
  }
}
</script>
