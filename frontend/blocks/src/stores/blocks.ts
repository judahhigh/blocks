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
    deleteBlock(blockID: string) {
      this.blockList = this.blockList.filter((block) => block.id !== blockID);
    },
    updateBlock(blockID: string, blockSize: number) {
      let blockIndex = -1;
      this.blockList.forEach((block, index) => {
        if (block.id === blockID) {
          blockIndex = index;
        }
      });
      console.log(blockIndex);
      console.log(this.blockList);
      if (blockIndex >= 0) {
        this.blockList.splice(blockIndex, 1, {
          id: blockID,
          sideLength: blockSize,
        });
        console.log(this.blockList);
      }
    },
  },
});

interface Block {
  id: string;
  sideLength: number;
}
