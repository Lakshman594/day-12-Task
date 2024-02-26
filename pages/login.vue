<template>
    <div class="flex h-screen w-full  mr-52 ">
        <div class="m-auto ">
            <section class="h-screen">
                <div class="flex justify-center items-center flex wrap h-full g-6  text-gray-800 ">
                    <div class="  md:w-4/12 lg:8/12 mb-10 md:mb-0 ml-10 ">

                        <img src="/images/login.jpg" class="w-full " alt="phone image ">


                    </div>
                    <div class="md:w-5/12 lg:w-4/12 lg:ml-20 mb-20">

                        <div v-if="_error">
                            <p class="bg-red-500 text-black-900 text-sm mb-3 w-32 p-3">{{ _error}}</p>

                        </div>
                        <form action="" @submit.prevent="onSubmit">
                            <div class="mb-6">

                                <input type="text" class="form-control block w-full px-4 py-2 text-xl font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non" placeholder="Email address" v-model="form.email">

                            </div>

                            <div class="mb-6">

                                <input type="password" class="form-control block w-full px-4 py-2 text-xl font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non" placeholder="Password" v-model="form.password">


                            </div>

                            <button   type="submit" class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" 
                               data-mdb-ripple="true"
                               data-mdb-ripple-color="light">

                               <span v-if="isLoading">Loading...</span>
                               <span v-else >SIGNIN</span>

                            </button>
                        </form>

                    </div>

                </div>

            </section>

        </div>

    </div>
</template>

<script setup >   

const url = "https://reqres.in/api/login";





const isLoading = ref(false)
const _error = ref(null);

const form = reactive( {
    email: "eve.holt@reqres.in",     
    password: "cityslicka"
})

 async function onSubmit(){

    

    if (isLoading.value) return;
    
    isLoading.value = true;


   const {data , error} =  await useFetch(url , {
    method:"post",
    body: form,
   });

    console.log(data.value);
   isLoading.value = false;
   if(error.value){
    _error.value = error.value.data.error;
    return;
   }
   
//    console.log(data.value , error.value.data);

const auth = useAuth()
auth.value.isAuthenticated = true
navigateTo('/')
}



</script>