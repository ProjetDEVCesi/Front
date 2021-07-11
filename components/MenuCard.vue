<template>
  <div>
    <div class="shadow rounded bg-white mx-1 my-2 p-4">
      <p class="font-bold">
        {{ menus }}
      </p>
      <p class="text-gray-400 text-xs my-4">
        Plat :
        {{ articles[0].plat }}
        <br>Accompagnement :
        {{ articles[0].Accompagnement }}
        <br>Boisson :
        {{ articles[0].Boisson }}
        <br>Dessert :
        {{ articles[0].Dessert }}
      </p>
      <p class="text-red-500 text-sm">
        € {{ price }}
      </p>
      <button @click="addToCart()">
        Ajouter au panier
      </button>
      <input v-model="quantity" type="number">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    menus: {
      type: String,
      required: true,
      default: () => ''
    },
    articles: {
      type: Array,
      required: true,
      default: () => []
    },
    price: {
      type: Number,
      required: true,
      default: () => 0
    }
  },
  data () {
    return { quantity: 0 }
  },
  methods: {
    addToCart () {
      this.$emit('addToCartParent', this.quantity)
    }
  }
}
</script>
