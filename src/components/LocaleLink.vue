<template>
<router-link :to="`/${$i18n.locale}${to}`"><slot></slot></router-link>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  to: String,
});
const { to } = toRefs(props);
</script>
