<template>
  <div>
    <div class="flex shadow-md w-full h-28">
      <button
        class="bg-gray-700 left-0 w-28 h-28"
        aria-label="Open Menu"
        @click="drawer"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="text-white m-auto w-8 h-8"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <div class="font-bold text-3xl tracking-widest m-auto">
        DELIVER'<span class="text-red-600">EAT</span>
      </div>
    </div>
    <aside
      class="
        transform
        text-white
        top-28
        left-0
        w-64
        bg-gray-700
        fixed
        h-full
        overflow-auto
        ease-in-out
        transistion-all
        z-30
      "
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <NuxtLink
        to="/"
        class="flex items-center p-4 hover:bg-red-500 hover:text-white"
        ><span class="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </span>
        <span class="font-bold ml-4">Home</span></NuxtLink
      >
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27 && this.isOpen) this.isOpen = false
    })
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
