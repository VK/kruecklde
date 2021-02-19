<template>
  <v-navigation-drawer v-model="visible" app :clipped="$vuetify.breakpoint.lgAndUp">
    <v-list dense>
      <v-list-item to="/">
        <v-list-item-action>
          <v-icon>mdi-bookmark</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/about">
        <v-list-item-action>
          <v-icon>mdi-bookmark</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/test">
        <v-list-item-action>
          <v-icon>mdi-bookmark</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Test</v-list-item-title>
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
  public toggle(): void {
    this.visible = !this.visible;
  }
  public close(): void {
    this.visible = false;
  }
}
</script>