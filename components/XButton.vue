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
        d="M6 18L18 6M6 6l12 12"
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
