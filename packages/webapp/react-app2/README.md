Example of micro front end multi repository application

## Getting started

1. Install packages `npm i`
2. Bootstrap packages `lerna bootstrap`
3. Start apps `npm run dev`

### To start only some packages

 To start only some package `lerna run --scope={`[packages]`} watch`, example `lerna run --scope={react-app,} watch`