<template>
  <v-app id="app">
    <LoadingOverlay></LoadingOverlay>
    <NavDrawer ref="navDrawer"></NavDrawer>
    <NavBar @toggle-drawer="$refs.navDrawer.toggle()"></NavBar>

    <v-main style="position: relative">
      <animated-background />

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
import AnimatedBackground from "./components/AnimatedBackground.vue";
@Component({
  name: "App",
  components: {
    LoadingOverlay,
    NavDrawer,
    NavBar,
    AnimatedBackground,
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
.v-card {
  background-color: var(--v-cardbackground-base) !important;
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
  