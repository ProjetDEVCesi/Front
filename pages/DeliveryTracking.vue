<template>
  <div>
    <div class="shadow-md flex justify-center items-center w-full h-28">
      <BackButton />
      <div class="font-bold text-3xl tracking-widest">DELIVERY</div>
    </div>
    <div class="grid grid-cols-5 gap-1 m-auto mt-20 w-2/3">
      <div
        class="rounded-l bg-red-500 w-full h-4"
        :class="{ 'col-span-2 bg-red-500 animate-pulse': seen == 1 }"
      ></div>
      <div
        class="bg-gray-300 w-full h-4"
        :class="{
          'bg-red-500': seen >= 2,
          'col-span-2 animate-pulse': seen == 2,
        }"
      ></div>
      <div
        class="bg-gray-300 w-full h-4"
        :class="{
          'bg-red-500': seen >= 3,
          'col-span-2 animate-pulse': seen == 3,
        }"
      ></div>
      <div
        class="rounded-r bg-gray-300 w-full h-4"
        :class="{
          'bg-red-500': seen >= 4,
          'col-span-2 animate-pulse': seen == 4,
        }"
      ></div>
    </div>
    <div v-show="seen == 1" class="m-auto w-1/2 mt-10">
      <div>
        <p class="font-bold">Confirming order with restaurant</p>
        <p class="text-gray-400 text-xs my-4">15 rue du Sésame</p>
        <button
          class="
            bg-gray-400
            text-white
            font-bold
            justify-center
            rounded-full
            px-4
            h-8
          "
        >
          Cancel Order
        </button>
      </div>
    </div>
    <div v-show="seen == 2" class="m-auto w-1/2 mt-20">
      <p class="font-bold">Food is being prepared</p>
    </div>
    <div v-show="seen == 3" class="m-auto w-1/2 mt-20">
      <p class="font-bold">Courier is on the way</p>
    </div>
    <div v-show="seen == 4" class="m-auto w-1/2 mt-20">
      <p class="font-bold">Food is arriving</p>
    </div>
    <button
      class="
        bg-red-400
        text-white
        font-bold
        justify-center
        rounded-full
        px-4
        h-8
      "
      @click="step"
    >
      Test
    </button>
    <div class="fixed border shadow-md bg-gray-600 w-full h-52 bottom-0 p-10">
      <div class="flex items-end w-full">
        <p class="text-white text-6xl mr-8">
          8:30<span class="text-3xl">pm</span>
        </p>
        <p class="flex-auto text-white font-light text-xl mx-auto">
          Estimated arrival
        </p>
      </div>
      <p class="text-white font-light text-xl mt-5">Latest arrival by 9:30pm</p>
    </div>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton'

export default {
  components: {
    BackButton,
  },
  layout: 'NoNav',
  middleware: ['user-auth', 'utilisateur'],
  data() {
    return {
      seen: 1,
    }
  },
  methods: {
    step() {
      this.seen = this.seen + 1
      if (this.seen > 4) {
        this.seen = 1
      }
    },
  },
}
</script>
