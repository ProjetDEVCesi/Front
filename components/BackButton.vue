<template>
  <button
    class="
      absolute
      flex
      items-center
      shadow
      rounded-full
      bg-white
      w-10
      h-10
      top-8
      left-10
    "
    @click="goBack"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="m-auto font-bold text-red-600 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  </button>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1)
    },
  },
}
</script>
