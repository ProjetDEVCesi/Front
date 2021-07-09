<template>
  <div class="flex items-center h-screen w-full">
    <div class="text-3xl font-bold m-auto">
      <XButton />
      Coming <span class="text-red-600">Soon</span>
    </div>
  </div>
</template>

<script>
import XButton from '@/components/XButton'

export default {
  components: {
    XButton,
  },
  layout: 'NoNav',
  middleware: ['user-auth'],
}
</script>
