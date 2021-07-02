<template>
  <div>
    <NavBarManager />
    <Nuxt />
  </div>
</template>

<script>
import NavBarManager from '@/components/NavBarManager'

export default {
  components: {
    NavBarManager,
  },
}
</script>
