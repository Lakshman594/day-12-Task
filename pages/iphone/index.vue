<template>
    <div class=" grid grid-cols-4 gap-4 ml-52 mr-52 mt-10" >
        <nuxt-link to="/iphone/iphone-12" class="shadow-lg text-center">
            <h1>Iphone 12</h1>
            <div class="flex justify-center">
            <img  width="300" src="/images/iphone-12.jpg" alt="">
            </div>
            <p>
                Brand	Apple <br>
                Model Name	iPhone 12<br>
                Network Service Provider	Unlocked for All Carriers<br>
                Operating System	iOS 14<br>
                Cellular Technology	5G
            </p>
        </nuxt-link> 


        <nuxt-link to="/iphone/iphone-13" class="shadow-lg text-center">
         <h1>Iphone 13</h1>
             <div class="flex justify-center">
            <img  width="300" src="/images/iphone-13.jpg" alt="">
        </div>
            <p>
                Brand	Apple <br>
                Model Name	iPhone 13<br>
                Network Service Provider	Unlocked for All Carriers<br>
                Operating System	iOS 14<br>
                Cellular Technology	5G
            </p>
        </nuxt-link>
    

        <nuxt-link to="/iphone/iphone-14" class="shadow-lg text-center">
            <h1>Iphone 14</h1>
            <div class="flex justify-center">
            <img  width="300" src="/images/iphone-14.jpg" alt="">
        </div>
            <p>
                Brand	Apple <br>
                Model Name	iPhone 14<br>
                Network Service Provider	Unlocked for All Carriers<br>
                Operating System	iOS 15<br>
                Cellular Technology	5G
            </p>
        </nuxt-link>

        <nuxt-link to="/iphone/iphone-14-pro" class="shadow-lg text-center">
            <h1>Iphone 14 pro</h1>
        <div class="flex justify-center"> 
            <img  width="300" src="/images/iphone-14-pro.jpg" alt="">
        </div>
            <p>
                Brand	Apple <br>
                Model Name	iPhone 14 pro<br>
                Network Service Provider	Unlocked for All Carriers<br>
                Operating System	iOS 15<br>
                Cellular Technology	5G
            </p>
        </nuxt-link>
    </div>
</template>

<script setup>

// const {data } = useFetch("/api/iphones");
// console.log(data.value);


definePageMeta({
    middleware: ['auth'],
})


</script>
<style>


</style>