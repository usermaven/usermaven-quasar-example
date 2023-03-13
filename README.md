# Usermaven SDK integration with Quasar v2 (app-vite)
> This guide will walk you through the steps to integrate the Usermaven SDK into your Quasar v2 project.

## Prerequisites
- Quasar v2 project setup
- Usermaven account and API key
- Basic knowledge of Vue.js and Quasar v2

## Installation
You can install the Usermaven SDK for JavaScript via npm:
```bash
yarn add @usermaven/sdk-js
# or
npm install @usermaven/sdk-js
```

## Integration
Follow these steps to integrate the Usermaven SDK into your Quasar v2 project:

1. Create a new file `usermaven-sdk.js` in the boot directory of your Quasar project.
2. Add the following code to the `usermaven-sdk.js` file:

```javascript
import { boot } from 'quasar/wrappers';
import { usermavenClient } from '@usermaven/sdk-js/dist/npm/usermaven.es';

const usermavenOpts = {
  key: 'YOUR_API_KEY',
  tracking_host: 'https://events.usermaven.com/',
  autocapture: true,
};

const usermaven = usermavenClient(usermavenOpts);

export default boot(async ({ app, router }) => {

  router.beforeEach((to, from, next) => {
    usermaven.track("pageview");
    next();
  });

  app.config.globalProperties.$usermaven = usermaven;
});

export {
  usermaven,
};
```

3. Replace YOUR_API_KEY with your actual Usermaven API key.
4. In the quasar.conf.js file, add usermaven-sdk to the boot property:

```javascript
module.exports = function (/* ctx */) {
  return {
    boot: [
      'usermaven-sdk'
    ],
    // ...
  }
}
```
5. In your Vue components, import the usermaven instance from usermaven-sdk.js and use its track method to send events to Usermaven:

```vue
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
import { usermaven } from '../boot/usermaven-sdk';

const customEvent = () => {
  usermaven.track('customEvent', {
    customProperty: 'customValue'
  })
};
</script>
```
That's it! You have successfully integrated the Usermaven SDK into your Quasar v2 project.

## Usage
Once you have integrated the Usermaven SDK, you can start tracking events. To track events, use the track method of the usermaven instance. For example:
```javascript
usermaven.track('eventName', {
  property1: 'value1',
  property2: 'value2',
});
```

The first parameter is the name of the event, and the second parameter is an object containing properties and values to be associated with the event.

For more information on how to use the Usermaven SDK, refer to the official documentation: https://usermaven.com/docs/integrations/npm-package


## Development

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
