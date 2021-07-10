<template>
  <div class="m-auto w-3/4">
    <label class="block text-2xl text-gray-700 text-sm font-bold mx-14 mt-8">
      Sign <span class="text-red-500">Up</span>
    </label>
    <form class="bg-white rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="firstName"
        >
          First Name
        </label>
        <input
          v-model="firstName"
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
          required
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="lastName"
        >
          Last Name
        </label>
        <input
          v-model="lastName"
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
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          v-model="email"
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
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          v-model="password"
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
          name="password"
          placeholder="Password"
          required
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="confirm_password"
        >
          Confirm Password
        </label>
        <input
          v-model="confirm_password"
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
          name="confirm_password"
          placeholder="Confirm Password"
          required
        />
      </div>
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
        Create Account
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
        to="/Login"
      >
        Already have an account ?
      </NuxtLink>
    </form>
  </div>
</template>
