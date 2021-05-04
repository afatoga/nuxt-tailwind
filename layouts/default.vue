<template>
  <div class="h-screen">
   
  <div class="dark:bg-gray-800 dark:text-gray-200 h-screen">
     <Navbar />
    <nuxt class="mx-auto p-4 container" />
  </div>
  </div>
</template>

<script>
import Navbar from '~/components/templates/Navbar.vue';
export default {
  components: { Navbar },
  head: {
    title: "Nuxt.js with TailwindCSS",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js with TailwindCSS example",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>