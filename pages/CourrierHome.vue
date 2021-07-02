<template>
  <div class="md:w-2/3 m-auto">
    <div class="px-10 pt-6">
      <p class="text-2xl">Hello <span class="font-bold">User</span> !</p>
      <div class="text-gray-500">You are Online</div>
    </div>
    <div class="flex rounded border bg-gray-300 m-auto my-2 w-5/6"></div>
    <CourrierOrderCard />
    <CourrierOrderCard />
    <CourrierOrderCard />
    <CourrierOrderCard />
  </div>
</template>

<script>
import CourrierOrderCard from '@/components/CourrierOrderCard'

export default {
  components: {
    CourrierOrderCard,
  },
  layout: 'NavCourrier',
}
</script>
