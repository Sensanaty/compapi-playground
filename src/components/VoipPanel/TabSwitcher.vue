<template>
  <div class="container grid w-full py-2.5">
    <button class="close mx-auto w-fit text-white transition-colors hover:text-gray-400 active:text-gray-500" @click.prevent="isVoipPanelOpen = false">
      <PhX weight="fill" size="2rem" />
    </button>

    <div class="nav mx-auto flex w-fit flex-row items-center rounded-md bg-white p-1">
      <button
        class="navButton"
        :class="{ '!bg-gray-300': activeVoipTab === 'dial' }"
        @click.prevent="switchVoipTab('dial')"
      >
        <PhHash size="1.25rem" />
      </button>

      <button
        class="navButton"
        :class="{ '!bg-gray-300': activeVoipTab === 'history' }"
        @click.prevent="switchVoipTab('history')"
      >
        <PhClockCounterClockwise size="1.25rem" />
      </button>
    </div>

    <span
      v-if="isCalling"
      class="blinker m-auto h-0 w-0 cursor-pointer rounded-full bg-emerald-300 p-1.5 focus:outline-none"
      @click.prevent="switchVoipTab('dial')"
    />
  </div>
</template>

<script setup lang="ts">
import { PhHash, PhClockCounterClockwise, PhX } from "@phosphor-icons/vue";
import useCallStore from "~/store/useCallStore";
import { storeToRefs } from "pinia";

const callStore = useCallStore();
const { activeVoipTab, isCalling, isVoipPanelOpen } = storeToRefs(callStore);
const { switchVoipTab } = callStore;
</script>

<style scoped>
.navButton {
  @apply text-black mx-1.5 hover:bg-gray-200 rounded p-0.5 transition-colors;
}

.container { grid-template-columns: [close] 1fr [nav] 6fr [blinker] 1fr }
.close { grid-area: close }
.nav { grid-area: nav }

.blinker {
  grid-area: blinker;
  animation: blinker 1000ms step-start infinite;
}

@keyframes blinker {
  50% { opacity: 0 }
}
</style>
