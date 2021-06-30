<template>
  <div>
    <div class="shadow-md flex justify-center items-center w-full h-28">
      <div class="font-bold text-3xl tracking-widest">ORDERS</div>
    </div>
    <OrderCard />
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
