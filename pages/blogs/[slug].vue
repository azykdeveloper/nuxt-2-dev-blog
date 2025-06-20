<template>
  <div class="pt-[15vh] max-w-5xl mx-auto px-5">
    <h1 class="lg:text-6xl md:text-5xl text-4xl font-header">
      The AGI hype train is running out of steam
    </h1>

    <div class="flex items-center flex-wrap max-md:justify-center gap-4 mt-4">
      <div class="flex items-center gap-2">
        <NuxtImg
          src="/img/thomas-macaulay.jpg"
          alt="author"
          width="30"
          height="30"
          class="object-cover rounded-sm"
        />
        <p>by Samar</p>
      </div>
      <UIcon name="hugeicons:minus-sign" />
      <div class="flex items-center gap-2">
        <UIcon name="hugeicons:clock-01" />
        <p>01 min read</p>
      </div>
      <UIcon name="hugeicons:minus-sign" />
      <div class="flex items-center gap-2">
        <UIcon name="hugeicons:calendar-03" />
        <p>Dec 5, 2021</p>
      </div>
    </div>

    <NuxtImg
      src="/img/02.jpg"
      alt="alt"
      width="1120"
      height="595"
      class="mt-4 rounded-md"
    />

    <div class="flex md:gap-12 max-md:flex-col-reverse mt-12 relative">
      <div class="flex flex-col space-y-3">
        <div class="sticky top-36">
          <p class="text-lg uppercase text-muted">Share</p>
          <div
            class="flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4"
          >
            <UButton
              variant="outline"
              icon="hugeicons:new-twitter-rectangle"
              class="w-fit text-xl"
            />
            <UButton
              variant="outline"
              icon="hugeicons:facebook-01"
              class="w-fit text-xl"
            />
            <UButton
              variant="outline"
              icon="hugeicons:linkedin-01"
              class="w-fit text-xl"
            />
            <UButton
              variant="outline"
              icon="hugeicons:sent-02"
              class="w-fit text-xl"
            />
            <UButton
              variant="outline"
              icon="hugeicons:link-04"
              class="w-fit text-xl"
            />
          </div>
        </div>
      </div>
      <div class="flex-1 prose dark:prose-invert">
        <div v-html="content"></div>
      </div>
    </div>

    <div class="flex mt-6 gap-6 items-center max-md:flex-col">
      <NuxtImg
        src="/img/chris-impey.jpg"
        alt="author"
        width="155"
        height="155"
        class="rounded-md max-md:self-start"
      />
      <div class="flex-1 flex flex-col space-y-4">
        <h2 class="text-3xl font-header">Thomas Macaulay</h2>
        <p class="line-clamp-2 text-muted">
          Thomas Macaulay is a writer based in New York City. He is interested
          in all things tech, science, and photography related, and likes to
          yo-yo in
        </p>
        <NuxtLink
          href="/"
          class="flex items-center gap-2 hover:text-blue-500 underline transition-colors"
        >
          <span>See all posts by this author</span>
          <UIcon name="hugeicons:arrow-move-up-right" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { content } from '~/constants';

definePageMeta({
  layout: "default",
});

useHead({
  title: "Blogs | Dev Blogs",
});
</script>

<style lang="scss" scoped></style>
