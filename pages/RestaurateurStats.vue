<template>
  <div>
    <div class="shadow-md flex justify-center items-center w-full h-28">
      <div class="font-bold text-3xl tracking-widest">Restaurateur Stats</div>
    </div>
    <div>
      <div>
        <Stats1Card />
      </div>
    </div>
    <div class="h-32 bg-transparent"></div>
  </div>
</template>

<script>
import Stats1Card from '@/components/Stats1Card'

export default {
  components: {
    Stats1Card,
  },
  middleware: ['user-auth', 'utilisateur'],
  props: {
    data() {
      return {
        stats: [],
      }
    },
  },
}
</script>

<style></style>
