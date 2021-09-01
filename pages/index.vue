<template>
  <div>
    <section id="uvod" class="pt-12 lg:pt-32 xl:pt-48 2xl:pt-72 2xl:h-screen">
      <div class="flex-row md:flex items-center justify-between">
        <picture
          class="md:order-last block md:ml-12 md:mr-0 lg:mx-1 p-8 md:p-0"
        >
          <img
            src="~/assets/img/webdesign.png"
            loading="lazy"
            width="500"
            alt="webdesign"
            class="loaded"
          />
        </picture>
        <div class="px-2 md:px-0">
          <h1
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
          />

          <div
            class="
              mt-8
              2xl:mt-10
              bg-gray-100
              dark:bg-black
              w-max
              mx-auto
              md:mx-0
              p-2
              rounded-lg
            "
          >
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
              >
            </div>
            <p class="mt-2 text-lg text-center text-gray-500 w-auto font-bold">
              {{ $t("work_tools") }}
            </p>
          </div>
        </div>
      </div>
      <p
        class="
          hidden
          2xl:block
          text-xl text-center
          mt-32
          cursor-pointer
          hover:underline
          w-full
        "
        @click="scrollToNextSection(1)"
      >
        {{ $t("my_work") }}<i class="fa fa-caret-down" aria-hidden="true"></i>
      </p>
    </section>
    <section
      :id="$t('webpages')"
      class="mt-12 lg:mt-32 xl:mt-48 2xl:h-screen"
    >
      <div class="flex flex-wrap">
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
        <div class="w-full lg:w-1/2 mt-4 md:mt">
         <div
                class="shadow-md rounded bg-gradient-to-r from-orange-300 to-orange-200 mt-12 lg:mt-4 p-4"
              >
                <div
                  class="flex flex-wrap lg:flex-row items-start lg:items-center"
                >
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
                      proměnil. Z&nbsp;velkého množství nabízených technologií
                      je třeba pečlivě vybrat ty, které nejvíce pasují Vašemu záměru. Např. díky službám od&nbsp;Amazonu a&nbsp;jiných poskytovatelů, je nyní možné vcelku levně provozovat aplikaci, která&nbsp;bude automaticky škálovat výkon - tzn.&nbsp;při&nbsp;velkém náporu uživatelů, nebude docházet k&nbsp;pádům systému.&rdquo;
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
    scrollToNextSection: function (index) {
      document.querySelectorAll("section")[index].scrollIntoView({
        block: "end",
        inline: "nearest",
        behavior: "smooth",
      });
    },
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

i > span {
  font-family: "Inter", sans-serif;
  padding: 0 0.18rem;
}

.af_bgTransparent {
  background-color: rgba(255, 255, 255, 0.4);
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

.af_motto {
  font-size: 2rem;
}

@media only screen and (min-width: 1440px) {
  .af_motto {
    font-size: 7rem;
    line-height: 7.2rem;
  }
}
</style>