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
      state.mqtt.client.onConnectionLost = (responseObject: any) => {
        if (responseObject.errorCode !== 0) {
          state.mqtt.state = "?";
        }
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
          state.mqtt.state = "?";
        }
      }
      state.mqtt.client.connect(options);

    },

    onMQTTmessage(state: any, message: any): void {
      let t = message.topic.split("/");
      let type = t[0];
      let topic = t[1];
      let name = topic.substr(topic.indexOf("-") + 1);
      let group = topic.substr(0, topic.indexOf("-"));
      let value = message.payloadString;


      if (type === "value") {
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
      }

      // if (type === "temp") {
      //   let parsed = JSON.parse(value);
      //   console.log(parsed);

      // }

      if (type === "humidity" || type === "temp") {
        let parsed = JSON.parse(value);

        let dates = Object.keys(parsed).map((el: string) => {
          let d = new Date(parseInt(el));
          return ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2)
        });
        let values = Object.values(parsed);

        let new_entry = {
          x: dates,
          y: values,
          mode: "lines",
          name: topic
        };

        if (type === "humidity") {
          let pos = state.humidity.map((e: any) => e.name).indexOf(topic);
          if (pos == -1) {
            state.humidity.push(new_entry);
          } else {
            Vue.set(state.humidity, pos, new_entry);
          }
        }
        
        if (type === "temp") {
          let pos = state.temp.map((e: any) => e.name).indexOf(topic);
          if (pos == -1) {
            state.temp.push(new_entry);
          } else {
            Vue.set(state.temp, pos, new_entry);
          }
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
        "command/licht-" + name, (message.value) ? "on" : "off",
      )
    },


    setrollo(oldstate: any, message: any) {
      const key = message.key;
      const payload = message.value.toString();

      state.mqtt.client.publish(
        "command/rollo-" + key, payload
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