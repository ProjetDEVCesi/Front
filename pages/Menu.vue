<template>
  <div class="bg-gray-200 h-screen">
    <div class="bg-white pb-2">
      <div class="shadow-md bg-gray-900 w-full h-32"></div>
      <p class="font-bold text-2xl mx-8 mt-4">O'Tacos</p>
      <p class="text-gray-400 text-xs mx-8 mt-1">Tacos • Fries</p>
      <div class="flex mx-8 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-gray-400 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p class="inline-flex text-gray-400 text-xs mx-2 h-5">
          1.10 km away • 0.99€ delivery • 8.00€ minimum • 1 rue Baudimont, 62000
          Arras • View map
        </p>
      </div>
      <div class="inline-flex text-gray-400 text-xs mx-8 mt-4">
        "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought
        not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth
        Plagueis was a Dark Lord of the Sith, so powerful and so wise he could
        use the Force to influence the midichlorians to create life…"
      </div>
      <div class="flex rounded bg-gray-300 m-auto my-4 w-5/6 h-1"></div>
    </div>
    <p class="font-bold text-2xl mx-8 my-4">Menus</p>
    <MenuCard />
    <div class="bg-gray-300 m-auto my-4 w-full h-1"></div>
    <p class="font-bold text-2xl mx-8 my-4">Pizza CLassiques</p>
    <MenuCard />
    <MenuCard />
  </div>
</template>

<script>
import MenuCard from '@/components/MenuCard'

export default {
  components: {
    MenuCard,
  },
  layout: 'NoNav',
}
</script>
