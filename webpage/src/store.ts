import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { State, state } from './state'

import { Client } from "paho-mqtt";

Vue.use(Vuex);

let store = new Vuex.Store<State>({
  state: state,


  mutations: {
    connectMQTT(): void {

      state.mqtt.client = new Client(state.mqtt.host, state.mqtt.port, state.mqtt.clientID);
      state.mqtt.state = "connecting";

      state.mqtt.client.onMessageArrived = (message: any) => {
        store.commit("onMQTTmessage", message);
      };

      var options: any = {
        useSSL: true,
        userName: state.mqtt.user,
        password: state.mqtt.password,
        onSuccess: () => {
          state.mqtt.client.subscribe("#");
          state.mqtt.state = "connected";
        },
        onFailure: (error: any) => {
          state.mqtt.state = "error";
        }
      }
      state.mqtt.client.connect(options);

    },

    onMQTTmessage(state: any, message: any): void {

      let topic = message.topic.substr(6);
      let name = topic.substr(topic.indexOf("-") + 1);
      let group = topic.substr(0, topic.indexOf("-"));
      let value = message.payloadString;
      let parsed = parseInt(value) as any;
      if (value === "on") {
        parsed = true;
      }
      if (value === "off") {
        parsed = false;
      }

      if (topic && !isNaN(parsed)) {
        if (group === "rollo") {
          Vue.set(
            state.rollos,
            name,
            { value: parsed, updating: false }
          )
        }
        if (group === "licht") {
          Vue.set(
            state.lichter,
            name,
            { value: parsed, updating: false }
          )

        }
      }

    },

    setlight(oldstate: any, message: any) {
      const name = message.key;
      Vue.set(
        state.lichter,
        name,
        { value: oldstate.lichter[name].value, updating: true }
      );
      state.mqtt.client.publish(
        "command/licht-" + name, (message.value) ? "on": "off", 
      )
    },


    setrollo(oldstate: any, message: any) {
      const key = message.key;
      const payload = message.value.toString();

      state.mqtt.client.publish(
        "command/rollo-"+key, payload
      )
    },

    setrollos(oldstate: any, message: any) {
      state.mqtt.client.publish(
        "command/rollos", message
      )
    }


  },

});

export default store;