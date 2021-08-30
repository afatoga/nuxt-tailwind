<template>
  <div>
    <section
      id="uvod"
      class="my-12 lg:mt-0 md:flex flex-row items-center justify-between min-h-screen"
    >
      <div class="px-2 md:px-0">
        <h1 class="py-4 font-bold text-vladam-blue text-left af_motto" v-html="$t('site_motto')" />

        <div class="mt-4 text-3xl text-gray-700 text-left dark:text-gray-400">
          {{$t('site_motto2')}}
        </div>
        <p class="mt-8 mb-2 text-lg text-center md:text-left text-gray-500">Pracovní nástroje</p>
        <div
          class="
            flex flex-wrap
            items-center
            justify-center
            md:justify-start
            space-x-2
            md:space-x-4
          "
        >
          <i
            class="
              fab
              fa-wordpress-simple
              text-blue-600 text-4xl
              md:text-5xl
              has-tooltip
              text-center
            "
            ><span
              class="
                tooltip
                text-black
                bg-gray-200
                -mt-6
                -ml-14
                rounded
                text-lg
                font-normal
              "
              >WordPress</span
            ></i
          >
          <i
            class="
              fas
              fa-shopping-cart
              text-red-400 text-4xl
              md:text-4xl
              has-tooltip
              text-center
            "
            ><span
              class="
                tooltip
                text-black
                bg-gray-200
                -mt-6
                -ml-14
                rounded
                text-lg
                font-normal
              "
              >WooCommerce</span
            ></i
          ><i
            class="
              fas
              fa-database
              text-green-600 text-4xl
              md:text-4xl
              has-tooltip
              text-center
            "
            ><span
              class="
                tooltip
                text-black
                bg-gray-200
                -mt-6
                -ml-16
                rounded
                text-lg
                font-normal
              "
              >Databáze a API</span
            ></i
          ><i
            class="fab fa-react text-blue-400 dark:text-blue-300 text-4xl md:text-5xl has-tooltip
              text-center"
            ><span
              class="
                tooltip
                text-black
                bg-gray-200
                -mt-6
                -ml-10
                rounded
                text-lg
                font-normal
              "
              >React</span
            ></i
          ><i
            class="fab text-yellow-500 fa-aws text-4xl md:text-5xl has-tooltip
              text-center"
            ><span
              class="
                tooltip
                text-black
                bg-gray-200
                -mt-6
                -ml-24
                rounded
                text-lg
                font-normal
              "
              >Amazon Web Services</span
            ></i
          >
        </div>
        <!-- <div
          class="
            mt-8
            text-white
            bg-gray-700
            lg:bg-blue-700
            p-4
            cursor-default
            text-justify
            shadow-md
            rounded
            max-w-lg
          "
        >
          Používáme WordPress, React, Node.js, Postgres nebo&nbsp;MySQL,
          Amazon&nbsp;Web&nbsp;Services, WooCommerce a&nbsp;jiné technologie.
        </div> -->
      </div>
      <picture class="hidden md:block md:ml-12 md:mr-0 lg:mx-1">
        <img
          src="~/assets/img/webdesign.png"
          loading="lazy"
          width="500"
          alt="webdesign"
          class="loaded"
        />
      </picture>
    </section>
       <section id="weby-a-aplikace" class="mb-16 min-h-screen">
          <h2 class="py-4 text-3xl font-medium text-blue-600 text-left">
            Weby a aplikace
          </h2>
          <div class="flex flex-wrap items-start">
            <div class="w-full text-xl text-gray-700">
              <ul class="af_list list-inside pt-2">
                <li class="mb-2">
                  Vytvářím weby a aplikace od&nbsp;návrhu po&nbsp;nasazení.
                </li>
                <li class="my-2">
                  Věnuji velkou pozornost uživatelskému zážitku.
                </li>
                <li class="my-2">
                  Využívám moderních přístupů, díky čemuž je výsledek svižný
                  a&nbsp;zabezpečný.
                </li>
                <li class="my-2">
                  Buduji projekty, které lze následně rozšiřovat.
                </li>
                <li class="my-2">Během vývoje informuji o&nbsp;průběhu prací.</li>
              </ul>
            </div>
            <!-- <div class="w-full lg:w-1/3 mt-4 md:mt">
              <a href="/portfolio.html"
                ><p
                  class="bg-gray-700 hover:bg-orange-400 text-white hover:text-black p-4 cursor-pointer text-center text-xl duration-700 shadow-md rounded"
                >
                  Zobrazit dosavadní práce
                </p></a
              >
              <div
                class="mt-8 flex flex-row space-x-8 items-center justify-center"
              >
                <i
                  class="fas fa-code text-gray-700 text-3xl md:text-5xl tooltip"
                  ><span
                    class="tooltip-text bg-gray-200 -mt-6 -ml-16 rounded text-lg font-normal"
                    >kódování</span
                  ></i
                >
                <i
                  class="fas fa-mobile-alt text-gray-700 text-4xl md:text-5xl tooltip"
                  ><span
                    class="tooltip-text bg-gray-200 -mt-6 -ml-16 rounded text-lg font-normal"
                    >responzivita</span
                  ></i
                ><i
                  class="fas fa-sitemap text-gray-700 text-4xl md:text-5xl tooltip"
                  ><span
                    class="tooltip-text bg-gray-200 -mt-6 -ml-24 rounded text-lg font-normal"
                    >architekura, infrastuktura</span
                  ></i
                ><i
                  class="fas fa-magic text-gray-700 text-4xl md:text-5xl tooltip"
                  ><span
                    class="tooltip-text bg-gray-200 -mt-6 -ml-12 rounded text-lg font-normal"
                    >efekty</span
                  ></i
                >
              </div>
            </div> -->
          </div>
        </section>
        </div>
</template>

<script>
//import TButton from "~/components/TButton";

export default {
  components: {
    //TButton,
  },
};
</script>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 dark:bg-gray-700  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200;
  &:hover {
    @apply bg-gray-300;
  }
}

  .tooltip {
    @apply invisible absolute;
  }

  .has-tooltip:hover .tooltip {
    @apply visible z-50;
  }

  i>span {
    font-family: "Inter", sans-serif;
    padding: 0 .18rem;
  }

   .af_bgTransparent {
    background-color: rgba(255, 255, 255, 0.4);
  }

  .af_menuButton:focus {
    outline: none;
  }

  ul.af_list>li {
    padding-bottom: 0.8rem;
    background-image: url('data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjaGV2cm9uLXJpZ2h0IiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY2hldnJvbi1yaWdodCBmYS13LTEwIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyMCA1MTIiIHdpZHRoPSIxMiI+PHBhdGggZmlsbD0iIzM4YTE2OSIgZD0iTTI4NS40NzYgMjcyLjk3MUw5MS4xMzIgNDY3LjMxNGMtOS4zNzMgOS4zNzMtMjQuNTY5IDkuMzczLTMzLjk0MSAwbC0yMi42NjctMjIuNjY3Yy05LjM1Ny05LjM1Ny05LjM3NS0yNC41MjItLjA0LTMzLjkwMUwxODguNTA1IDI1NiAzNC40ODQgMTAxLjI1NWMtOS4zMzUtOS4zNzktOS4zMTctMjQuNTQ0LjA0LTMzLjkwMWwyMi42NjctMjIuNjY3YzkuMzczLTkuMzczIDI0LjU2OS05LjM3MyAzMy45NDEgMEwyODUuNDc1IDIzOS4wM2M5LjM3MyA5LjM3MiA5LjM3MyAyNC41NjguMDAxIDMzLjk0MXoiPjwvcGF0aD48L3N2Zz4=');
    background-repeat: no-repeat;
    line-height: 1.37rem;
    padding-left: 1.4rem;
  }

  p.af_siteLink {
    padding-bottom: 0.8rem;
    background-image: url('data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjaGV2cm9uLXJpZ2h0IiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY2hldnJvbi1yaWdodCBmYS13LTEwIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyMCA1MTIiIHdpZHRoPSIxMiI+PHBhdGggZmlsbD0iIzM4YTE2OSIgZD0iTTI4NS40NzYgMjcyLjk3MUw5MS4xMzIgNDY3LjMxNGMtOS4zNzMgOS4zNzMtMjQuNTY5IDkuMzczLTMzLjk0MSAwbC0yMi42NjctMjIuNjY3Yy05LjM1Ny05LjM1Ny05LjM3NS0yNC41MjItLjA0LTMzLjkwMUwxODguNTA1IDI1NiAzNC40ODQgMTAxLjI1NWMtOS4zMzUtOS4zNzktOS4zMTctMjQuNTQ0LjA0LTMzLjkwMWwyMi42NjctMjIuNjY3YzkuMzczLTkuMzczIDI0LjU2OS05LjM3MyAzMy45NDEgMEwyODUuNDc1IDIzOS4wM2M5LjM3MyA5LjM3MiA5LjM3MyAyNC41NjguMDAxIDMzLjk0MXoiPjwvcGF0aD48L3N2Zz4=');
    background-repeat: no-repeat;
    line-height: 1.37rem;
    padding-left: 1.4rem;
}

.af_motto {
  font-size:3rem;  
}

@media only screen and (min-width: 1024px) {
  .af_motto {
  font-size:7rem;
  line-height: 7.2rem;  
  }
}
</style>