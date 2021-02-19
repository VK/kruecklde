  
<template>
  <div>
    <v-overlay :value="$store.state.loading" :z-index="1000">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <v-overlay :value="$store.state.error" :z-index="1001">
      <v-alert prominent type="error" class="bo" elevation="3">
        <v-row align="center">
          <v-col class="grow font-weight-medium">{{$store.state.errorNote}}</v-col>
          <v-col class="shrink">
            <v-btn @click="restartApp" color="error lighten-1" elevation="5">Restart App</v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-overlay>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class LoadingOverlay extends Vue {
  private restartApp(): void {
    const url = new URL(window.location.href);
    url.hash = "";
    url.pathname = "";
    window.location.href = url.href;
  }
}
</script>