<template>
  <div class="flex flex-col items-center px-4 py-6">
    <div v-for="(row, rowIndex) in buttons" :key="rowIndex" class="mb-4 flex w-full flex-row justify-around">
      <button
        v-for="(col, colIndex) in row"
        :key="colIndex"
        class="grid h-[4rem] w-[4rem] grid-rows-2 flex-col rounded-full border border-gray-300/10 p-2 transition-colors hover:bg-neutral-900 active:bg-neutral-700 disabled:cursor-not-allowed disabled:border-transparent disabled:bg-transparent"
        :disabled="isCalling"
        @click.prevent="dialNumber(col.number)"
      >
        <span class="text-lg font-bold">{{ col.number }}</span>
        <span class="mt-auto text-[0.7rem] text-neutral-400">{{ col.extra }}</span>
      </button>
    </div>

    <button
      class="rounded-full bg-green-600 p-3.5 transition-colors hover:bg-green-700 active:bg-green-500"
      :class="{ 'bg-red-600 hover:bg-red-700 active:bg-red-500': isCalling }"
      @click.prevent="callOrHangup"
    >
      <PhPhone v-if="!isCalling" size="1.75rem" weight="fill" />
      <PhPhoneSlash v-else size="1.75rem" weight="fill" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { PhPhone, PhPhoneSlash } from "@phosphor-icons/vue";
import useCallStore from "~/store/useCallStore";
import { storeToRefs } from "pinia";

export type PadButton = {
  number: number | "*" | "#";
  extra: string;
};

const callStore = useCallStore();
const { initiateCall, endCall } = callStore;
const { calleeNumber, isCalling } = storeToRefs(callStore);

const dialNumber = (number: PadButton["number"]) => (calleeNumber.value += String(number));

function callOrHangup() {
  !isCalling.value ? initiateCall() : endCall();
}

const buttons = [
  [
    { number: 1, extra: "" },
    { number: 2, extra: "ABC" },
    { number: 3, extra: "DEF" },
  ],
  [
    { number: 4, extra: "GHI" },
    { number: 5, extra: "JKL" },
    { number: 6, extra: "MNO" },
  ],
  [
    { number: 7, extra: "PQRS" },
    { number: 8, extra: "TUV" },
    { number: 9, extra: "WXYZ" },
  ],
  [
    { number: "*", extra: "" },
    { number: 0, extra: "+" },
    { number: "#", extra: "" },
  ],
] as Array<PadButton[]>;
</script>
