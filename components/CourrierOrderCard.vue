<template>
  <div>
    <div class="w-full px-5 my-4">
      <div class="grid grid-cols-5 grid-rows-2 gap-1 w-4/5">
        <p class="row-span-2 text-red-500 font-semibold">
          {{ customers.Prenom + ' ' + customers.nom }}
        </p>
        <p class="col-span-2 text-sm">{{ restaurantName }}</p>
        <p class="col-span-2 text-sm">8:30pm - 8:45pm</p>
        <p class="col-span-2 text-gray-400 text-xs">1 rue Baudimont</p>
        <p class="col-span-2 text-gray-400 text-xs">18 rue de La Place</p>
      </div>
      <div class="flex items-center w-1/2 p-2">
        <div class="border rounded-full bg-green-500 mx-5 h-5 w-5"></div>
        <p class="text-sm">{{ status }}</p>
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
        "
      >
        Accepter la livraison
      </button>
      <button
        class="
          bg-red-500
          hover:bg-red-700
          text-white
          font-bold
          py-2
          px-4
          rounded
        "
      >
        Refuser la livraison
      </button>
    </div>
    <div class="flex rounded border bg-gray-300 m-auto my-2 w-full"></div>
  </div>
</template>

<script>
export default {
  props: {
    customer: {
      type: Number,
      required: true,
      default: () => 1,
    },
    status: {
      type: String,
      required: true,
      default: () => 'Status indisponible',
    },
    restaurantName: {
      type: String,
      required: true,
      default: () => 'Nom du restaurant indisponible',
    },
    commandeId: {
      type: String,
      required: true,
      default: () => undefined,
    },
  },
  data() {
    return {
      commandes: [],
      customers: {},
    }
  },
  async fetch() {
    const result = await this.$axios.$post(
      'http://localhost:8004/users/findById',
      {
        id: this.customer,
      }
    )
    this.customers = result
  },
}
</script>
