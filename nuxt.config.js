export default {
  target: "static",
  head: {
    title: "Breaking Bad",
    titleTemplate: "%s 🕶️ 🧪 🔬",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Breaking Bad web app made with Nuxt.js and Bootstrap-Vue that consumes the data from the Breaking Bad Api ⚙️🌐🔒🔗 ",
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://cdn.pixabay.com/photo/2013/11/24/11/10/lab-217043_960_720.jpg",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["@/assets/css/main.css"],

  router: {
    linkActiveClass: "active-link",
    linkExactActiveClass: "exact-active-link",
  },

  plugins: [],

  components: true,

  buildModules: [
    [
      "@nuxtjs/fontawesome",
      {
        component: "fa",
        icons: {
          solid: ["faFlask"],
          brands: ["faGithub", "faCodepen", "faLinkedinIn", "faTwitter"],
        },
      },
    ],
  ],

  privateRuntimeConfig: {
    http: {
      baseURL: process.env.BASE_URL,
    },
  },

  modules: ["bootstrap-vue/nuxt", "@nuxt/http", "@nuxtjs/sitemap"],

  sitemap: {
    hostname: process.env.NETLIFY_URL,
    gzip: true,
    routes: [
      {
        url: "/",
        changefreq: "daily",
        priority: 1,
        lastmod: Date.now(),
      },
      {
        url: "/better_call_saul",
        changefreq: "daily",
        priority: 1,
        lastmod: Date.now(),
      },
    ],
  },
  generate: {
    fallback: true,
  },

  build: {},
};
