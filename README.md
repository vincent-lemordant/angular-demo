# Test Analyste-Programmeur (Angular)

Application listant les usagers obtenus d'un appel API à travers un tableau trié dans le browser (chrome).
L'application est réalisée dans le cadre d'un test technique ([voir les consignes](CONSIGNES.md)).

## Requirements

For building and running the application you need:

- [Angular 15](https://v15.angular.io/docs)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run start
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Test with [Karma](https://angular.dev/guide/testing) for unit & component testing

```sh
npm run test
```

### Test with [Cypress](https://www.cypress.io/) for e2e testing

**(Server must be running)**

```sh
npm run test:e2e
```

Test e2e with cypress opened :

```sh
npx cypress open
```
