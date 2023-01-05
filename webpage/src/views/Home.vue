<template>
  <div class="home">

    <v-card>
      <h2 class="pt-2">{{ $t("rollos") }}</h2>

      <v-container>
        <v-row>
          <v-col v-for="(value, key) in $store.state.rollos" v-bind:key="key">
            <v-label>{{ key }}</v-label>
            <v-slider
              v-model="value.value"
              thumb-label="always"
              vertical
              @change="setrollo(key, value.value)"
            ></v-slider>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="$store.commit('setrollos', 'up')" color="primary"> Up </v-btn>
          </v-col>
          <v-col>
            <v-btn @click="$store.commit('setrollos', 'down')" color="primary"> Down </v-btn>
          </v-col>
          <v-col>
            <v-btn @click="$store.commit('setrollos', 'cat')" color="primary"> Cat </v-btn>
          </v-col>          
        </v-row>
      </v-container>
    </v-card>

    <v-card class="mt-2">
      <h2 class="pt-2">{{ $t("lichter") }}</h2>

      <div v-for="(value, key) in $store.state.lichter" v-bind:key="key">
        <v-switch
          v-model="value.value"
          :loading="value.updating"
          :label="key"
          class="mt-0 ml-8"
          @change="setlight(key, value.value)"
        ></v-switch>
      </div>
    </v-card>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Home extends Vue {
  setlight(key: string, value: boolean) {
    this.$store.commit("setlight", { key: key, value: value });
  }

  setrollo(key: string, value: boolean) {
    this.$store.commit("setrollo", { key: key, value: value });
  }

  mounted() {
    if (this.$store.state.mqtt.state === "?" && this.$store.state.athome ) {
      this.$store.commit('connectMQTT');
    }
  }
}
</script>