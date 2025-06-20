<template>
  <div class="max-w-6xl mx-auto">
    <div
      class="relative min-h-[40vh] flex items-center justify-end flex-col"
    >
      <h2 class="text-center text-4xl font-header">
        <span>Blogs</span>
      </h2>

      <div class="flex gap-1 items-center mt-4">
        <UIcon name="hugeicons:home-03" />
        <NuxtLink
          to="/"
          class="opacity-90 hover:underline hover:opacity-100"
        >
          Home
        </NuxtLink>
        <UIcon name="ci:dot-03-m" />
        <p class="text-muted">Blogs</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-24 mt-24">
      <NuxtLink
        v-for="blog in blogs"
        class="grid gap-4 grid-cols-1 group"
      >
        <div class="relative bg-secondary rounded-md">
          <NuxtImg
            width="650"
            height="335"
            :src="blog.image"
            alt="blog image"
            class="px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3"
          />
        </div>

        <div class="flex flex-col space-y-4">
          <!-- Time info -->
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2">
              <UIcon name="hugeicons:calendar-03" />
              <p>{{ blog.date }}</p>
            </div>
            <UIcon name="hugeicons:minus-sign" />
            <div class="flex items-center gap-2">
              <UIcon name="hugeicons:clock-01" />
              <p>01 min read</p>
            </div>
          </div>

          <!-- Title -->
          <h2
            class="text-3xl max-md:text-2xl font-header group-hover:text-blue-500 transition-colors"
          >
            {{ blog.title }}
          </h2>
          <p class="text-muted line-clamp-3">{{ blog.description }}</p>

          <!-- Author -->
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2">
              <NuxtImg
                :src="
                  blog.author.img
                    ? blog.author.img
                    : 'https://github.com/nuxt.png'
                "
                class="w-8 h-8 object-cover rounded-sm"
              />
              <p>by {{ blog.author.name }}</p>
            </div>

            <UIcon name="ci:dot-03-m" />

            <div class="flex items-center gap-2">
              <UBadge variant="soft" class="cursor-pointer">
                Machine Learning
              </UBadge>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { blogs } from "~/constants";

definePageMeta({
  layout: 'default'
})

useHead({
  title: "Blogs | Dev Blogs"
})
</script>
