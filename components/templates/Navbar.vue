<template>
  <nav
    class="flex-wrap items-center justify-between px-2 py-3 dark:bg-gray-900 bg-green-500 mb-3 fixed w-full"
    v-click-outside="closeDropdownMenu"
    v-bind:class="{ 'navbar--hidden': !showNavbar, flex: showNavbar}"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
      >
        <a
          class="font-bold text-lg leading-relaxed inline-block mr-4 pt-3 pb-2 whitespace-nowrap uppercase"
        >
          LOGO
        </a>
        <button
          class="cursor-pointer leading-none px-0 lg:px-4 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="showDropdown = !showDropdown"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
      <div
        v-bind:class="{ hidden: !showDropdown, flex: showDropdown }"
        class="lg:flex lg:flex-grow items-center pb-2 lg:pb-0"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto px-4 px-md-0 text-sm">
          <li class="nav-item" v-for="item in navItems" :key="item.path">
            <NuxtLink
              class="px-0 lg:px-4 pt-3 pb-2 flex items-center uppercase font-bold leading-snug"
              :to="item.path"
              >{{ item.label }}</NuxtLink
            >
          </li>
          <li class="flex items-center pt-2 lg:pt-0 px-0 lg:px-4" id="darkModeToggle">
            <div
              v-if="$colorMode.preference === 'light'"
              @click="$colorMode.preference = 'dark'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-moon-stars-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                />
                <path
                  d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
                />
              </svg>
            </div>
            <div v-else @click="$colorMode.preference = 'light'">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-sun-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                />
              </svg>
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
          path: "/",
          label: "Hledám učitele",
        },
        {
          path: "/pro-ucitele",
          label: "Chci vyučovat",
        },
      ],
    };
  },
  methods: {
    // toggleDropdown: function () {
    //   this.showDropdown = !this.showDropdown
    // },
    closeDropdownMenu: function () {
      if (!this.showDropdown) return
      this.showDropdown = false
    },
    onScroll () {
    this.closeDropdownMenu()
    // Get the current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
    if (currentScrollPosition < 0) {
      return
    }
    // Here we determine whether we need to show or hide the navbar
    this.showNavbar = currentScrollPosition < this.lastScrollPosition
    // Set the current scroll position as the last scroll position
    this.lastScrollPosition = currentScrollPosition
  }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
};
</script>

<style scope lang="postcss">
nav ul > li {
  @apply text-gray-800 dark:text-gray-400;
  /* dark:hover:opacity-70; */
}

nav ul > li > a:hover {
  /* @apply duration-500; */
  text-decoration: underline;
  /* text-shadow: 0rem .2rem 1rem rgb(212, 212, 212); */
}

li#darkModeToggle>div:hover {
  @apply text-gray-200 hover:text-yellow-400 dark:hover:text-gray-100
}
/* hide on scroll */
nav {
 transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}

nav.navbar--hidden {
  transform: translate3d(0, -100%, 0);
}
</style>
