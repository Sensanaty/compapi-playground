import { defineStore } from "pinia";
import { ref } from "vue";

export type Channel = {
  id: number;
  name: string;
  number: string;
};

const useChannelStore = defineStore("channel", () => {
  const activeChannel = ref<Channel>({ id: 0, name: "Example Channel", number: "+1234567890" });

  const allChannels = ref<Channel[]>([
    { id: 1, name: "Primary", number: "+31612632764" },
    { id: 2, name: "Secondary", number: "+31908643821" },
    { id: 3, name: "WhatsApp Deboise", number: "+31877632123" },
  ]);

  function switchChannel(channelId: Channel["id"]) {
    const channel = allChannels.value.find(({ id }) => id === channelId);

    if (channel) {
      activeChannel.value = channel;
    }
  }

  return {
    // State
    activeChannel,
    allChannels,

    // Methods
    switchChannel,
  };
});

export default useChannelStore;
