<template>
  <input
    v-model="calleeNumber"
    class="bg-stone-800 px-4 py-1 text-center outline-transparent focus:placeholder-transparent focus:outline-none disabled:cursor-not-allowed disabled:text-neutral-600"
    placeholder="Enter a phone number to call"
    :disabled="isCalling"
  />
</template>

<script setup lang="ts">
import useCallStore from "~/store/useCallStore";
import { storeToRefs } from "pinia";

const callStore = useCallStore();
const { calleeNumber, isCalling } = storeToRefs(callStore);
</script>
