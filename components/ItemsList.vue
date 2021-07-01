<template>
  <div>
    <p class="font-bold text-2xl mx-8 mt-4">Items</p>
    <ItemsCard />
    <ItemsCard />
    <ItemsCard />
    <ItemsCard />
    <ItemsCard />
  </div>
</template>

<script>
import ItemsCard from '@/components/ItemsCard'

export default {
  components: {
    ItemsCard,
  },
}
</script>
