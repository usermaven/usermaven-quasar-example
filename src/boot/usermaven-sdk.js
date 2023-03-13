import { boot } from 'quasar/wrappers';
import { usermavenClient } from '@usermaven/sdk-js/dist/npm/usermaven.es';

const usermavenOpts = {
  key: 'UMLk4VFWIP',
  tracking_host: 'https://eventcollectors.usermaven.com/',
  autocapture: true,
};

const usermaven = usermavenClient(usermavenOpts);

export default boot(async ({ app, router }) => {

  router.beforeEach((to, from, next) => {
    usermaven.track("pageview");
    next();
  });

  // You can now use the Usermaven SDK in your Vue components
  app.config.globalProperties.$usermaven = usermaven;
});

export {
  usermaven,
};
