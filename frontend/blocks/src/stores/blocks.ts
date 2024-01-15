import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

interface State {
  blockList: Block[];
}

export const useBlockStore = defineStore("blocks", {
  state: (): State => {
    return {
      blockList: [],
    };
  },
  getters: {
    getNumberOfBlocks(): number {
      return this.blockList.length;
    },
  },
  actions: {
    createBlock(sideLength: number) {
      const block: Block = { id: uuidv4(), sideLength: sideLength };
      this.blockList.push(block);
    },
    removeBlock(blockId: string) {
      this.blockList = this.blockList.filter((block) => block.id !== blockId);
    },
  },
});

interface Block {
  id: string;
  sideLength: number;
}
