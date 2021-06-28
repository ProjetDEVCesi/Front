<template>
  <div>
    <div class="shadow-md flex justify-center items-center w-full h-28">
      <BackButton />
      <div class="font-bold text-3xl tracking-widest">DELIVERY</div>
    </div>
    <div class="grid grid-cols-3 m-auto w-1/2 mt-10">
      <div class="rounded-full bg-red-600 ml-2 w-6 h-6" />
      <div class="col-span-2">
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
    <div class="grid grid-cols-3 m-auto w-1/2 mt-20">
      <div class="rounded-full bg-gray-400 ml-2 w-6 h-6" />
      <p class="col-span-2 font-bold text-gray-400">Food is being prepared</p>
    </div>
    <div class="grid grid-cols-3 m-auto w-1/2 mt-20">
      <div class="rounded-full bg-gray-400 ml-2 w-6 h-6" />
      <p class="col-span-2 font-bold text-gray-400">Courier is on the way</p>
    </div>
    <div class="grid grid-cols-3 m-auto w-1/2 mt-20">
      <div class="rounded-full bg-gray-400 ml-2 w-6 h-6" />
      <p class="col-span-2 font-bold text-gray-400">Food is arriving</p>
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
}
</script>
