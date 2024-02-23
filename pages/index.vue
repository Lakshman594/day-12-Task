<template>

 <div>
        <!-- <marquee behavior="" direction="" class="text-black p-2 text-center box-content">Iphone 15 pro Sale is on............</marquee> -->
    <div class="mt-10">

        <!-- <button @click="About"> About Page</button> -->
    
        <!-- <h1>Hii Index</h1> -->
    <div class="  flex h-52 ml-52 mr-52 ">
        <img  class="w-full h-96" src="/images/main1.jpg" alt="">
    </div>

    <!-- <div class="flex md:w-5/12 lg:8/12 mb-10 md:mb-0 ml-10 ">

        <img  class="w-96 mt-60 ml-56 flex"  src="/images/iphone151.webp" alt="">
        
    </div>
    <div class=" flex md:w-5/12 lg:w-4/12 lg:ml-20 mb-20 mt-4">
        <img src="/images/i15.jpeg" class="w-96 justify-end ml-96 h-64  flex " alt="">
    </div> -->

    

    </div>
    <div class=" h-10 bg-gray-200 mt-48 ml-52 mr-52 flex  justify-center text-center "> <h1 class="mt-2"> Which iPhone is right for you? click below</h1> </div>

    <div class="flex justify-center mt-10">
    <button @click="buy" class=" ml-52 mr-52 flex w-32 justify-center px-7 py-3 bg-gray-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-black-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out w-full" >Buy Iphone</button>
    </div>


    <div class=" grid grid-cols-4 gap-4 ml-52 mr-52 mt-10" @click="clickOn">
        <!-- <nuxt-link to="/iphone/iphone-12" class="shadow-lg text-center"> -->
            <div class="shadow-lg text-center"> 
            <h1>Iphone 12</h1>
            <div class="flex justify-center">
            <img  width="300" src="/images/iphone-12.jpg" alt="">
            </div>
            </div>
        

            <div class="shadow-lg text-center"> 
            <h1>Iphone 13</h1>
                <div class="flex justify-center">
               <img  width="300" src="/images/iphone-13.jpg" alt="">
           </div>
               
            </div>
       
   
            <div class="shadow-lg text-center"> 
               <h1>Iphone 14</h1>
               <div class="flex justify-center">
               <img  width="300" src="/images/iphone-14.jpg" alt="">
           </div>
               
            </div>
   
            <div class="shadow-lg text-center"> 
               <h1>Iphone 14 pro</h1>
           <div class="flex justify-center"> 
               <img  width="300" src="/images/iphone-14-pro.jpg" alt="">
           </div>
              
            </div>
  </div>
    
</div>
</template>

<script setup>

function About() {
    navigateTo('about')
}

function buy() {
    navigateTo('iphone')
}

function clickOn(){
    navigateTo("/iphone")
}
</script>

<style>

</style>