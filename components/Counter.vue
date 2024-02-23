<template>
    <br>
    <button  @click="increment">increment </button>
 <p>{{ count }}</p>
 <button @click="decrement">decrement </button>

 

</template>

<script setup lang="ts">

const count = ref(0);

function increment(){
  count.value++;
  console.log("increment")
}

function decrement(){
  count.value--;
  console.log("decrement")

}

</script>