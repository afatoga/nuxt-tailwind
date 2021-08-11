export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  // head: {
  //   title: 'nuxt-tailwind',
  //   htmlAttrs: {
  //     lang: 'cs'
  //   },
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: '' }
  //   ],
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  //   ]
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/directives.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    "@nuxtjs/color-mode",
  ],

  tailwindcss: {
    exposeConfig: true
  },

  colorMode: {
    classSuffix: "",
    preference: "light"
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  
    modules: [
      '@nuxtjs/i18n'
    ],
  
    i18n: {
      locales: [
       {
          code: 'en',
          iso: 'en-GB',
          name: 'EN',
          file: 'en.js'
       },
       {
          code: 'cs',
          iso: 'cs-CZ',
          name: 'CZ',
          file: 'cs.js'
       }
      ],
      langDir: 'locales/',
      strategy: 'prefix_except_default',
      defaultLocale: 'cs',
      },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  }
}
