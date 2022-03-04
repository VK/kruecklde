<template>
  <v-app id="app">
    <LoadingOverlay></LoadingOverlay>
    <NavDrawer ref="navDrawer"></NavDrawer>
    <NavBar @toggle-drawer="$refs.navDrawer.toggle()"></NavBar>

    <v-main style="position: relative">
      <external-background />

      <div style="overflow-y: auto; position: absolute; top: 0 !important; width: 100%; height:100%">
        <v-container fluid id="main-container">
          <v-row justify="center">
            <v-col
              align="center"
              :style="{ 'max-width': $vuetify.breakpoint.thresholds.md + 'px' }"
            >
              <router-view />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-main>

  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoadingOverlay from "./components/LoadingOverlay.vue";
import NavDrawer from "./components/NavDrawer.vue";
import NavBar from "./components/NavBar.vue";
import ExternalBackground from "./components/ExternalBackground.vue";
@Component({
  name: "App",
  components: {
    LoadingOverlay,
    NavDrawer,
    NavBar,
    ExternalBackground,
  },
})
export default class App extends Vue {}
</script>

<style>
.v-application {
  background-color: var(--v-background-base) !important;
}
.v-navigation-drawer {
  background-color: var(--v-drawerbackground-base) !important;
}
.theme--dark.v-card  {
  background-color: #1c1f1fbb !important;
}
.theme--light.v-card {

  background-color: #ffffffdd !important;

}

.theme--dark.v-card.elevation-5 {
    box-shadow: 0px 3px 5px -1px rgb(255 255 255 / 20%),
     0px 5px 8px 0px rgb(255 255 255 / 14%),
      0px 1px 14px 0px rgb(255 255 255 / 12%) !important;
}

html {
  overflow: hidden;
  height: 100%;
}

body {
  height: 100%;
  position: relative;
  touch-action: none;
  transform: translate3d(0px, 0px, 0px);
  transition: all 1000ms ease 0s;
}


</style>
  