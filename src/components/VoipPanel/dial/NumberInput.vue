<template>
  <input
    v-model="calleeNumber"
    class="bg-stone-800 px-4 py-1 text-center outline-transparent focus:placeholder-transparent focus:outline-none"
    placeholder="Enter a phone number to call"
  />
</template>

<script setup lang="ts">
import useCallStore from "~/store/useCallStore";
import { storeToRefs } from "pinia";

const callStore = useCallStore();
const { calleeNumber } = storeToRefs(callStore);
</script>
