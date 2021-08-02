<template>
  <section><section id="uvod" class="my-12 md:mt-16 lg:mt-12 flex flex-row items-center justify-between">
          <div>
            <h1 class="py-4 text-3xl font-bold text-blue-600 text-left">
              Web je tváří vašeho projektu
            </h1>
            <p class="text-xl text-gray-700 text-left">
              Když je pěkný a rychlý, tak prodává. LEOWEB&nbsp;nabízí řešení
              na&nbsp;klíč. <strong>Společně</strong> můžeme vytvořit unikát
              nebo&nbsp;superzbraň.
            </p>
            <div class="mt-8 flex flex-row space-x-8 items-center justify-center md:justify-start">
              <i class="fab fa-wordpress-simple text-blue-600 text-4xl md:text-6xl tooltip"><span class="tooltip-text text-black bg-gray-200 -mt-6 -ml-20 rounded text-lg font-normal">WordPress</span></i><i class="fab fa-react text-blue-300 text-4xl md:text-6xl tooltip"><span class="tooltip-text text-black bg-gray-200 -mt-6 -ml-16 rounded text-lg font-normal">React</span></i><i class="fas fa-database text-green-600 text-4xl md:text-5xl tooltip"><span class="tooltip-text text-black bg-gray-200 -mt-6 -ml-16 rounded text-lg font-normal">Databáze</span></i><i class="fab text-orange-500 fa-aws text-4xl md:text-6xl tooltip"><span class="tooltip-text text-black bg-gray-200 -mt-6 -ml-24 rounded text-lg font-normal">Amazon Web Services</span></i><i class="fas fa-shopping-cart text-red-400 text-4xl md:text-5xl tooltip"><span class="tooltip-text text-black bg-gray-200 -mt-6 -ml-12 rounded text-lg font-normal">Eshop</span></i>
            </div>
            <div class="mt-8 text-white bg-gray-700 lg:bg-blue-700 p-4 cursor-default text-justify shadow-md rounded">
              Používáme WordPress, React, Node.js, Postgres nebo&nbsp;MySQL,
              Amazon&nbsp;Web&nbsp;Services, WooCommerce a&nbsp;jiné
              technologie.
            </div>
          </div>
          <picture class="hidden md:block">
            <img src="~/assets/img/webdesign.png" loading="lazy" width="500" alt="webdesign" class="loaded" />
          </picture>
        </section>

  </section>
</template>

<script>
import TButton from "~/components/TButton";

export default {
  components: {
    TButton,
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
</style>