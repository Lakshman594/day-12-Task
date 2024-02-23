<template>
<div class="ml-52 mr-52">
    <div class="flex justify-center w-full mt-10 border-2 border-gray-600">

        <div class="grid grid-cols-2">
            <div>
                <img :src="`/images/iphone-${route.params.name}.jpg`" alt="">
            </div>
            <div class="text-center mt-32 mr-88">
                <h1 class="text-3xl mt-10">Iphone {{ name }}</h1>
                <button  @click="addToCart" class="p-3 bg-rose-900 text-white rounded-md mt-5 w-48 border-black-600 ">
                    
                    <span v-if="isincart()">Remove From Cart</span>
                    <span v-else>BuyNow</span>
                   
                
                
                </button>


            </div>

        </div>
    </div>
</div>
</template>
<script setup>
import { useRoute } from 'vue-router';



 const route = useRoute()

 const name = computed(() => {
    return route.params.name.replaceAll('-',' ');
 })

 useHead({
    title: `iphone ${route.params.name}`
 })

 const fullname = computed(() => {
    return `iphone-${route.params.name}`;
 })
 const cart = useCart();

 function isincart() {
   return  !!cart.value.find((ct) => ct.name === fullname.value);
 }
 
 function addToCart() {
    if(!isincart()){
            cart.value.push({name : fullname})
    }
    else{
        cart.value = cart.value.filter((ct) => ct.name !== fullname.value)
    }
 }





</script>