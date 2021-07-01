<template>
  <div>
    <NuxtLink
      to="/OrderDetails"
      class="flex items-center m-auto my-8 h-20 w-4/5"
    >
      <div>
        <p class="text-2xl font-bold text-red-600 mx-2">Karen</p>
        <p class="text-gray-400 mx-8">2 items</p>
        <p class="font-semibold mx-8">19.45 €</p>
      </div>
      <div class="flex-1 flex justify-end">
        <p>See more</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="font-bold h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </NuxtLink>
    <div class="flex rounded border bg-gray-300 m-auto my-2 w-5/6"></div>
  </div>
</template>
