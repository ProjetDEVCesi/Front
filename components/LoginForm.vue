<template>
  <div class="m-auto w-3/4">
    <Notification v-if="error" :message="error" />
    <label class="block text-2xl text-gray-700 text-sm font-bold mx-14 mt-8">
      Log <span class="text-red-500">In</span>
    </label>
    <form class="bg-white rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="logIn">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          id="username"
          v-model="email"
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          type="email"
          placeholder="Email"
          required
          name="email"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          id="password"
          v-model="password"
          class="
            shadow
            appearance-none
            border border-red-500
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            mb-3
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          type="password"
          placeholder="*******"
          name="password"
          required
        />
      </div>
      <div class="flex items-center">
        <button
          class="
            bg-red-500
            hover:bg-red-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            focus:outline-none focus:shadow-outline
          "
          type="submit"
        >
          Sign In
        </button>
        <NuxtLink
          class="
            bg-grey-500
            hover:bg-black-700
            text-black
            font-bold
            py-2
            px-4
            rounded
            focus:outline-none focus:shadow-outline
          "
          type="button"
          to="/Register"
        >
          Create account
        </NuxtLink>
      </div>
    </form>
  </div>
</template>
<script>
import Notification from '~/components/Notification'

export default {
  components: {
    Notification,
  },
  data() {
    return {
      email: '',
      password: '',
      prenom: '',
      nom: '',
      type: '',
      error: null,
    }
  },
  methods: {
    async logIn() {
      try {
        const a = await this.$axios.$post('http://localhost:8004/login', {
          email: this.email,
          password: this.password,
        })
        const newUser = {
          prenom: a.prenom,
          nom: a.nom,
          type: a.type,
          token: a.access_token,
        }
        this.$store.commit('changeUser', newUser)
        this.$store.commit('toggle')

        if (this.$store.state.user.type === 'utilisateur') {
          this.$router.push('/Home')
        } else if (this.$store.state.user.type === 'livreur') {
          this.$router.push('/CourrierHome')
        }
      } catch (error) {
        this.error = error
      }
    },
  },
}
</script>
