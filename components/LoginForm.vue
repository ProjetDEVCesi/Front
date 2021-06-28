<template>
  <div class="m-auto w-3/4">
    <label class="block text-2xl text-gray-700 text-sm font-bold mx-14 mt-8">
      Log <span class="text-red-500">In</span>
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
          id="username"
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
          type="text"
          placeholder="Username"
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
          placeholder="******************"
        />
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
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
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>
