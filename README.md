# BASIC LOGIN

This project was bootstrapped with the Vue-cli tool with these presets:

![vue-cli-presets3](https://user-images.githubusercontent.com/27022503/88460836-85e94280-ce9f-11ea-8eaa-3a2b1e42c3a2.png)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

To run the server with hot-reload just open a terminal and type:

```
npm run serve
```

Then you can visit `http://localhost:8080/` and see the result.

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Run your end-to-end tests

This kind of test needs [Google Chrome](https://www.google.com.mx/chrome/?brand=CHBD&gclid=EAIaIQobChMIrvuj4tXo6gIVhbp3Ch02PAFIEAAYASAAEgJjHPD_BwE&gclsrc=aw.ds) installed to run.

```
npm run test:e2e
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Fake API

We can find a mocked API to use in our APP at `./public/API/user.json`.

There is actually just two users in to make the login at the APP.

### Notes

In order to make the CI faster, actually we make the build only for node 10.x. If you want to change this, go to the main.yml file, delete the line `node-version: [10.x]` and uncomment the line below

```yml
strategy:
  matrix:
    node-version: [10.x]
    # node-version: [10.x, 12.x, 14.x] to make the buil in other NodeJs versions
```
