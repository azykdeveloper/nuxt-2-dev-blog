<script setup lang="ts">
let activeInput = ref(false)
</script>

<template>
  <footer class="flex-center py-24 px-5 flex-col container max-w-2xl mx-auto space-y-12 ">
    <h2 class="text-4xl md:text-5xl font-header text-center">Get latest posts delivered right to your inbox</h2>

    <div class="grid max-md:grid-cols-1 grid-cols-3 md:gap-4 w-full">
      <UInput class="w-full col-span-2" placeholder="Enter your email" size="xl" @blur="activeInput = false" @focus="activeInput = true" />
      <UButton block class="col-span-1 max-md:mt-2" :variant="activeInput ? 'solid' : 'outline'" label="Join today" size="xl" />
    </div>
  </footer>
</template>

