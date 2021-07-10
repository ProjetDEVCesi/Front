<template>
  <div class="m-auto w-3/4">
    <BackButton />
    <div class="flex items-end mb-10 md:w-1/2 ml-10 md:mx-auto mt-4">
      <p class="font-bold text-2xl mx-8 mt-4">Profile Editor</p>
      <button class="rounded shadow w-10 h-10 mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-green-500 h-6 w-6 m-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
          />
        </svg>
      </button>
    </div>
    <form>
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
}
</script>
