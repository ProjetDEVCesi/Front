<template>
  <div>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  components: {
    LoginForm,
  },
  layout: 'NoNav',
  data() {
    return {
      show: false,
    }
  },
}
</script>
