<template>
  <div class="container px-4">
    <div class="font-extrabold text-5xl text-center mt-52">
      DELIVER'<span class="text-red-600">EAT</span>
    </div>
    <div class="grid grid-rows-2 gap-2 place-items-center my-48">
      <NuxtLink
        class="shadow rounded bg-red-600 font-bold text-white py-1 w-20"
        to="/login"
      >
        Login
      </NuxtLink>
      <NuxtLink class="underline text-xs text-underline" to="/Register"
        >Create account</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  layout: 'NoNav',
}
</script>
