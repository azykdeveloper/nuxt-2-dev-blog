<script setup lang="ts">
import { getBlogs } from "~/service/blog.service";
import type { IBlog } from "~/types";

definePageMeta({
  layout: "default",
});

useHead({
  title: "Home | Dev Blog",
});

const blogs = ref<IBlog[]>([]);

onMounted(async () => {
  const result = (await getBlogs()) as { blogs: IBlog[] };
  blogs.value = result.blogs;
  console.log(result.blogs);
});
</script>

<template>
  <header class="max-w-6xl mx-auto">
    <div class="min-h-[60vh] relative flex items-center justify-center">
      <h1
        class="text-4xl font-black md:text-6xl font-header text-center max-w-2xl"
      >
        Taking control of your daily life is easy when you know how!
      </h1>
      <img class="wave" src="../public/img/header.svg" alt="" />
    </div>

    <p class="text-center text-4xl font-header font-extralight">Recent posts</p>

    <div class="flex flex-col space-y-24 mt-24">
      <NuxtLink
        v-for="blog in blogs"
        class="grid gap-4 grid-cols-1 md:grid-cols-2 group"
        :to="`/blogs/${blog.slug}`"
      >
        <div class="relative bg-secondary rounded-md">
          <NuxtImg
            width="650"
            height="335"
            :src="blog.image.url"
            alt="blog image"
            class="px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3"
          />
        </div>

        <div class="flex flex-col space-y-4">
          <!-- Time info -->
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2">
              <UIcon name="hugeicons:calendar-03" />
              <p>
                {{
                  new Date(blog.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                }}
              </p>
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
                  blog?.author?.image?.url
                    ? blog.author.image.url
                    : 'https://github.com/nuxt.png'
                "
                class="w-8 h-8 object-cover rounded-sm"
              />
              <p>by {{ blog?.author?.name }}</p>
            </div>

            <UIcon name="ci:dot-03-m" />

            <div class="flex items-center gap-2">
              <UBadge variant="soft" class="cursor-pointer">
                {{ blog?.category?.name }}
              </UBadge>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped>
.wave {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 0.1;
}
</style>
