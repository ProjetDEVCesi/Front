<template>
  <div class="m-auto w-3/4">
    <label class="block text-2xl text-gray-700 text-sm font-bold mx-14 mt-8">
      Sign <span class="text-red-500">Up</span>
    </label>
    <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
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
            ocus:outline-none
            focus:shadow-outline
          "
          name="username"
          placeholder="Username"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Email
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
            ocus:outline-none
            focus:shadow-outline
          "
          name="email"
          placeholder="Email"
        />
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Password
        </label>
      </div>
      <div class="mb-4">
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
            ocus:outline-none
            focus:shadow-outline
          "
          name="password"
          placeholder="Password"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Confirm Password
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
            ocus:outline-none
            focus:shadow-outline
          "
          name="confirm_password"
          placeholder="Confirm Password"
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
        type="button"
      >
        Sign Up
      </button>
    </form>
  </div>
</template>
