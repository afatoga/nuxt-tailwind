<template>
<i
            class="
              fab
              fa-wordpress-simple
              text-blue-600 text-4xl
              md:text-6xl
              has-tooltip
            "
            ><span
              class="
                tooltip
                text-black
                bg-gray-200
                -mt-6
                -ml-20
                rounded
                text-lg
                font-normal
              "
              >{{label}}</span
            ></i
          >
</template>

<script>
export default {
  name: "ServiceIcon",
  props: ['label'],
}
</script>

<style lang="postcss" scoped>
  .tooltip {
    @apply invisible absolute;
  }

  .has-tooltip:hover .tooltip {
    @apply visible z-50;
  }
</style>