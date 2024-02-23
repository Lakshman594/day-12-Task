<template>

    <main class="user bg-yellow-700 flex ml-52 mr-52  ">
    <article class="text-white">
        <p>Dashboard</p>
        <p>Setings</p>
    </article>
    <section>
    <slot/>
</section>
</main>
</template>

<style scoped>
  .sidebar{
    display: flex;
    flex-direction: column;
  }

  .user{
    display: flex;
    
  }


</style>