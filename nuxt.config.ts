export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Portfolio Site',
      meta: [
        {
          name: 'description',
          content:
            'Nuxt 3-based portfolio site with top, profile, portfolio, and contact pages.'
        }
      ]
    }
  }
});
