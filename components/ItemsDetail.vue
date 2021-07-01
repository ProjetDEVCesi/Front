<template>
  <div>
    <p class="font-bold text-2xl mx-8 mt-4">Item Editor</p>
    <form>
      <div class="flex justify-between p-4">
        <input
          type="text"
          class="
            shadow
            appearance-none
            border
            rounded
            w-2/3
            py-2
            px-3
            text-gray-700
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          name="item"
          placeholder="Item"
        />
        <div class="flex justify-around w-1/4">
          <button class="rounded shadow w-10 h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-red-500 h-6 w-6 m-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          <button class="rounded shadow w-10 h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 m-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
          <button class="rounded shadow w-10 h-10">
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
      </div>
      <div class="flex rounded border bg-gray-300 m-auto my-2 w-5/6"></div>
      <div class="mx-1 my-2 p-4">
        <label class="font-semibold text-gray-700">
          Description
          <span class="font-normal text-xs">(optional)</span>
        </label>
        <textarea
          class="form-textarea border mt-1 block w-full"
          rows="4"
          placeholder="Enter some long form content."
        >
        </textarea>
      </div>
      <div class="flex mx-1 my-2 p-4">
        <div>
          <label class="font-semibold text-gray-700"> Default Price </label>
          <input
            type="text"
            class="
              shadow
              appearance-none
              border
              rounded
              w-5/6
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            name="defaultPrice"
            placeholder="€"
          />
        </div>
        <div>
          <label class="font-semibold text-gray-700"> Tax Rate </label>
          <input
            type="text"
            class="
              shadow
              appearance-none
              border
              rounded
              w-5/6
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            name="taxRate"
            placeholder="%"
          />
        </div>
      </div>
      <div class="flex items center mx-1 my-2 p-4">
        <label class="font-semibold text-gray-700">
          Item out of stocks ?
        </label>
        <label for="toggleB" class="flex items-center cursor-pointer mx-10">
          <div class="relative">
            <input id="toggleB" type="checkbox" class="sr-only" />
            <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div
              class="
                dot
                absolute
                left-1
                top-1
                bg-white
                w-6
                h-6
                rounded-full
                transition
              "
            ></div>
          </div>
        </label>
      </div>
    </form>
  </div>
</template>

<style>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #c83142;
}
</style>
