<template>
  <div>
    <p class="font-bold text-2xl mx-8 mt-4">Menu Editor</p>
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
          placeholder="Menu"
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
      <div class="bg-white mx-1 my-2 p-4">
        <label>
          <span class="font-bold text-gray-700">Select</span>
          <select class="form-select border block w-full mt-1">
            <option>Select</option>
            <option>Radio</option>
            <option>Checkbox</option>
            <option>Radio</option>
          </select>
        </label>
        <div
          class="
            grid
            auto-rows-max
            justify-items-end justify-content-end
            bg-gray-100
          "
        >
          <div
            v-for="(input, index) in options"
            :key="`optionInput-${index}`"
            class="flex items-center w-5/6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class="ml-2 cursor-pointer"
              @click="addField(input, options)"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="green"
                d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
              />
            </svg>
            <svg
              v-show="options.length > 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class="ml-2 cursor-pointer"
              @click="removeField(index, options)"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="#EC4899"
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
              />
            </svg>
            <input
              type="text"
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                ml-2
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              name="taxRate"
              placeholder="Option"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{ option: '' }],
    }
  },
  methods: {
    addField(value, fieldType) {
      fieldType.push({ value: '' })
    },
    removeField(index, fieldType) {
      fieldType.splice(index, 1)
    },
  },
}
</script>
