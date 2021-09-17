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
            :alt="$t('Vladimir')"
            class="loaded rounded-full shadow-lg mx-auto md:mx-0"
          />
        </picture>
        <div
          class="px-2 md:px-0 text-left md:w-1/2 md:text-justify md:ml-8 lg:ml-12 text-lg md:text-xl"
        >
          <p v-html="$t('Welcome')" />
          <p class="mt-2" v-html="$t('i_develop')" />
          <p class="mt-2" v-html="$t('Nowadays_websites_serve')" />
          <p class="mt-6" v-html="$t('I_am_at_your_service')" />
          <div class="md:hidden flex flex-row justify-end items-center mt-4">
            <img
              src="~/assets/img/vlad-sm.jpg"
              width="80"
              :alt="$t('Vladimir')"
              class="inline rounded-full shadow-lg"
            />
            <p class="inline ml-2 font-bold" v-html="$t('Vladimir')" />
          </div>

          <div class="mt-10 hidden md:block">
            <a
              :href="'#' + $t('contact')"
              class="af_button inline-flex items-center justify-center px-4 py-2 text-lg font-medium leading-6 whitespace-no-wrap bg-transparent border border-vladam-blue rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-rounded="rounded-md"
              data-primary="blue-600"
              data-primary-reset="{}"
              v-html="$t('contact_me')"
            />
          </div>
        </div>
      </div>

      <p
        class="block md:hidden 2xl:block text-xl text-center mt-8 2xl:mt-32 cursor-pointer w-full"
        @click="scrollToNextSection(1)"
      >
        <span class="hover:underline">{{ $t("Services") }}</span
        >&nbsp;<span class="text-xl">&#11206;</span>
      </p>
    </section>
    <section :id="$t('services')" class="mt-4 md:mt-12 2xl:mt-0 2xl:pt-24">
      <div class="flex-row md:flex items-center">
        <div class="md:w-1/2">
          <h2 class="py-4 text-3xl font-medium text-vladam-blue text-left">
            {{ $t("webpages_and_apps") }}
          </h2>
          <div class="flex flex-wrap items-start">
            <div class="w-full text-xl">
              <ul class="af_list list-inside pt-2">
                <li class="mb-2" v-html="$t('I_produce_websites')" />
                <li class="my-2" v-html="$t('I_care_a_lot_about_UX')" />
                <li class="my-2" v-html="$t('I_follow_modern_methods')" />
                <li class="my-2" v-html="$t('I_build_extendable_projects')" />
                <li class="my-2" v-html="$t('I_notify_about_the_progress')" />
              </ul>
            </div>
          </div>
        </div>
        <div class="px-2 md:px-0 mx-auto">
          <div
            class="mt-8 md:mt-0 bg-gray-100 dark:bg-gray-400 p-2 rounded-lg md:ml-20 xl:ml-0"
          >
            <p
              class="mt-2 text-lg lg:text-xl text-center text-gray-500 dark:text-gray-700 w-auto font-bold"
            >
              {{ $t("work_tools") }}
            </p>
            <div class="grid grid-cols-2">
              <div class="mx-auto my-4 has-tooltip">
                <img
                  src="~/assets/img/wordpress.svg"
                  loading="lazy"
                  width="80"
                  alt="wordpress"
                />
                <span
                  class="tooltip text-black bg-gray-200 px-2 mt-4 -ml-24 rounded text-lg font-normal"
                  v-html="$t('wordpress_tool')"
                />
              </div>
              <div class="mx-auto my-4 flex content-center has-tooltip lg:px-8">
                <img
                  src="~/assets/img/woocommerce.svg"
                  loading="lazy"
                  width="220"
                  alt="woocommerce"
                /><span
                  class="tooltip text-black bg-gray-200 px-2 mt-16 -ml-10 rounded text-lg font-normal"
                  v-html="$t('woocommerce_tool')"
                />
              </div>
              <div class="mx-auto my-4 has-tooltip">
                <img
                  src="~/assets/img/reactjs.svg"
                  loading="lazy"
                  width="80"
                  alt="react"
                /><span
                  class="tooltip text-black bg-gray-200 px-2 mt-4 -ml-20 rounded text-lg font-normal"
                  v-html="$t('react_tool')"
                />
              </div>
              <div class="mx-auto my-4 has-tooltip">
                <img
                  src="~/assets/img/sql.png"
                  loading="lazy"
                  width="120"
                  alt="sql"
                /><span
                  class="tooltip text-black bg-gray-200 px-2 mt-4 -ml-16 rounded text-lg font-normal"
                  v-html="$t('sql_tool')"
                />
              </div>
              <div class="mx-auto my-4 has-tooltip">
                <img
                  src="~/assets/img/nextjs.svg"
                  loading="lazy"
                  width="110"
                  alt="nextjs"
                /><span
                  class="tooltip text-black bg-gray-200 px-2 mt-2 -ml-24 rounded text-lg font-normal"
                  v-html="$t('next_tool')"
                />
              </div>
              <div class="mx-auto my-4 has-tooltip">
                <img
                  src="~/assets/img/amazon-web-services.svg"
                  loading="lazy"
                  width="120"
                  alt="amazon web services"
                /><span
                  class="tooltip text-black bg-gray-200 px-2 mt-4 -ml-24 rounded text-lg font-normal"
                  v-html="$t('aws_tool')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section :id="$t('webpages')" class="mt-12 lg:mt-32 xl:mt-48">
      <div class="flex-row md:flex items-center">
        <div class="w-full pb-8">
          <h2 class="py-4 text-3xl font-medium text-vladam-blue text-left">
            {{ $t("portfolio") }}
          </h2>
          <no-ssr>
            <div class="relative">
              <div
                class="absolute left-0 -ml-10 md:mt-20 xl:mt-32 text-5xl cursor-pointer select-none"
                @click="$refs.siema.prev()"
              >
                &#10096;
              </div>
              <div
                class="absolute right-0 -mr-10 md:mt-20 xl:mt-32 text-5xl cursor-pointer select-none"
                @click="$refs.siema.next()"
              >
                &#10097;
              </div>
              <siema
                ref="siema"
                class="siema select-none"
                :options="options"
                auto-play
              >
                <div class="px-1">
                  <img
                    class="mx-auto pb-4"
                    src="~/assets/img/lifesupport.png"
                    loading="lazy"
                    alt="Lifesupport.cz"
                  />
                  <p
                    class="px-2 py-2 bg-gray-100 dark:bg-gray-400 dark:text-gray-700 p-2 rounded-lg"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div class="px-1">
                  <img
                    class="mx-auto pb-4"
                    src="~/assets/img/vize2030.svg"
                    width="266"
                    loading="lazy"
                    alt="Vize2030"
                  />
                  <p
                    class="px-2 py-2 bg-gray-100 dark:bg-gray-400 dark:text-gray-700 p-2 rounded-lg"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div class="px-1">
                  <img
                    class="mx-auto pb-4"
                    src="~/assets/img/shishaexpress.png"
                    width="148"
                    loading="lazy"
                    alt="Shishaexpress"
                  />
                  <p
                    class="px-2 py-2 bg-gray-100 dark:bg-gray-400 dark:text-gray-700 p-2 rounded-lg"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div class="px-1">
                  <img
                    class="mx-auto pb-4"
                    src="~/assets/img/react.svg"
                    loading="lazy"
                    width="80"
                    alt="React"
                  />
                  <p
                    class="px-2 py-2 bg-gray-100 dark:bg-gray-400 dark:text-gray-700 p-2 rounded-lg"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              </siema>
            </div>
          </no-ssr>
        </div>
      </div>
      <!-- <div class="flex flex-wrap">
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
                    class="font-medium text-base tracking-wider block lg:inline-block"
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
      </div> -->
    </section>
  </div>
</template>

<script>
import siema from "~/plugins/vue2-siema.js";

export default {
  // components: {
  //   siema
  // },
  data() {
    return {
      options: {
        duration: 300,
        easing: "ease-out",
        perPage: {
          768: 2,
          1024: 3
        },
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true,
        rtl: false
      }
    };
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
.siema {
  margin: 1rem 0;
}

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
  /* font-family: "Inter", sans-serif; */
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

section {
  font-family: "Inconsolata", monospace;
}
</style>
