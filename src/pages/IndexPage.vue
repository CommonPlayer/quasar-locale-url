<template>
<q-page>
  <div class="q-mt-sm">
    <span class="q-ml-sm">Choose locale:</span>
    <LocaleSelector />
  </div>
  <div class="q-mt-sm">
    <span class="q-ml-sm">Locale link:</span>
    <LocaleLink to="/test" class="q-ml-sm">Go to test page</LocaleLink>
  </div>
  <div class="q-mt-sm">
    <span class="q-ml-sm">Current locale: {{ $i18n.locale }}</span>
  </div>
  <div class="q-mt-sm">
    <span class="q-ml-sm">Translated text: {{ $t('test') }}</span>
  </div>
</q-page>
</template>

<script setup>
import LocaleLink from 'src/components/LocaleLink.vue';
import LocaleSelector from 'src/components/LocaleSelector.vue';
</script>
