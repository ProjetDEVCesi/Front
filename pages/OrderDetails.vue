<template>
  <div>
    <div class="md:w-2/3 m-auto">
      <div class="flex justify-center pl-28 pr-12 py-8">
        <XButton class="top-32" />
        <p class="text-2xl font-semibold text-red-600">Karen</p>
        <div class="flex-1 flex justify-end">
          <button class="rounded bg-gray-300 text-white font-bold px-2">
            HELP
          </button>
        </div>
      </div>
      <div class="flex rounded border bg-gray-300 m-auto my-2 w-full"></div>
      <OrderElement />
      <OrderElement />
      <OrderElement />
      <OrderElement />
      <OrderElement />
      <OrderElement />
      <OrderElement />
      <TotalReceipt />
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
        Confirm
      </button>
    </div>
  </div>
</template>

<script>
import XButton from '@/components/XButton'
import OrderElement from '@/components/OrderElement'
import TotalReceipt from '@/components/TotalReceipt'

export default {
  components: {
    XButton,
    OrderElement,
    TotalReceipt,
  },
  layout: 'NavManager',
}
</script>
