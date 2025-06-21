<template>
  <div class="pt-[15vh] max-w-5xl mx-auto px-5">
    <h1 class="lg:text-6xl md:text-5xl text-4xl font-header">
      {{ blog?.title }}
    </h1>

    <div class="flex items-center flex-wrap max-md:justify-center gap-4 mt-4">
      <div class="flex items-center gap-2">
        <NuxtImg
          :src="blog?.author.image.url"
          alt="author"
          width="30"
          height="30"
          class="object-cover rounded-sm"
        />
        <p>by {{ blog?.author.name }}</p>
      </div>
      <UIcon name="hugeicons:minus-sign" />
      <div class="flex items-center gap-2">
        <UIcon name="hugeicons:clock-01" />
        <p>01 min read</p>
      </div>
      <UIcon name="hugeicons:minus-sign" />
      <div class="flex items-center gap-2">
        <UIcon name="hugeicons:calendar-03" />
        <p v-if="blog?.createdAt">{{ new Date(blog.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric"}) }}</p>
        <p v-else>-</p>
      </div>
    </div>

    <NuxtImg
      :src="blog?.image.url"
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
        <div v-html="blog?.content.html"></div>
      </div>
    </div>

    <div class="flex mt-6 gap-6 items-center max-md:flex-col">
      <NuxtImg
        :src="blog?.author.image.url"
        alt="author"
        width="155"
        height="155"
        class="rounded-md max-md:self-start"
      />
      <div class="flex-1 flex flex-col space-y-4">
        <h2 class="text-3xl font-header">{{ blog?.author.name }}</h2>
        <p class="line-clamp-2 text-muted">
          {{ blog?.author.bio }}
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

<script setup lang="ts">
import { getBlog } from '~/service/blog.service';
import type { IBlog } from '~/types';
const route = useRoute();

definePageMeta({
  layout: "default",
});

useHead({
  title: "Blogs | Dev Blogs",
});

const blog = ref<IBlog>();

onMounted(async () => {
  const result = await getBlog(route.params.slug as string) as { blog: IBlog };
  blog.value = result.blog;
  console.log(result.blog);
});
</script>


<style lang="scss" scoped></style>
