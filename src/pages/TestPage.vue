<template>
  <q-page class="column flex-center">

      <q-btn
        color="primary"
        dense
        label="Custom Event"
        @click="customEvent"
      />


  </q-page>
</template>

<script setup>
import {usermaven} from '../boot/usermaven-sdk';

const customEvent = () => {
  usermaven.track('customEvent', {
    customProperty: 'customValue'
  })
};
</script>
