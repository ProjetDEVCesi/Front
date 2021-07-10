<template>
  <div class="m-auto w-3/4">
    <BackButton />
    <div class="flex items-end mb-10 md:w-1/2 ml-10 md:mx-auto mt-4">
      <p class="font-bold text-2xl mx-8 mt-4">Profile Editor</p>
    </div>
    <form @submit.prevent="editAccount">
      <div class="mb-4 md:w-1/2 m-auto">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          First Name
        </label>
        <input
          type="text"
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
          name="firstName"
          placeholder="First Name"
        />
      </div>
      <div class="mb-4 md:w-1/2 m-auto">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="lastName"
        >
          Last Name
        </label>
        <input
          type="text"
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
          name="lastName"
          placeholder="Last Name"
        />
      </div>
      <div class="mb-4 md:w-1/2 m-auto">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Mail
        </label>
        <input
          type="mail"
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
          name="mail"
          placeholder="Mail"
        />
      </div>
      <div class="mb-4 md:w-1/2 m-auto">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          New Password
        </label>
        <input
          type="password"
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
          name="newPass"
          placeholder="New Password"
        />
      </div>
      <div class="mb-4 md:w-1/2 m-auto">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="confirmNewPass"
        >
          Confirm New Password
        </label>
        <input
          type="password"
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
          name="confirmNewPass"
          placeholder="Confirm New Password"
        />
        <div class="flex">
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
              m-5
              item-center
              w-full
            "
            type="submit"
          >
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton'

export default {
  components: {
    BackButton,
  },
  layout: 'NoNav',
  middleware: ['user-auth'],
  // asyncData({ $axios }, callback) {
  //   $axios
  //     .get('http://localhost:8004/utilisateur-final/getAllRestaurants')
  //     .then((res) => {
  //       callback(null, { restaurants: res.data })
  //     })
  // },
  data() {
    return {
      prenom: '',
      nom: '',
      email: '',
      password: '',
      comfirmPassword: '',
    }
  },
  methods: {
    async editAccount() {
      if (this.password !== this.comfirmPassword) {
        return
      }
      if (this.nom === '' && this.email === '' && this.prenom === '') {
        return
      }
      await this.$axios.$post('http://localhost:8004/users/update', {
        prenom: this.prenom,
        nom: this.nom,
        email: this.email,
        password: this.password,
      })

      return this.$router.go(-1)
    },
  },
}
</script>
