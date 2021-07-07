<template>
  <div>
    <p class="font-bold text-2xl mx-8 mt-4">Menus</p>
    <MenusCard @click.native="$emit('notify')" />
    <MenusCard @click.native="$emit('notify')" />
    <MenusCard @click.native="$emit('notify')" />
    <MenusCard @click.native="$emit('notify')" />
    <MenusCard @click.native="$emit('notify')" />
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
