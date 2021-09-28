export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'EAGLE TRACKS',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/213l.gif' }],
  },
  googleAnalytics: {
    id: 'UA-158456330-1',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/global.scss'],
  styleResources: {
    scss: ['~/assets/styles/resources/_mixins.scss'],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/style-resources', '@nuxtjs/google-analytics'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-lazy-load'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
