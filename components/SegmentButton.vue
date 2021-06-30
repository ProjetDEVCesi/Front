<template>
  <div class="bg-gray-200 rounded-lg p-1 w-40">
    <div class="relative flex items-center">
      <!-- white sliding tab block -->
      <div
        class="
          absolute
          left-0
          inset-y-0
          w-1/2
          flex
          bg-red-500
          transition-all
          ease-in-out
          duration-200
          transform
          rounded-md
          shadow
        "
        :class="{
          'translate-x-0': selectedTab === 'segment1',
          'translate-x-full': selectedTab === 'segment2',
        }"
      ></div>

      <!-- clickable buttons -->
      <button
        class="
          relative
          flex-1 flex
          text-sm
          font-semibold
          capitalize
          items-center
          justify-center
          cursor-pointer
          m-px
          p-1
        "
        :disabled="selectedTab === 'segment1'"
        :class="{
          'text-white': selectedTab === 'segment1',
        }"
        @click=";(selectedTab = 'segment1'), $emit('notify')"
      >
        Log In
      </button>
      <button
        class="
          relative
          flex-1 flex
          text-sm
          font-semibold
          capitalize
          items-center
          justify-center
          cursor-pointer
          m-px
          p-px
        "
        :disabled="selectedTab === 'segment2'"
        :class="{
          'text-white': selectedTab === 'segment2',
        }"
        @click=";(selectedTab = 'segment2'), $emit('notify')"
      >
        Sign Up
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 'segment1',
    }
  },
}
</script>
