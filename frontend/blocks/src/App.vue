<script setup lang="ts">
import { useBlockStore } from "./stores/blocks";

import { ref } from "vue";

const blocks = useBlockStore();

// Modal triggering for creating a block
const currentSideLength = ref(0.0);
const showModal = ref(false);
function toggleModal(): void {
  showModal.value = !showModal.value;
}
function createBlock(sideLength: number): void {
  blocks.createBlock(sideLength);
  currentSideLength.value = 0.0;
  toggleModal();
}

// Modal triggering for deleting a block
const currentBlockID = ref("");
const showDeleteBlockModal = ref(false);
function toggleDeleteBlockModal(): void {
  showDeleteBlockModal.value = !showDeleteBlockModal.value;
}
function deleteBlock(blockID: string): void {
  blocks.deleteBlock(blockID);
  currentBlockID.value = "";
  toggleDeleteBlockModal();
}

// Modal triggering for updating a block
const showUpdateBlockModal = ref(false);
const currentUpdateBlockID = ref("");
const currentUpdateBlockL = ref(0.0);
function toggleUpdateBlockModal(): void {
  showUpdateBlockModal.value = !showUpdateBlockModal.value;
}
function onChangeUpdateBlockSelection(e: Event): void {
  const blockID = (e.target as HTMLInputElement).value;
  const block = blocks.blockList.find((block) => block.id === blockID);
  if (block) {
    currentUpdateBlockL.value = block.sideLength;
  }
}
function updateBlock(blockID: string, blockSize: number): void {
  console.log(blockID, blockSize);
  blocks.updateBlock(blockID, blockSize);
  toggleUpdateBlockModal();
}
</script>

<template>
  <div class="w-screen h-full bg-slate-950">
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
        <div class="flex flex-row gap-6 justify-center align-middle">
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
            @click="toggleDeleteBlockModal"
          >
            Delete Block
          </button>
          <div
            class="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
          ></div>
          <button
            class="btn btn-lg text-white font-bold rounded-xl bg-green-950 hover:bg-green-800 shadow-md shadow-green-800"
            @click="toggleUpdateBlockModal"
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
        <p class="text-white text-center text-lg font-bold">
          Number of blocks: {{ blocks.getNumberOfBlocks }}
        </p>
        <div class="flex flex-row flex-wrap gap-3 justify-center">
          <div
            v-for="block in blocks.blockList"
            class="w-3/12 bg-green-500 rounded-lg text-center text-white text-sm p-10 shadow-md shadow-green-400 overflow-hidden"
          >
            <p>Block ID:</p>
            <p>{{ block.id }}</p>
            <hr class="my-2" />
            <p>SideLength: {{ block.sideLength }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal for creating blocks -->
  <div class="modal" :class="{ 'modal-open': showModal }">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Create a block!</h3>
      <p class="py-4">
        Fill out the block features below and then click create.
      </p>
      <input
        type="number"
        placeholder="Side Length [m]"
        class="input input-bordered input-md input-success w-full text-lg font-light"
        v-model="currentSideLength"
      />
      <!-- <p>value is: {{ currentSideLength }}</p> -->
      <div class="modal-action">
        <div class="flex flex-row gap-4">
          <button
            class="btn rounded-xl border-0 bg-teal-800 hover:bg-teal-700 shadow-md shadow-teal-700"
            @click="createBlock(currentSideLength)"
          >
            Create
          </button>
          <button
            class="btn rounded-xl border-0 bg-gray-800 hover:bg-gray-700 shadow-md shadow-gray-700"
            @click="toggleModal()"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal for deleting blocks -->
  <div class="modal" :class="{ 'modal-open': showDeleteBlockModal }">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Delete a block!</h3>
      <p class="py-4">Select a block and then click delete.</p>
      <input
        type="text"
        placeholder="Block ID"
        class="input input-bordered input-md input-success w-full text-lg font-light"
        v-model="currentBlockID"
      />
      <div class="modal-action">
        <div class="flex flex-row gap-4">
          <button
            class="btn rounded-xl border-0 bg-teal-800 hover:bg-teal-700 shadow-md shadow-teal-700"
            @click="deleteBlock(currentBlockID)"
          >
            Delete
          </button>
          <button
            class="btn rounded-xl border-0 bg-gray-800 hover:bg-gray-700 shadow-md shadow-gray-700"
            @click="toggleDeleteBlockModal()"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal for updating blocks -->
  <div class="modal" :class="{ 'modal-open': showUpdateBlockModal }">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Update a block!</h3>
      <p class="py-4">
        Select a block, update it's properties, and then click update.
      </p>
      <div class="flex flex-col gap-4">
        <label class="form-control w-full">
          <select
            class="select select-bordered select-success"
            v-model="currentUpdateBlockID"
            @change="onChangeUpdateBlockSelection($event)"
          >
            <option disabled selected>Pick a block</option>
            <option v-for="block in blocks.blockList">
              {{ block.id }}
            </option>
          </select>
        </label>
        <input
          type="number"
          placeholder="Side Length [m]"
          class="input input-bordered input-md input-success w-full text-lg font-light"
          v-model="currentUpdateBlockL"
        />
      </div>
      <div class="modal-action">
        <div class="flex flex-row gap-4">
          <button
            class="btn rounded-xl border-0 bg-teal-800 hover:bg-teal-700 shadow-md shadow-teal-700"
            @click="updateBlock(currentUpdateBlockID, currentUpdateBlockL)"
          >
            Update
          </button>
          <button
            class="btn rounded-xl border-0 bg-gray-800 hover:bg-gray-700 shadow-md shadow-gray-700"
            @click="toggleUpdateBlockModal()"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal for updating blocks -->
</template>
