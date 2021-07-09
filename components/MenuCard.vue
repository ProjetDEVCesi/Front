<template>
  <NuxtLink to="/MenuSelect">
    <div class="shadow rounded bg-white mx-1 my-2 p-4">
      <p class="font-bold">Menu Tacos</p>
      <p class="text-gray-400 text-xs my-4">
        2 Tacos XL 3 viandes ou spécialité, frites, 2 desserts classiques et 2
        boissons 33cl (soft) ou 2 glaces au choix.
      </p>
      <p class="text-red-500 text-sm">{{ price }}€</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    price: { type: String, default: '???' },
  },
}
</script>
