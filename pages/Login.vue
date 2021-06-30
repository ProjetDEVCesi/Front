<template>
  <div>
    <SegmentButton class="mx-auto mt-20" @notify="show = !show" />
    <LoginForm v-if="!show" />
    <RegisterForm v-if="show" />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'
import SegmentButton from '@/components/SegmentButton'

export default {
  components: {
    LoginForm,
    RegisterForm,
    SegmentButton,
  },
  layout: 'NoNav',
  data() {
    return {
      show: false,
    }
  },
}
</script>
