<template>
  <v-app id="app">
    <LoadingOverlay></LoadingOverlay>
    <NavDrawer ref="navDrawer"></NavDrawer>
    <NavBar @toggle-drawer="$refs.navDrawer.toggle()"></NavBar>

    <v-main style="position: relative">
      <animated-background />
      <v-container fluid id="main-container" style="position: absolute; top: 0">
        <v-row justify="center">
          <v-col
            align="center"
            :style="{ 'max-width': $vuetify.breakpoint.thresholds.md + 'px' }"
          >
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoadingOverlay from "./components/LoadingOverlay.vue";
import NavDrawer from "./components/NavDrawer.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import AnimatedBackground from "./components/AnimatedBackground.vue";
@Component({
  name: "App",
  components: {
    LoadingOverlay,
    NavDrawer,
    NavBar,
    Footer,
    AnimatedBackground,
  },
})
export default class App extends Vue {
  public mounted() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }
}
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
  width: 100%;
}

body {
  height: 100%;
  position: fixed;
  overflow-y: auto;
  width: 100%;
}
</style>

