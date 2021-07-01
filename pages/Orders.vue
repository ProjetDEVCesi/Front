<template>
  <div>
    <div class="shadow-md flex justify-center items-center w-full h-28">
      <div class="font-bold text-3xl tracking-widest">ORDERS</div>
    </div>
    <div class="md:w-2/3 m-auto">
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </div>
    <div class="h-32 bg-transparent"></div>
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
