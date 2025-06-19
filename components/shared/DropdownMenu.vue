<script setup lang="ts">
import { navLinks } from '~/constants';

const handleItemClick = (label: string) => {
  switch (label) {
    case 'Home':
      navigateTo('/')
      break;
    case 'About':
      navigateTo('/about')
      break;
    case 'Blogs':
      navigateTo('/blogs')
      break;
    case 'Archive':
      navigateTo('/archive')
      break;
    case 'Contact':
      navigateTo('/contact')
      break;
    default:
      console.log('Unknown action')
  }
}

</script>

<template>
  <UDropdownMenu
    :items="navLinks"
    :content="{
      align: 'end',
      side: 'bottom',
      sideOffset: 8
    }"
    :ui="{
      content: 'w-48'
    }"
  >
    <UButton icon="i-lucide-menu" color="neutral" variant="subtle" size="xl" />

    <!-- SLOT for custom item click behavior -->
    <template #item="{ item }">
      <!-- <UButton
        color="neutral"
        variant="ghost"
        class="w-full justify-start"
        :icon="item.icon"
        :label="item.label"
        @click="handleItemClick(item.label)"
      /> -->

      <NuxtLink
          :to="item.route"
          class="hover:bg-blue-400/20 py-1 px-3 rounded-sm cursor-pointer transition-colors flex gap-1 items-center w-full"
          active-class="bg-blue-400/20"
        >
          <UIcon :name="item.icon" class="text-primary text-lg" />
          <span> {{ item.label }}</span>
        </NuxtLink>
    </template>
  </UDropdownMenu>
</template>
