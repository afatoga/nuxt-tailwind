<template>
  <div class="dark:bg-gray-800 dark:text-gray-200 h-100">
     <Navbar />
    <nuxt class="mx-auto p-4 container pt-8" />
  </div>
</template>

<script>
import Navbar from '~/components/templates/Navbar.vue';
export default {
  components: { Navbar },
  head: {
    htmlAttrs: {
      lang: 'cs'
    },
    title: "Vladimír Mryščuk - osobní web",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Návrh a vývoj webových stránek, eshopů a informačních systémů. Responzivní weby a aplikace pro mobilní zařízení.",
      },
    ],
    link: [{ rel: "preconnect", href: "https://fonts.googleapis.com" }],
    link: [{ rel: "preconnect", href: "https://fonts.gstatic.com" }],
    link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap" }],
    link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" }],
    link: [{ rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.3.1/css/all.css" }],
    // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>