<template>
  <section>
    <section
      id="uvod"
      class="my-12 md:mt-16 lg:mt-12 md:flex flex-row items-center justify-between"
    >
      <div class="px-2 md:px-0">
        <h1 class="py-4 text-3xl font-bold text-blue-600 text-left">
          Web je tváří vašeho projektu
        </h1>
        <div class="text-xl text-gray-700 text-left dark:text-gray-400">
          <strong>Společně</strong> vytvoříme unikát
          nebo&nbsp;superzbraň.
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
  </section>
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
</style>