<template>
  <v-navigation-drawer v-model="visible" app :clipped="$vuetify.breakpoint.lgAndUp">
    <v-list dense>
      <v-list-item to="/" :color="itemcolor()">
        <v-list-item-action>
          <v-icon color="secondary">mdi-bookmark</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title varian>Index</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/home" :color="itemcolor()" v-if="$store.state.athome">
        <v-list-item-action>
          <v-icon  color="secondary">mdi-bookmark</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>


      <v-list-item to="/impressum" :color="itemcolor()">
        <v-list-item-action>
          <v-icon  color="secondary">mdi-bookmark</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Impressum</v-list-item-title>
        </v-list-item-content>
      </v-list-item>


    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class NavDrawer extends Vue {
  public visible = false;

  public itemcolor(): string {
    return (this.$vuetify.theme.dark) ? "secondary accent-4": "secondary darken-4";
  }

  public toggle(): void {
    this.visible = !this.visible;
  }
  public close(): void {
    this.visible = false;
  }
}
</script>