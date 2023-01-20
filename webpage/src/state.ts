
let mqttcfg = {
    host: "",
    port: 1234,
    clientID: "?",
    user: "",
    password: ""
}
let athome = false;

try {

    let config_json = localStorage.getItem("mqttcfg");
    if (config_json !== null) {
        mqttcfg = JSON.parse(config_json as string);
        athome = true;

        if (window.location.hash != "#/home") {
            window.location.hash = "#/home";
        }
    }

} catch { }



export const state = {
    error: false,
    loading: false,
    loadingList: [] as string[],
    errorNote: "",
    athome: athome,


    mqtt: {
        ...mqttcfg,
        client: undefined as any,
        state: "?",
    },

    rollos: {} as { [name: string]: any },
    lichter: {} as { [name: string]: any },

    humidity: [] as any,
    temp: [] as any



}

export type State = typeof state