import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
import colors from 'vuetify/lib/util/colors'


export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: "#4CAF50",
                secondary: "#00b006",
                accent: colors.shades.black,
                error: colors.red.accent3,
                background: colors.shades.white,
                drawerbackground: "#d9ded9",
                cardbackground: "#fff",
            },
            dark: {
                primary: "#47a64a",
                secondary: "#00b006",
                background: "#21272c",
                drawerbackground: "#212621",
                cardbackground: "#212621",
            },
        },
    },
})