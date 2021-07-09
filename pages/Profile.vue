<template>
  <div>
    <div>
      <div class="bg-gray-900 w-full h-28"></div>
      <div
        class="
          absolute
          flex
          items-center
          rounded-full
          border-4 border-white
          bg-gray-300
          w-32
          h-32
          top-16
          left-10
          md:left-36
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="m-auto text-gray-400 h-24 w-24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
      <NuxtLink to="/ProfileEdit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute mt-4 right-14 h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </NuxtLink>
      <p class="font-bold text-2xl mx-8 mt-20 md:ml-36">Anna Prismalion</p>
      <div class="flex mx-6 md:mx-36">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-flex text-red-500 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clip-rule="evenodd"
          />
        </svg>
        <div class="inline-flex text-gray-500 mx-2 h-5">
          18 rue de La Place, 62000 Arras
        </div>
      </div>
      <div class="flex rounded border bg-gray-300 m-auto my-2 w-5/6"></div>
    </div>
    <div class="md:w-2/3 m-auto">
      <NuxtLink class="flex items-center mx-8 mt-10" to="/ComingSoon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mx-4 h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
          />
        </svg>
        <div class="font-bold">COVID-19 Safety Center</div>
      </NuxtLink>
      <NuxtLink class="flex relative items-center mx-8 mt-10" to="/ComingSoon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mx-4 h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
        <div class="font-bold">Restaurant Rewards</div>
        <span
          class="
            absolute
            items-center
            justify-self-end
            text-xs
            font-bold
            text-red-100
            bg-red-600
            rounded-full
            px-2
            py-1
            right-4
          "
          >SOON</span
        >
      </NuxtLink>
      <NuxtLink class="flex relative items-center mx-8 mt-10" to="/ComingSoon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mx-4 h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <div class="font-bold">Your Favorites</div>
        <span
          class="
            absolute
            items-center
            justify-self-end
            text-xs
            font-bold
            text-red-100
            bg-red-600
            rounded-full
            px-2
            py-1
            right-4
          "
          >SOON</span
        >
      </NuxtLink>
      <NuxtLink class="flex items-center mx-8 mt-10" to="/ComingSoon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mx-4 h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
        <div class="font-bold">Wallet</div>
      </NuxtLink>
      <NuxtLink class="flex items-center mx-8 mt-10" to="/ComingSoon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mx-4 h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2
            m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <div class="font-bold">Saved Places</div>
      </NuxtLink>
      <NuxtLink class="flex items-center mx-8 mt-10" to="/ComingSoon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mx-4 h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <div class="font-bold">Help</div>
      </NuxtLink>
      <NuxtLink class="flex items-center mx-8 mt-10" to="/ComingSoon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mx-4 h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        <div class="font-bold">Sign Out</div>
      </NuxtLink>
      <div class="h-32 bg-transparent"></div>
    </div>
  </div>
</template>
