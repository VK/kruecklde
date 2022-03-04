<template>
  <div id="animation" ref="animation"></div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";


@Component
export default class ExternalBackground extends Vue {
  
}
</script>


<style>
#animation {
  width: 100%;
  height: 100%;
}
</style>
