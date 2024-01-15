<script setup lang="ts">
import { useBlockStore } from "./stores/blocks";
import { ref } from "vue";

const blocks = useBlockStore();

function createBlock(sideLength: number): void {
  blocks.createBlock(sideLength);
  currentSideLength.value = 0.0;
  toggleModal();
}

const showModal = ref(false);
function toggleModal(): void {
  showModal.value = !showModal.value;
}

const currentSideLength = ref(0.0);
</script>

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
    <div
      class="grid grid-cols-1 gap-0 w-full justify-items-center justify-center"
    >
      <div
        class="flex flex-col gap-6 justify-center bg-slate-900 mt-10 p-10 w-8/12 rounded-2xl"
      >
        <p class="text-white text-center text-3xl tracking-widest font-bold">
          Block Actions
        </p>
        <div class="flex flex-row gap-4 justify-center align-middle">
          <button
            class="btn btn-lg text-white font-bold rounded-xl bg-blue-950 hover:bg-blue-800 shadow-md shadow-blue-800"
            @click="toggleModal"
          >
            Create Block
          </button>

          <div
            class="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
          ></div>
          <button
            class="btn btn-lg text-white font-bold rounded-xl bg-red-950 hover:bg-red-800 shadow-md shadow-red-800"
          >
            Delete Block
          </button>
          <div
            class="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
          ></div>
          <button
            class="btn btn-lg text-white font-bold rounded-xl bg-green-950 hover:bg-green-800 shadow-md shadow-green-800"
          >
            Update Block
          </button>
          <div
            class="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
          ></div>
          <button
            class="btn btn-lg text-white font-bold rounded-xl bg-pink-950 hover:bg-pink-800 shadow-md shadow-pink-800"
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
        <p>Blocks: {{ blocks.blockList }}</p>
        <p>Number of blocks: {{ blocks.getNumberOfBlocks }}</p>
        <div class="grid grid-cols-12 gap-3">
          <div v-for="block in blocks.blockList" style="width: {{ block.sideLength }};" class="bg-green-500 rounded-lg text-black text-center">
            <p>{{ block.sideLength }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal" :class="{ 'modal-open': showModal }">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Let's create a box!</h3>
      <p class="py-4">Fill out the box features below and then click create.</p>
      <input
        type="number"
        placeholder="Side Length [m]"
        class="input input-bordered input-md input-success w-full text-lg font-light"
        v-model="currentSideLength"
      />
      <p>value is: {{ currentSideLength }}</p>
      <div class="modal-action">
        <button
          class="btn rounded-xl border-0 bg-teal-800 hover:bg-teal-700 shadow-md shadow-teal-700"
          @click="createBlock(currentSideLength)"
        >
          Create
        </button>
      </div>
    </div>
  </div>
</template>
