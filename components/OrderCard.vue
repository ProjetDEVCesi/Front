<template>
  <div>
    <div class="flex justify-center my-4">
      <div
        class="grid grid-cols-5 justify-items-center items-center w-full h-32"
      >
        <div class="bg-gray-200 col-span-2 rounded w-4/5 h-full"></div>
        <div class="justify-self-start col-span-2">
          <p class="font-bold">{{ restaurant }}</p>
          <p class="text-gray-500 text-sm my-4">
            {{ items.length }} items • {{ price }} €
          </p>
          <p class="text-gray-500 text-sm">{{ status }}</p>
        </div>
      </div>
    </div>
    <div class="flex rounded border bg-gray-300 m-auto my-2 w-5/6"></div>
  </div>
</template>

<script>
export default {
  props: {
    restaurant: {
      type: String,
      required: true,
      // eslint-disable-next-line prettier/prettier
      default: () => 'Undefined',
    },
    status: {
      type: String,
      required: true,
      // eslint-disable-next-line prettier/prettier
      default: () => 'Undefined',
    },
    price: {
      type: Number,
      required: true,
      // eslint-disable-next-line prettier/prettier
      default: () => 0,
    },
    items: {
      type: Array,
      required: true,
      // eslint-disable-next-line prettier/prettier
      default: () => ['void'],
    },
  },
}
</script>
