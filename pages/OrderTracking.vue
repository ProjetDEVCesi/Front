<template>
  <div>
    <label class="block text-2xl text-gray-700 text-sm font-bold mx-14 mt-8">
      Orders
    </label>
    <ClientOrderCard />
    <ClientOrderCard />
    <ClientOrderCard />
    <ClientOrderCard />
  </div>
</template>

<script>
import ClientOrderCard from '@/components/ClientOrderCard'

export default {
  components: {
    ClientOrderCard,
  },
  layout: 'NavDesktop',
}
</script>
