<template>
<q-page>
  <div class="q-mt-sm">
    <span class="q-ml-sm">Choose locale:</span>
    <LocaleSelector />
  </div>
  <div class="q-mt-sm">
    <a href="" @click.prevent="$router.go(-1)" class="q-ml-sm">{{ $t('back') }}</a>
  </div>
</q-page>
</template>

<script setup>
import LocaleSelector from 'src/components/LocaleSelector.vue';
</script>
