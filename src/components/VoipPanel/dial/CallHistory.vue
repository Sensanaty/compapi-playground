<template>
  <a
    v-if="reversedHistory.length > 0"
    class="mb-4 ml-4 w-fit cursor-pointer select-none rounded-md font-bold underline decoration-transparent transition-colors hover:decoration-white active:text-neutral-300"
    @click.prevent="clearAllHistory"
  >
    Clear History
  </a>

  <p v-else class="mx-auto mt-8 font-bold">No Calls Made Yet</p>

  <div class="flex flex-col overflow-auto">
    <HistoryItem v-for="entry in reversedHistory" :key="entry.id" :item="entry" />
  </div>
</template>

<script setup lang="ts">
import HistoryItem from "~/components/VoipPanel/dial/HistoryItem.vue";
import useCallStore from "~/store/useCallStore";
import { storeToRefs } from "pinia";

const callStore = useCallStore();
const { reversedHistory } = storeToRefs(callStore);
const { clearAllHistory } = callStore;
</script>
