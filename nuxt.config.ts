// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'weather-widget-osoroka',
    '@element-plus/nuxt'
  ],
  elementPlus: {

    },
  imports: {
    autoImport: true
  },
  runtimeConfig: {
    public: {
      defaultLocation: 'Kiev'
    }
  },
})
