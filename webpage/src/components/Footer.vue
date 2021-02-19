<template>
  <v-footer app color="primary" dark>
    <v-spacer></v-spacer>
    <span>&copy; {{ new Date().getFullYear() }} VK</span>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Footer extends Vue {}
</script>