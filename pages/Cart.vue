<template>
  <div>
    <div class="shadow-md flex justify-center items-center w-full h-28">
      <div class="font-bold text-3xl tracking-widest">Cart</div>
    </div>
    <div v-for="product in products" :key="product.id">
      <div>
        <CartCard
          :price="product.price"
          :status="product.status"
          :items="product.items"
        />
      </div>
    </div>
    <div class="h-32 bg-transparent"></div>
  </div>
</template>
