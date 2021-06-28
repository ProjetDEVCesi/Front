<template>
  <div>
    <LoginForm />
    <div class="flex rounded bg-gray-300 m-auto my-4 w-5/6 h-1"></div>
    <RegisterForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'

export default {
  components: {
    LoginForm,
    RegisterForm,
  },
  layout: 'NoNav',
}
</script>
