<template>
  <div class="flex flex-col">
    <VoipPanel v-if="!isVoipPanelOpen" />
    <button
      class="mx-auto mt-4 w-fit rounded-md bg-emerald-700 px-2 py-3 font-bold leading-5 text-black"
      @click.prevent="isVoipPanelOpen = !isVoipPanelOpen"
    >
      {{ isVoipPanelOpen ? "Open" : "Close" }} Panel
    </button>
  </div>
</template>

<script setup lang="ts">
import useCallStore from "~/store/useCallStore";
import VoipPanel from "~/components/VoipPanel/VoipPanel.vue";
import { storeToRefs } from "pinia";

const callStore = useCallStore();
const { isVoipPanelOpen } = storeToRefs(callStore);
</script>
