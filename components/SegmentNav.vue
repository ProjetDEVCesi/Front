<template>
  <div class="bg-gray-200 rounded-lg h-10" style="padding: 2px">
    <div class="relative flex items-center">
      <!-- tab dividers -->
      <div class="absolute w-full">
        <div class="w-1/3 flex justify-between m-auto">
          <div
            class="
              h-5
              w-px
              bg-gray-400
              rounded-full
              opacity-0
              transition-opacity
              duration-100
              ease-in-out
            "
          ></div>
          <div
            class="
              h-5
              w-px
              bg-gray-400
              rounded-full
              opacity-0
              transition-opacity
              duration-100
              ease-in-out
            "
          ></div>
        </div>
      </div>

      <!-- red sliding tab block -->
      <div
        class="
          absolute
          left-0
          inset-y-8
          w-1/3
          flex
          bg-red-500
          transition-all
          ease-in-out
          duration-200
          transform
          h-1
        "
        :class="{
          'translate-x-0': selectedTab === 'segment1',
          'translate-x-full': selectedTab === 'segment2',
          'translate-x-fullx2': selectedTab === 'segment3',
        }"
      ></div>

      <!-- clickable buttons -->
      <div
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
          h-8
        "
        :disabled="selectedTab === 'segment1'"
        :class="{
          'text-gray-500': selectedTab !== 'segment1',
        }"
        @click="selectedTab = 'segment1'"
      >
        Overview
      </div>
      <div
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
          'text-gray-500': selectedTab !== 'segment2',
        }"
        @click="selectedTab = 'segment2'"
      >
        Menus
      </div>
      <div
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
        :disabled="selectedTab === 'segment3'"
        :class="{
          'text-gray-500': selectedTab !== 'segment3',
        }"
        @click="selectedTab = 'segment3'"
      >
        Items
      </div>
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
