<template>
  <div className="max-w-6xl mx-auto">
    <div
      className="relative min-h-[40vh] flex items-center justify-center flex-col"
    >
      <h2 className="text-center text-4xl font-header">
        <span>About</span>
      </h2>

      <div className="flex gap-1 items-center mt-4">
        <UIcon name="hugeicons:home-03" />
        <NuxtLink
          to="/"
          className="opacity-90 hover:underline hover:opacity-100"
        >
          Home
        </NuxtLink>
        <UIcon name="ci:dot-03-m" />
        <p className="text-muted-foreground">About</p>
      </div>
    </div>
    <h1 className="text-center text-4xl font-header">
      We are the Sammi, <br />
      Team of content writers and designers.
    </h1>

    <div className="grid grid-cols-4 gap-4 min-h-96 mt-6">
      <div className="col-span-2 max-md:col-span-4 relative h-80">
        <NuxtImg
          src="/img/a1.jpg"
          alt="about"
          fill
          className="rounded-md object-cover w-full"
        />
      </div>
      <div className="h-80 self-end relative max-md:col-span-2 max-md:h-72">
        <NuxtImg
          src="/img/a2.jpg"
          alt="about"
          fill
          className="rounded-md object-cover w-full"
        />
      </div>
      <div className="relative h-80 max-md:col-span-2 max-md:mb-8 max-md:h-72">
        <NuxtImg
          src="/img/a3.jpg"
          alt="about"
          fill
          className="rounded-md object-cover w-full"
        />
      </div>
    </div>

    <div
      className="max-w-6xl mx-auto mt-12 flex flex-col text-center space-y-4 text-muted-foreground"
    >
      <p>
        If ever a place existed where you could just go crazy creatively, it is
        definitely your about page. It’s your chance to show your readers who
        you really are. Pictures, quotes, inspirational graphics, whatever it is
        that drives you.. Display it here in a way that only you can.
      </p>
      <p>
        I’ve included a plugin in the setup of this theme that will make adding
        columns to your pages and posts a piece of cake. Let creativity take
        control, and forget about the technical end of things, I’ve got your
        six.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
