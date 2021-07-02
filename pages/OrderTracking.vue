<template>
  <div>
    <label class="block text-2xl text-gray-700 text-sm font-bold mx-14 mt-8">
      Orders
    </label>
    <div class="md:w-2/3 m-auto">
      <ClientOrderCard />
      <ClientOrderCard />
      <ClientOrderCard />
      <ClientOrderCard />
    </div>
  </div>
</template>

<script>
import ClientOrderCard from '@/components/ClientOrderCard'

export default {
  components: {
    ClientOrderCard,
  },
  layout: 'NavManager',
}
</script>
