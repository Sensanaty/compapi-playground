<template>
  <ChannelSelector />
  <NumberInput />
  <KeyPad />
</template>

<script setup lang="ts">
import ChannelSelector from "~/components/VoipPanel/ChannelSelector.vue";
import NumberInput from "~/components/VoipPanel/dial/NumberInput.vue";
import KeyPad from "~/components/VoipPanel/dial/KeyPad.vue";
</script>
