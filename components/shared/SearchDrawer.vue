<script setup lang="ts">
import { categories, tags } from '~/constants';

const term = ref<string>("");
</script>

<template>
  <UDrawer>
    <UButton
      color="neutral"
      variant="subtle"
      trailing-icon="hugeicons:search-01"
      size="xl"
    />
    <template #content>
      <div class="w-full max-w-3xl mx-auto py-10 px-5">
        <UInput
          :avatar="{
            src: 'https://github.com/nuxt.png',
          }"
          variant="outline"
          placeholder="Search..."
          class="w-full"
          v-model="term"
          size="xl"
        />

        <h3 class="mt-3 text-xl font-header">See posts by categories:</h3>
        <div class="flex gap-2 mt-1">
          <UBadge v-for="category in categories" :key="category.slug" variant="soft" class=" cursor-pointer">{{ category.name }}</UBadge>
          
        </div>

        <h3 class="mt-3 text-xl font-header">See posts by tags</h3>
        <div class="flex gap-2 mt-1">
          <UBadge v-for="tag in tags" :key="tag.slug" variant="soft" class=" cursor-pointer">{{ tag.name }}</UBadge>
        </div>
      </div>
    </template>
  </UDrawer>
</template>
