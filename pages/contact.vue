<template>
  <div class='max-w-6xl mx-auto'>
			<div class='relative min-h-[40vh] flex items-center justify-end flex-col'>
				<h2 class='text-center text-4xl font-header mt-2'>
					<span>Contact</span>
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
					<p class='text-muted-foreground'>Contact</p>
				</div>
			</div>

			<div class='grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-6'>
				<div class='flex flex-col'>
					<h1 class='text-4xl font-header'>Contact Sammi</h1>
					<p class='mt-2 text-muted-foreground'>
						I am here to help and answer any question you might have. I look
						forward to hearing from you
					</p>

					<div class='mt-12 flex items-center gap-3'>
						<UIcon name="hugeicons:mail-02" />
						<p class='text-sm'>info@sammi.ac</p>
					</div>
					<div class='flex items-center gap-3 mt-2'>
						<UIcon name="hugeicons:call" />
						<p class='text-sm'>+98 02 296 4902</p>
					</div>
				</div>

				<div>
					<h1 class='text-4xl font-header mb-2'>Contact form</h1>
					<div class='flex flex-col space-y-3'>
						<UTextarea
							class='resize-none h-32'
							placeholder='Ask question or just say Hi'
						/>
						<UInput placeholder='Email address' />
						<UInput placeholder='Your name here' />
						<UButton class='w-fit' size="lg">
							<span>Send</span>
							<UIcon name="ic:round-send" />
						</UButton>
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
  title: "Contact | Dev Blogs"
})
</script>

<style scoped>

</style>