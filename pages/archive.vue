<template>
		<div class='max-w-6xl mx-auto'>
			<div class='relative min-h-[40vh] flex items-center justify-end flex-col'>
				<p class='text-lg text-muted'>Showing posts from</p>
				<h2 class='text-center text-4xl font-header mt-2'>
					<span>Archive</span>
				</h2>

				<div class='flex gap-1 items-center mt-4'>
					<UIcon name="hugeicons:home-03" />
					<NuxtLink
						to="/"
						class='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</NuxtLink>
					<UIcon name="ci:dot-03-m" />
					<NuxtLink
						to="/blogs"
						class='opacity-90 hover:underline hover:opacity-100'
					>
						Blogs
					</NuxtLink>
					<UIcon name="ci:dot-03-m" />
					<p class='text-muted'>Archive</p>
				</div>
			</div>

			<div class='flex flex-col space-y-3 mt-8'>
				<div class='relative'>
					<span class='text-5xl font-header relative z-20'>2023</span>
					<!-- <Archive class='absolute w-16 h-16 -translate-x-4 -translate-y-12 opacity-10' /> -->
					<UIcon name="hugeicons:archive-02" class="absolute text-7xl -translate-x-22 -translate-y-10 opacity-10" />
				</div>
			</div>

			<div class='flex flex-col space-y-2 mt-8'>
				<div class='flex items-center gap-2 text-lg text-muted'>
					<p>15 Dec</p>
					<UIcon name="ci:dot-03-m" />
					<div class='hover:text-white hover:underline cursor-pointer'>
						The AGI hype train is running out of steam
					</div>
				</div>
				<div class='flex items-center gap-2 text-lg text-muted'>
					<p>05 Dec</p>
					<UIcon name="ci:dot-03-m" />
					<div class='hover:text-white hover:underline cursor-pointer'>
						The AGI hype train is running out of steam
					</div>
				</div>
			</div>
		</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useHead({
  title: "Archive | Dev Blogs"
})
</script>

<style scoped>

</style>