<template>
  <v-app-bar
    app
    clipped-right
    color="primary"
    dark
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    id="menubar"
  >
    <v-app-bar-nav-icon
      @click.stop="$emit('toggle-drawer')"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Toolbar</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-menu
      offset-y
      transition="slide-y-transition"
      bottom
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn fab small color="primary lighten-1" v-bind="attrs" v-on="on">
          <v-icon>mdi-screwdriver</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-switch
                v-model="$vuetify.theme.dark"
                color="secondary"
              ></v-switch>
            </v-list-item-action>
            <v-list-item-title
              @click="$vuetify.theme.dark = !$vuetify.theme.dark"
              >{{ $t("darktheme") }}</v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-select
              :items="
                Object.keys($i18n.messages).map((l) => ({
                  value: l,
                  text: $i18n.messages[l].lang,
                }))
              "
              v-model="$i18n.locale"
              :label="$t('language')"
            ></v-select>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class NavBar extends Vue {
  public lang = "de";
}
</script>

<style>
#menubar.div {
  z-index: 100;
}
</style>