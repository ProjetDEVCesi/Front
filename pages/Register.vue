<template>
  <div>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm'

export default {
  components: {
    RegisterForm,
  },
  layout: 'NoNav',
  data() {
    return {
      show: false,
    }
  },
}
</script>
