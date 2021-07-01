<template>
  <div>
    <p class="font-bold text-2xl mx-8 mt-4">Menus</p>
    <MenusCard />
    <MenusCard />
    <MenusCard />
    <MenusCard />
    <MenusCard />
  </div>
</template>

<script>
import MenusCard from '@/components/MenusCard'

export default {
  components: {
    MenusCard,
  },
}
</script>
