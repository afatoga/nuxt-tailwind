<template>
  <div>
    <section
      id="vladimir"
      class="pt-12 lg:pt-32 xl:pt-48 2xl:pt-62 2xl:h-screen"
    >
      <div
        class="flex-row md:flex items-center mt-4 md:mt-0 bg-gray-200 dark:bg-gray-400 dark:text-black rounded-lg p-2 md:px-0 md:bg-transparent dark:md:bg-transparent dark:md:text-gray-300"
      >
        <picture
          class="hidden md:block md:ml-12 md:mr-0 lg:mx-1 p-8 md:p-0 md:w-1/3"
        >
          <img
            src="~/assets/img/vlad.png"
            width="400"
            alt="vlad"
            class="loaded rounded-full shadow-lg mx-auto md:mx-0"
          />
        </picture>
        <div
          class="px-2 md:px-0 text-left md:w-1/2 md:text-justify md:ml-8 lg:ml-12 text-lg md:text-xl"
        >
          <p class="">Zdravím Vás,</p>
          <p class=" mt-2">
            vyvíjím software a&nbsp;specializuji se&nbsp;na&nbsp;tvorbu webů,
            eshopů a&nbsp;informačních systémů.
          </p>
          <p class=" mt-2">
            Weby dnes slouží jako obchodní platformy k&nbsp;získávání nových
            zákazníků, přímému prodeji zboží, nebo fungují jako aplikace.
          </p>
          <p class=" mt-6">
            Jsem k Vašim službám, a zasadím se o to, že&nbsp;Váš web
            nebo&nbsp;aplikace budou rychlé, bezpečné a&nbsp;atraktivní.
          </p>
          <div class="md:hidden flex flex-row justify-end items-center mt-4">
            <img
              src="~/assets/img/vlad-sm.jpg"
              width="80"
              alt="vlad"
              class="inline rounded-full shadow-lg"
            />
            <p class="inline ml-2 font-bold">Vláďa</p>
          </div>

          <div class="mt-10 hidden md:block">
            <a
              href="#kontakt"
              class="af_button inline-flex items-center justify-center px-4 py-2 text-lg font-medium leading-6 whitespace-no-wrap bg-transparent border border-vladam-blue rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-rounded="rounded-md"
              data-primary="blue-600"
              data-primary-reset="{}"
            >
              Kontaktovat
            </a>
          </div>
        </div>
      </div>

      <p
        class="
          block
          md:hidden
          2xl:block
          text-xl text-center
          mt-8
          2xl:mt-32
          cursor-pointer
          w-full
        "
        @click="scrollToNextSection(1)"
      >
        <span class="hover:underline">{{ $t("services") }}</span
        >&nbsp;<i class="fa fa-caret-down" aria-hidden="true"></i>
      </p>
    </section>
    <section id="services" class="mt-4 md:mt-12 2xl:mt-0 2xl:pt-24">
      <div class="flex-row md:flex items-center">
        <!-- <picture
          class="md:order-last block md:ml-12 md:mr-0 lg:mx-1 p-8 md:p-0"
        >
          <img
            src="~/assets/img/webdesign.png"
            loading="lazy"
            width="500"
            alt="webdesign"
            class="loaded"
          />
        </picture> -->
        <div class="md:w-1/2">
          <h2 class="py-4 text-3xl font-medium text-blue-600 text-left">
            {{ $t("webpages_and_apps") }}
          </h2>
          <div class="flex flex-wrap items-start">
            <div class="w-full text-xl text-gray-700">
              <ul class="af_list list-inside pt-2 dark:text-gray-400">
                <li
                  class="mb-2"
                  v-html="
                    $t(
                      'Vytvářím weby a aplikace od&nbsp;návrhu po&nbsp;nasazení.'
                    )
                  "
                ></li>
                <li
                  class="my-2"
                  v-html="$t('Věnuji velkou pozornost uživatelskému zážitku.')"
                ></li>
                <li
                  class="my-2"
                  v-html="
                    $t(
                      'Vytvářím weby a aplikace od&nbsp;návrhu po&nbsp;nasazení.'
                    )
                  "
                >
                  Využívám moderních přístupů, díky čemuž je výsledek svižný
                  a&nbsp;zabezpečný.
                </li>
                <li
                  class="my-2"
                  v-html="
                    $t(
                      'Vytvářím weby a aplikace od&nbsp;návrhu po&nbsp;nasazení.'
                    )
                  "
                >
                  Buduji projekty, které lze následně rozšiřovat.
                </li>
                <li
                  class="my-2"
                  v-html="
                    $t(
                      'Vytvářím weby a aplikace od&nbsp;návrhu po&nbsp;nasazení.'
                    )
                  "
                >
                  Během vývoje informuji o&nbsp;průběhu prací.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="px-2 md:px-0 mx-auto">
          <!-- <h1
            class="
              py-4
              font-bold
              text-vladam-blue text-left
              af_motto
              leading-10
            "
            v-html="$t('site_motto')"
          />

          <div
            class="
              mt-4
              text-xl
              md:text-3xl
              text-gray-700 text-left
              dark:text-gray-400
            "
            v-html="$t('site_motto2')"
          /> -->

          <div
            class="
              mt-8
              md:mt-0
              bg-gray-100
              dark:bg-gray-400
              p-2
              rounded-lg
              md:ml-20
              xl:ml-0
            "
          >
            <div
              class="
                grid grid-cols-2
              "
            >
              <div class="mx-auto my-4 has-tooltip">
                <img
                  src="~/assets/img/wordpress.svg"
                  loading="lazy"
                  width="80"
                  alt="wordpress"
                />
                <span
                  class="
                    tooltip
                    text-black
                    bg-gray-200
                    px-2
                    mt-4
                    -ml-16
                    rounded
                    text-lg
                    font-normal
                  "
                  >Wordpress - oblíbený open source systém pro správu obsahu a médií</span
                >
              </div>
              <div class="mx-auto my-4 flex content-center has-tooltip lg:px-8">
                <img
                  src="~/assets/img/woocommerce.svg"
                  loading="lazy"
                  width="220"
                  alt="woocommerce"
                /><span
                  class="
                    tooltip
                    text-black
                    bg-gray-200
                    px-2
                    mt-16
                    -ml-10
                    rounded
                    text-lg
                    font-normal
                  "
                  >WooCommerce - eshopové rozšíření Wordpressu</span
                >
              </div>
              <div class="mx-auto my-4 has-tooltip">
                <img
                  src="~/assets/img/reactjs.svg"
                  loading="lazy"
                  width="80"
                  alt="react"
                /><span
                  class="
                    tooltip
                    text-black
                    bg-gray-200
                    px-2
                    mt-4
                    -ml-16
                    rounded
                    text-lg
                    font-normal
                  "
                  >React - moderní JavaScriptová knihovna</span
                >
              </div>
              <div class="mx-auto my-4 has-tooltip">
                <img
                  src="~/assets/img/sql.png"
                  loading="lazy"
                  width="120"
                  alt="sql"
                /><span
                  class="
                    tooltip
                    text-black
                    bg-gray-200
                    px-2
                    mt-4
                    -ml-16
                    rounded
                    text-lg
                    font-normal
                  "
                  >Relační databáze - Postgres, MariaDB aj.</span
                >
              </div>
              <div class="mx-auto my-4 has-tooltip">
                <img
                  src="~/assets/img/nextjs.svg"
                  loading="lazy"
                  width="110"
                  alt="nextjs"
                /><span
                  class="
                    tooltip
                    text-black
                    bg-gray-200
                    px-2
                    mt-2
                    -ml-16
                    rounded
                    text-lg
                    font-normal
                  "
                  >NextJS framework pro tvorbu webových aplikací</span
                >
              </div>
              <div class="mx-auto my-4 has-tooltip">
                <img
                  src="~/assets/img/amazon-web-services.svg"
                  loading="lazy"
                  width="120"
                  alt="amazon web services"
                /><span
                  class="
                    tooltip
                    text-black
                    bg-gray-200
                    px-2
                    mt-4
                    -ml-8
                    rounded
                    text-lg
                    font-normal
                  "
                  >Amazon Web Services</span
                >
              </div>
              <!-- <i
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
                  >{{ $t("dbs_and_api") }}</span
                ></i
              ><i
                class="
                  fab
                  fa-react
                  text-blue-400
                  dark:text-blue-300
                  text-4xl
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
                    -ml-10
                    rounded
                    text-lg
                    font-normal
                  "
                  >React</span
                ></i
              ><i
                class="
                  fab
                  text-yellow-500
                  fa-aws
                  text-4xl
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
                    -ml-24
                    rounded
                    text-lg
                    font-normal
                  "
                  >Amazon Web Services</span
                ></i
              > -->
            </div>
            <p class="mt-2 text-lg text-center text-gray-500 w-auto font-bold">
              {{ $t("work_tools") }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section :id="$t('webpages')" class="mt-12 lg:mt-32 xl:mt-48 2xl:h-screen">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 mt-4 md:mt">
          <div
            class="shadow-md rounded bg-gradient-to-r from-orange-300 to-orange-200 mt-12 lg:mt-4 p-4"
          >
            <div class="flex flex-wrap lg:flex-row items-start lg:items-center">
              <img
                class="mx-auto lg:mx-0 w-24 rounded-full"
                src="~/assets/img/webdesign.png"
                loading="lazy"
                alt="Zakladatel studia Leoweb"
              />
              <div
                class="w-full lg:w-4/5 xl:w-5/6 lg:pl-8 text-lg text-gray-800"
              >
                <p class="font-bold text-center lg:text-left my-4 lg:m-0">
                  Vladimír Mryščuk<span
                    class="font-medium text-base tracking-wider block lg:inline-block "
                    ><span class="hidden lg:inline-block">, </span
                    ><span class="lg:ml-1">vývojář</span></span
                  >
                </p>
                <p class="lg:mt-2 text-justify px-2 lg:px-0">
                  &bdquo;Vývoj aplikací se za poslední dekádu neobyčejně
                  proměnil. Z&nbsp;velkého množství nabízených technologií je
                  třeba pečlivě vybrat ty, které nejvíce pasují Vašemu záměru.
                  Např. díky službám od&nbsp;Amazonu a&nbsp;jiných
                  poskytovatelů, je nyní možné vcelku levně provozovat aplikaci,
                  která&nbsp;bude automaticky škálovat výkon -
                  tzn.&nbsp;při&nbsp;velkém náporu uživatelů, nebude docházet
                  k&nbsp;pádům systému.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
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
  methods: {
    scrollToNextSection: function(index) {
      document.querySelectorAll("section")[index].scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth"
      });
    }
  }
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

i > span {
  font-family: "Inter", sans-serif;
  padding: 0 0.18rem;
}

.af_bgTransparent {
  background-color: rgba(255, 255, 255, 0.4);
}

.af_button {
  @apply text-black dark:text-white uppercase;
  &:hover {
    @apply text-white bg-vladam-blue;
  }
}

section#vladimir {
  font-family: "Inconsolata", monospace;
}

.af_menuButton:focus {
  outline: none;
}

ul.af_list > li {
  padding-bottom: 0.8rem;
  background-image: url("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjaGV2cm9uLXJpZ2h0IiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY2hldnJvbi1yaWdodCBmYS13LTEwIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyMCA1MTIiIHdpZHRoPSIxMiI+PHBhdGggZmlsbD0iIzM4YTE2OSIgZD0iTTI4NS40NzYgMjcyLjk3MUw5MS4xMzIgNDY3LjMxNGMtOS4zNzMgOS4zNzMtMjQuNTY5IDkuMzczLTMzLjk0MSAwbC0yMi42NjctMjIuNjY3Yy05LjM1Ny05LjM1Ny05LjM3NS0yNC41MjItLjA0LTMzLjkwMUwxODguNTA1IDI1NiAzNC40ODQgMTAxLjI1NWMtOS4zMzUtOS4zNzktOS4zMTctMjQuNTQ0LjA0LTMzLjkwMWwyMi42NjctMjIuNjY3YzkuMzczLTkuMzczIDI0LjU2OS05LjM3MyAzMy45NDEgMEwyODUuNDc1IDIzOS4wM2M5LjM3MyA5LjM3MiA5LjM3MyAyNC41NjguMDAxIDMzLjk0MXoiPjwvcGF0aD48L3N2Zz4=");
  background-repeat: no-repeat;
  line-height: 1.37rem;
  padding-left: 1.4rem;
}

p.af_siteLink {
  padding-bottom: 0.8rem;
  background-image: url("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjaGV2cm9uLXJpZ2h0IiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY2hldnJvbi1yaWdodCBmYS13LTEwIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyMCA1MTIiIHdpZHRoPSIxMiI+PHBhdGggZmlsbD0iIzM4YTE2OSIgZD0iTTI4NS40NzYgMjcyLjk3MUw5MS4xMzIgNDY3LjMxNGMtOS4zNzMgOS4zNzMtMjQuNTY5IDkuMzczLTMzLjk0MSAwbC0yMi42NjctMjIuNjY3Yy05LjM1Ny05LjM1Ny05LjM3NS0yNC41MjItLjA0LTMzLjkwMUwxODguNTA1IDI1NiAzNC40ODQgMTAxLjI1NWMtOS4zMzUtOS4zNzktOS4zMTctMjQuNTQ0LjA0LTMzLjkwMWwyMi42NjctMjIuNjY3YzkuMzczLTkuMzczIDI0LjU2OS05LjM3MyAzMy45NDEgMEwyODUuNDc1IDIzOS4wM2M5LjM3MyA5LjM3MiA5LjM3MyAyNC41NjguMDAxIDMzLjk0MXoiPjwvcGF0aD48L3N2Zz4=");
  background-repeat: no-repeat;
  line-height: 1.37rem;
  padding-left: 1.4rem;
}

/* .af_motto {
  font-size: 2rem;
}

@media only screen and (min-width: 1440px) {
  .af_motto {
    font-size: 7rem;
    line-height: 7.2rem;
  }
} */
</style>
