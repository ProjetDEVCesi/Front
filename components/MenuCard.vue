<template>
  <NuxtLink to="/MenuSelect">
    <div class="shadow rounded bg-white mx-1 my-2 p-4">
      <p class="font-bold">{{ menus }}</p>
      <p class="text-gray-400 text-xs my-4">
        {{ menus.articles }}
      </p>
      <p class="text-red-500 text-sm">34.00 €</p>
    </div>
  </NuxtLink>
</template>
<script>
export default {
  props: {
    menus: {
      type: Array,
      required: true,
      // eslint-disable-next-line prettier/prettier
      default: () => [],
    },
    articles: {
      type: String,
      required: true,
      // eslint-disable-next-line prettier/prettier
      default: () => '',
    },
  },
}
</script>
