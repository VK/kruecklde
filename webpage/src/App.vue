<template>
  <v-app id="app">
    <LoadingOverlay></LoadingOverlay>
    <NavDrawer ref="navDrawer"></NavDrawer>
    <NavBar @toggle-drawer="$refs.navDrawer.toggle()"></NavBar>

    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col align="center" :style="{'max-width': $vuetify.breakpoint.thresholds.md + 'px'}">
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
@Component({
  name: "App",
  components: {
    LoadingOverlay,
    NavDrawer,
    NavBar,
    Footer
  },
})
export default class App extends Vue {}
</script>

