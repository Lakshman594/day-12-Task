<template>
    <div class="container mx-auto mt-10">
      <h1 class="text-2xl font-semibold mb-4">Your Cart</h1>
      <div v-if="cart.length === 0" class="text-center">Your cart is empty.</div>
      <div v-else>
        <div v-for="(item, index) in cart" :key="index" class="border-b border-gray-300 mb-4 pb-4">
          <div class="flex items-center">
            <img :src="`/images/iphone-${route.params.name}.jpg`" alt="Product Image" class="w-24 h-24 mr-4">
            <div>
              <h2 class="text-lg font-semibold">{{ item.name }}</h2>
              <p>Price: ${{ item.price }}</p>
              <button @click="removeFromCart(index)" class="text-red-600 underline mt-2">Remove</button>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <button @click="checkout" class="bg-blue-500 text-white px-4 py-2 rounded">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const cart = useCart();


   const route = useRoute()

 const name = computed(() => {
    return route.params.name.replaceAll('-',' ');
 })

  
  function removeFromCart(index) {
    cart.value.splice(index, 1);
  }
  
  function checkout() {
    // Implement checkout logic, e.g., navigate to checkout page
  }
  </script>
  