<script setup lang="ts"></script>

<template>
  <div class="w-screen h-screen bg-slate-950">
    <p
      class="text-white text-center pt-10 bg-slate-900 text-6xl tracking-widest font-extrabold"
    >
      Welcome to Blocks
    </p>
    <p
      class="text-white text-center pt-2 pb-10 bg-slate-900 text-2xl tracking-widest font-bold"
    >
      Create, Delete, and Update your blocks
    </p>
    <div class="grid grid-cols-1 gap-0 w-full justify-items-center justify-center">
      <div
        class="flex flex-col gap-6 justify-center bg-slate-900 mt-10 p-10 w-8/12 rounded-2xl"
      >
        <p class="text-white text-center text-3xl tracking-widest font-bold">
          Block Actions
        </p>
        <div class="flex flex-row gap-4 justify-center">
          <button
            class="text-white font-bold py-6 px-6 rounded-xl bg-blue-950 hover:bg-blue-800 shadow-md shadow-blue-800"
          >
            Create Block
          </button>

          <div
            class="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
          ></div>
          <button
            class="text-white font-bold py-6 px-6 rounded-xl bg-red-950 hover:bg-red-800 shadow-md shadow-red-800"
          >
            Delete Block
          </button>
          <div
            class="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
          ></div>
          <button
            class="text-white font-bold py-6 px-6 rounded-xl bg-green-950 hover:bg-green-800 shadow-md shadow-green-800"
          >
            Update Block
          </button>
          <div
            class="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
          ></div>
          <button
            class="text-white font-bold py-6 px-6 rounded-xl bg-pink-950 hover:bg-pink-800 shadow-md shadow-pink-800"
          >
            Sync Blocks
          </button>
        </div>
      </div>
      <div
        class="flex flex-col gap-6 justify-center bg-slate-900 m-10 p-10 w-8/12 rounded-2xl"
      >
        <p class="text-white text-center text-3xl tracking-widest font-bold">
          Block Information
        </p>
      </div>
    </div>
  </div>
</template>
