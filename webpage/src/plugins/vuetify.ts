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
                primary: "#35d6d0",
                secondary: "#ff43bb",
                accent: colors.shades.black,
                error: colors.red.accent3,
                background: colors.shades.white,
                drawerbackground: "#d9dede",
                cardbackground: "#ffffff",
            },
            dark: {
                primary: "#35d6d0",
                secondary: "#ff35d5",
                background: colors.shades.black,
                drawerbackground: "#212626",
                cardbackground: "#212626",
            },
        },
    },
})