# quasar-locale-url

### Add support for locale URL by modifying the following files:
`src/boot/i18n.js` create i18n using the locale specified in the URL
`src/router/index.js` inject locale as an optional param to the routes, redirect to default locale URL if needed
#### Add locale link and locale selector components for changing locale within the website
`src/components/LocaleLink.vue` router link wrapper to preserve locale URL during navigation
`src/components/LocaleSelector.vue` allows changing locale within the website

## Install the dependencies
```bash
yarn
# or
npm install
```

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
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).
