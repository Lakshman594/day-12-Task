<template>
    <div>
       
        <nav class="bg-gray-700  shadow-lg p-3 text-white text-lg flex justify-between text-rose-900 ml-52 mr-52">
            <div class="w-10">
                <img class="w-25 h-9  ml-4 rounded-full"  src="/images/logo.webp" alt="">
            </div>
            <!-- <nuxt-link to="/about">About</nuxt-link>&nbsp; -->
        

            <div class="flex ml-5  justify-start ml-2 mr-52">
                <nuxt-link to="/" class="mr-5">Home</nuxt-link> &nbsp;
           
                <nuxt-link to="/iphone" class="mr-5">Iphones</nuxt-link>&nbsp;
               <nuxt-link to="/CartPage"><p>cart ({{cart.length }})</p></nuxt-link> 

                <!-- <p>page visit count: {{ pageVisitCount }}</p> -->
            </div>
           
          <div v-if="auth.isAuthenticated"  class="flex justify-end w-96 ml-96">
            <nuxt-link  to="/profile" class="mr-3 mt-1">Profile</nuxt-link>
            <button @click="logout">Logout</button>
          </div>

            <nuxt-link  v-else to="/login" class="flex justify-end w-96 ml-96">Login</nuxt-link>
            
            <!-- <p>{{auth.isAuthenticated }}</p> -->
        
        </nav>
    </div>  
</template>

<script setup>   

const cart = useCart()
const auth = useAuth()
const pageVisitCount = usePageVisitCount()

function logout (){
    auth.value.isAuthenticated = false;
    navigateTo('/login')
}

</script>