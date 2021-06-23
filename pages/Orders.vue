<template>
  <div>
    <div class="shadow-md flex justify-center items-center w-full h-28">
      <div class="font-bold text-3xl tracking-widest">ORDERS</div>
    </div>
    <OrderCard />
    <div class="flex bg-gray-200 m-auto mt-10 w-4/5 h-1"></div>
    <OrderCard />
  </div>
</template>

<script>
import OrderCard from '@/components/OrderCard'

export default {
  components: {
    OrderCard,
  },
}
</script>
