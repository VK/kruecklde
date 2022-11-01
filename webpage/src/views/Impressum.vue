<template>
  <div class="pa-2">
    <v-card max-width="500" class="mx-auto pa-5 text-justify" elevation="5">
      <h1>Impressum</h1>
      <br />
      <h3>Verantwortlicher gemäß § 55 Abs. 2 RStV</h3>
      <br />
      <div
        ref="abox"
        style="position: relative; width: 260px; height: 200px"
      ></div>
    </v-card>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { drawAnschrift } from "./../impressum";
@Component
export default class About extends Vue {
  mounted() {
    drawAnschrift(this.$refs.abox);
  }
}
</script>