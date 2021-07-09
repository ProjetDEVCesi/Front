<template>
  <div class="bg-gray-200">
    <div class="bg-white pb-2">
      <div class="shadow-md bg-gray-900 w-full h-32">
        <XButton />
      </div>
      <p class="font-bold text-2xl mx-8 mt-4">Menu Tacos</p>
      <div class="flex mx-8 mt-4">
        <p class="inline-flex text-gray-400 text-xs mx-2 mb-8 h-5">
          2 Tacos XL 3 viandes ou spécialité, frites, 2 desserts classiques et 2
          boissons 33cl (soft) ou 2 glaces au choix.
        </p>
      </div>
      <div class="flex rounded border bg-gray-300 m-auto my-2 w-5/6"></div>
    </div>
    <div class="md:w-2/3 m-auto">
      <RadioCard />
      <TextAreaCard />
      <SelectCard />
      <CheckboxCard />
      <div class="h-32 bg-transparent"></div>
    </div>
    <div
      class="
        fixed
        border
        flex
        items-center
        shadow-md
        bg-white
        w-full
        h-20
        bottom-0
      "
    >
      <button class="rounded bg-red-500 text-white font-bold m-auto w-2/3 py-2">
        Add Item
      </button>
    </div>
  </div>
</template>

<script>
import RadioCard from '@/components/RadioCard'
import TextAreaCard from '@/components/TextAreaCard'
import SelectCard from '@/components/SelectCard'
import CheckboxCard from '@/components/CheckboxCard'
import XButton from '@/components/XButton'

export default {
  components: {
    RadioCard,
    TextAreaCard,
    SelectCard,
    CheckboxCard,
    XButton,
  },
  layout: 'NoNav',
  middleware: ['user-auth'],
}
</script>
