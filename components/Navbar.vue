<script setup lang="ts">
import { SharedColorModeButton } from "#components";
import { navLinks } from "~/constants";
</script>

<template>
  <nav class="h-[10vh] px-5 fixed top-0 z-50 backdrop-blur-sm inset-0  ">
    <div
      class="container max-w-6xl mx-auto h-full w-full flex items-center justify-between"
    >
      <!-- logo -->
      <NuxtLink to="/">
        <h1 class="text-2xl font-bold font-header border px-3 py-1 border-primary text-primary">Dev Blogs</h1>
      </NuxtLink>

      <!-- nav links -->
      <div class="hidden md:flex items-center gap-2">
        <NuxtLink
          v-for="navLink in navLinks"
          :key="navLink.label"
          :to="navLink.route"
          class="hover:bg-blue-400/20 py-1 px-3 rounded-sm cursor-pointer transition-colors flex gap-1 items-center"
          active-class="bg-blue-400/20"
        >
          <UIcon :name="navLink.icon" class="text-primary text-lg" />
          <span> {{ navLink.label }}</span>
        </NuxtLink>
      </div>

      <!-- Search -->
       <div class="flex items-center gap-2">
         <SharedColorModeButton />
         <SharedSearchDrawer />
         <SharedDropdownMenu class="md:hidden" />
       </div>
    </div>
  </nav>
</template>
