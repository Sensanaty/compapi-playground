<template>
  <button
    class="flex w-full truncate bg-emerald-500 px-4 py-1 font-bold text-black transition-colors hover:bg-emerald-600 active:bg-emerald-500"
    :class="{ '!bg-emerald-700': isDropdownOpen }"
    @click.prevent="isDropdownOpen = !isDropdownOpen"
  >
    <span class="mx-auto truncate">{{ activeChannel.number }} ({{ activeChannel.name }})</span>
  </button>

  <div class="relative flex flex-col">
    <div v-if="isDropdownOpen" class="absolute top-0 max-h-36 overflow-auto bg-stone-900">
      <button
        v-for="channel in allChannels"
        :key="channel.id"
        class="w-full border-y border-gray-500/20 bg-neutral-900 px-4 py-1.5 font-bold transition-colors first:border-t-0 last:border-b-2 hover:bg-neutral-950 active:bg-neutral-800"
        @click.prevent="switchToChannel(channel.id)"
      >
        <span class="flex flex-row items-center truncate">{{ channel.number }} ({{ channel.name }})</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";

import useChannelStore, { type Channel } from "~/store/useChannelStore";

const channelStore = useChannelStore();
const { activeChannel, allChannels } = storeToRefs(channelStore);
const { switchChannel } = channelStore;

const isDropdownOpen = ref(false);

const switchToChannel = (id: Channel["id"]) => {
  switchChannel(id);
  isDropdownOpen.value = false;
};
</script>
