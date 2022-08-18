<template>
<router-link
  v-for="locale in $i18n.availableLocales"
  :key="'locale_' + locale"
  :to="route.fullPath.replace(/^\/[\w-]+/, '/' + locale)"
  class="q-ml-sm"
>
  {{ locale }}
</router-link>
</template>

<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const route = useRoute();
const i18n = useI18n();
watch(() => route.fullPath, () => {
  i18n.locale.value = route.params.locale;
});
</script>
