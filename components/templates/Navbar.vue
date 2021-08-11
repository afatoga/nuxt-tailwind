<template>
  <nav
    class="flex-wrap items-center justify-between px-2 py-3 dark:bg-black bg-blue-400 fixed w-full"
    v-click-outside="closeDropdownMenu"
    v-bind:class="{ 'navbar--hidden': !showNavbar, flex: showNavbar }"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto pl-4 lg:px-4 lg:static lg:block lg:justify-start"
      >
        <a
          class="text-lg leading-relaxed inline-block mr-4 pt-3 pb-2 whitespace-nowrap uppercase tracking-wide"
        >
          {{ $t('site_name') }}
        </a>
        <button
          class="cursor-pointer leading-none px-0 lg:px-4 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="showDropdown = !showDropdown"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            :viewBox="!showDropdown ? '0 0 32 32' : '0 0 28 28'"
            :width="!showDropdown ? '28' : '32'"
            :height="!showDropdown ? '28' : '32'"
          >
            <path
              v-if="!showDropdown"
              d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
            />
            <path
              v-if="showDropdown"
              d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
            />
          </svg>
        </button>
      </div>
      <div
        v-bind:class="{ hidden: !showDropdown, flex: showDropdown }"
        class="flex-row lg:flex pb-2 lg:pb-0 w-full lg:w-auto"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto lg:mr-0 pl-4 lg:justify-end lg:space-x-2">
          <li v-for="item in navItems" :key="item.path">
            <NuxtLink
              class="pt-3 pb-2 lg:px-2 flex items-center uppercase leading-snug lg:tracking-wide rounded-lg h-8 duration-300"
              :to="item.path"
              >{{ item.label }}</NuxtLink
            >
          </li>
        </ul>
        <ul class="flex flex-col lg:flex-row list-none mr-3 lg:mx-0 mt-3 lg:mt-0 lg:ml-2">
           <li>
             <div class="relative inline-block w-full text-gray-700">
  <select class="w-full h-8 pl-3 pr-6 text-base bg-gray-200 dark:bg-gray-300 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input"
   v-model="$i18n.locale">
    <option v-for="locale in $i18n.locales"
  :key="locale.code" :value="locale.code"
  ><nuxt-link :to="switchLocalePath(locale.code)"
  >{{ locale.name }}</nuxt-link>
  </option>
  <!-- <nuxt-link
    v-for="locale in $i18n.locales"
    v-if="locale.code !== $i18n.locale"
    :key="locale.code"
    :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link> -->
  </select>
  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  </div>
</div>
          </li>
          <li
            class="flex items-center pt-2 lg:pt-0 px-2 lg:px-4 italic"
            id="darkModeToggle"
          >
            <div
              v-if="$colorMode.preference === 'light'"
              @click="$colorMode.preference = 'dark'"
              class="inline-flex cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                />
                <path
                  d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
                />
              </svg>
              <p class="ml-2 lg:hidden">noční režim
              </p>
            </div>
            <div v-else
            @click="$colorMode.preference = 'light'"
            class="inline-flex cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                />
              </svg>
              <p class="ml-2 lg:hidden">denní režim
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      showDropdown: false,
      navItems: [
        {
          path: "#weby",
          label: "Weby"
        },
        {
          path: "#aplikace",
          label: "Aplikace"
        },
        {
          path: "#portfolio",
          label: "Portfolio"
        }
      ]
    };
  },
  // computed: {
  // availableLocales () {
  //   return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
  // }
  // },
  methods: {
    // toggleDropdown: function () {
    //   this.showDropdown = !this.showDropdown
    // },
    closeDropdownMenu: function() {
      if (!this.showDropdown) return;
      this.showDropdown = false;
    },
    onScroll() {
      this.closeDropdownMenu();
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }
      // Here we determine whether we need to show or hide the navbar
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    //console.log(this.showNavbar);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style scope lang="postcss">
nav ul > li {
  @apply text-gray-800 dark:text-gray-400;
  /* dark:hover:opacity-70; */
}

nav ul > li > a:hover {
  @apply text-black bg-gray-200 dark:bg-gray-600;
  /* text-decoration: underline; */
  /* text-shadow: 0rem .2rem 1rem rgb(212, 212, 212); */
}

li#darkModeToggle > div:hover {
  @apply text-gray-200 hover:text-yellow-400 dark:hover:text-gray-100;
}
/* hide on scroll */
nav {
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
  font-family: "Inter", sans-serif;
  font-weight: 500;
}

nav.navbar--hidden {
  transform: translate3d(0, -100%, 0);
}
</style>
